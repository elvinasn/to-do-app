import closeIcon from "./images/close.svg";
import { Project } from "./project";
import { Task } from "./task";
import { helperFunctions } from "./helperFunctions";
const domModals = (() => {
  const modal_container = document.getElementById("modal-container");
  const addProjectModal = (projectsList) => {
    const modal = document.createElement("div");
    modal.classList.add("modal");

    modal.append(modalClose());

    const header = document.createElement("p");
    header.textContent = "Add a project";
    header.classList.add("modal__header");
    modal.appendChild(header);

    const form = document.createElement("form");
    const add = document.createElement("button");

    const errorMsg = document.createElement("p");
    errorMsg.classList.add("form__error");
    errorMsg.textContent = "Project named like this already exists!";

    const divName = document.createElement("div");

    const labelForName = document.createElement("label");
    labelForName.setAttribute("for", "name");
    labelForName.textContent = "Project name: ";
    divName.appendChild(labelForName);

    const inputName = document.createElement("input");

    inputName.type = "text";
    inputName.id = "name";
    inputName.required = true;
    inputName.maxLength = 20;
    inputName.addEventListener("input", () => {
      if (
        projectsList.some((project) => {
          return project.name == inputName.value;
        })
      ) {
        add.disabled = true;
        errorMsg.classList.add("show_error");
      } else {
        add.disabled = false;
        errorMsg.classList.remove("show_error");
      }
    });
    divName.appendChild(inputName);
    form.appendChild(divName);

    const divDescription = document.createElement("div");

    const labelForTextbox = document.createElement("label");
    labelForTextbox.setAttribute("for", "description");
    labelForTextbox.textContent = "Short project description: ";
    divDescription.appendChild(labelForTextbox);

    const inputDescription = document.createElement("textarea");
    inputDescription.id = "description";
    inputDescription.required = true;
    inputDescription.rows = 5;
    inputDescription.cols = 40;
    divDescription.appendChild(inputDescription);

    form.appendChild(divDescription);

    add.textContent = "Create project";
    add.classList.add("modal__button");
    form.appendChild(add);
    form.addEventListener("submit", () => {
      projectsList.push(Project(inputName.value, inputDescription.value));
      localStorage.setItem("projects", JSON.stringify(projectsList));
    });
    modal.appendChild(form);
    modal.appendChild(errorMsg);
    return modal;
  };
  const modalClose = () => {
    const button = document.createElement("button");
    button.classList.add("modal__close");

    const close = new Image();
    close.src = closeIcon;

    button.addEventListener("click", () => {
      modal_container.classList.remove("show-modal");
      modal_container.innerHTML = "";
    });

    button.appendChild(close);
    return button;
  };

  const editModal = (projectsList) => {
    const project = helperFunctions.getProjectByName(
      projectsList,
      document.querySelector(".main__header").textContent
    );
    const modal = document.createElement("div");
    modal.classList.add("modal");

    modal.append(modalClose());

    const header = document.createElement("p");
    header.textContent = "Edit project";
    header.classList.add("modal__header");
    modal.appendChild(header);

    const form = document.createElement("form");

    const divName = document.createElement("div");

    const labelForName = document.createElement("label");
    labelForName.setAttribute("for", "name");
    labelForName.textContent = "Project name: ";
    divName.appendChild(labelForName);

    const inputName = document.createElement("input");
    inputName.type = "text";
    inputName.id = "name";
    inputName.required = true;
    inputName.maxLength = 20;
    inputName.value = project.name;
    divName.append(inputName);
    form.appendChild(divName);

    const divDescription = document.createElement("div");

    const labelForTextbox = document.createElement("label");
    labelForTextbox.setAttribute("for", "description");
    labelForTextbox.textContent = "Short project description: ";
    divDescription.appendChild(labelForTextbox);

    const inputDescription = document.createElement("textarea");
    inputDescription.id = "description";
    inputDescription.required = true;
    inputDescription.rows = 5;
    inputDescription.cols = 40;
    inputDescription.value = project.description;
    divDescription.appendChild(inputDescription);

    form.appendChild(divDescription);

    const edit = document.createElement("button");
    edit.textContent = "Edit project";
    edit.classList.add("modal__button");
    form.appendChild(edit);
    form.addEventListener("submit", () => {
      const edittedProject = Project(inputName.value, inputDescription.value);
      projectsList[projectsList.indexOf(project)].name = inputName.value;
      projectsList[projectsList.indexOf(project)].description =
        inputDescription.value;

      localStorage.setItem("projects", JSON.stringify(projectsList));
    });
    modal.appendChild(form);
    return modal;
  };

  const deleteModal = (projectsList) => {
    const project = helperFunctions.getProjectByName(
      projectsList,
      document.querySelector(".main__header").textContent
    );

    const modal = document.createElement("div");
    modal.classList.add("modal");
    modal.append(modalClose());

    const header = document.createElement("p");
    header.textContent = "Do you really want to delete this project?";
    header.classList.add("modal__header");
    modal.appendChild(header);

    const form = document.createElement("form");

    const remove = document.createElement("button");
    remove.textContent = "Yes";
    remove.classList.add("modal__button");
    form.appendChild(remove);
    form.addEventListener("submit", () => {
      projectsList.splice(projectsList.indexOf(project), 1);
      localStorage.setItem("projects", JSON.stringify(projectsList));
    });
    modal.appendChild(form);

    return modal;
  };

  const deleteTaskModal = (index, projectsList, createProjectMain) => {
    const project = helperFunctions.getProjectByName(
      projectsList,
      document.querySelector(".main__header").textContent
    );
    const modal = document.createElement("div");
    modal.classList.add("modal");
    modal.append(modalClose());

    const header = document.createElement("p");
    header.textContent = "Do you really want to delete this task?";
    header.classList.add("modal__header");
    modal.appendChild(header);

    const form = document.createElement("form");

    const remove = document.createElement("button");
    remove.textContent = "Yes";
    remove.classList.add("modal__button");
    form.appendChild(remove);
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      projectsList[projectsList.indexOf(project)].listOfTasks.splice(index, 1);
      localStorage.setItem("projects", JSON.stringify(projectsList));
      modal_container.classList.remove("show-modal");
      modal_container.innerHTML = "";
      helperFunctions.refreshMain(
        projectsList,
        project,
        document.body.querySelector("main"),
        createProjectMain
      );
    });
    modal.appendChild(form);

    return modal;
  };

  const previewTaskModal = (task) => {
    const modal = document.createElement("div");
    modal.classList.add("modal");
    modal.append(modalClose());

    const header = document.createElement("p");
    header.textContent = task.task;
    header.classList.add("modal__header");
    modal.appendChild(header);

    const details = document.createElement("p");
    details.innerHTML = `<span>Details: </span>${task.description}`;
    modal.appendChild(details);

    const dueDate = document.createElement("p");
    dueDate.innerHTML = `<span>Due Date: </span>${task.dueDate}`;
    modal.appendChild(dueDate);

    const priority = document.createElement("p");
    priority.innerHTML = `<span>Priority: </span>${task.priority}`;
    modal.appendChild(priority);
    return modal;
  };
  const addTaskModal = (
    toAdd,
    projectsList,
    createProjectMain,
    index = 0,
    task = Task("", "", "low", "")
  ) => {
    const project = helperFunctions.getProjectByName(
      projectsList,
      document.querySelector(".main__header").textContent
    );

    const modal = document.createElement("div");
    modal.classList.add("modal");

    modal.append(modalClose());

    const header = document.createElement("p");
    header.textContent = "Add task";
    header.classList.add("modal__header");
    modal.appendChild(header);

    const form = document.createElement("form");
    const divTask = document.createElement("div");

    const labelForTask = document.createElement("label");
    labelForTask.setAttribute("for", "task");
    labelForTask.textContent = "Task Title: ";
    divTask.appendChild(labelForTask);

    const inputTask = document.createElement("input");
    inputTask.type = "text";
    inputTask.id = "task";
    inputTask.value = task.task;
    inputTask.required = true;
    inputTask.maxLength = 20;
    divTask.append(inputTask);
    form.appendChild(divTask);

    const divDescription = document.createElement("div");

    const labelForTaskDesc = document.createElement("label");
    labelForTaskDesc.setAttribute("for", "description");
    labelForTaskDesc.textContent = "Task Description: ";
    divDescription.appendChild(labelForTaskDesc);

    const inputDescription = document.createElement("textarea");
    inputDescription.id = "description";
    inputDescription.rows = 3;
    inputDescription.cols = 20;
    inputDescription.value = task.description;
    divDescription.appendChild(inputDescription);
    form.appendChild(divDescription);

    const divPriority = document.createElement("div");

    const labelForPriority = document.createElement("label");
    labelForPriority.setAttribute("for", "priority");
    labelForPriority.textContent = "Task Priority: ";
    divPriority.appendChild(labelForPriority);

    const inputPriority = document.createElement("select");
    inputPriority.id = "priority";

    const option1 = document.createElement("option");
    option1.value = "low";
    if (task.priority == option1.value) {
      option1.selected = true;
    }
    option1.textContent = "Low";
    inputPriority.appendChild(option1);

    const option2 = document.createElement("option");
    option2.value = "medium";
    option2.textContent = "Medium";
    if (task.priority == option2.value) {
      option2.selected = true;
    }
    inputPriority.appendChild(option2);

    const option3 = document.createElement("option");
    option3.value = "high";
    if (task.priority == option3.value) {
      option3.selected = true;
    }
    option3.textContent = "High";
    inputPriority.appendChild(option3);

    divPriority.appendChild(inputPriority);

    form.appendChild(divPriority);

    const divDueDate = document.createElement("div");

    const labelForDueDate = document.createElement("label");
    labelForDueDate.setAttribute("for", "dueDate");
    labelForDueDate.textContent = "Due Date: ";
    divDueDate.appendChild(labelForDueDate);

    const inputDueDate = document.createElement("input");

    inputDueDate.type = "date";
    inputDueDate.id = "dueDate";
    inputDueDate.value = task.dueDate;
    inputDueDate.min = helperFunctions.getTodayDate();
    inputDueDate.required = true;
    divDueDate.appendChild(inputDueDate);
    form.appendChild(divDueDate);

    if (toAdd) {
      const add = document.createElement("button");
      add.textContent = "ADD";
      add.classList.add("modal__button");
      form.appendChild(add);
      form.addEventListener("submit", (e) => {
        e.preventDefault();
        const newTask = Task(
          inputTask.value,
          inputDescription.value,
          inputPriority.value,
          inputDueDate.value
        );
        projectsList[projectsList.indexOf(project)].listOfTasks.push(newTask);
        localStorage.setItem("projects", JSON.stringify(projectsList));
        modal_container.classList.remove("show-modal");
        modal_container.innerHTML = "";
        helperFunctions.refreshMain(
          projectsList,
          project,
          document.querySelector("main"),
          createProjectMain
        );
      });
    } else {
      const edit = document.createElement("button");
      edit.textContent = "EDIT";
      edit.classList.add("modal__button");
      form.appendChild(edit);
      form.addEventListener("submit", (e) => {
        e.preventDefault();
        const newTask = Task(
          inputTask.value,
          inputDescription.value,
          inputPriority.value,
          inputDueDate.value,
          task.isDone
        );
        projectsList[projectsList.indexOf(project)].listOfTasks[index] =
          newTask;
        localStorage.setItem("projects", JSON.stringify(projectsList));
        modal_container.classList.remove("show-modal");
        modal_container.innerHTML = "";
        helperFunctions.refreshMain(
          projectsList,
          project,
          document.querySelector("main"),
          createProjectMain
        );
      });
    }

    modal.appendChild(form);

    return modal;
  };

  return {
    addProjectModal,
    editModal,
    deleteModal,
    deleteTaskModal,
    previewTaskModal,
    addTaskModal,
  };
})();
export { domModals };
