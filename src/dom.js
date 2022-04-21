import { Project } from "./project";
import projectImg from "./images/singleproj.svg";
import editIcon from "./images/edit.svg";
import deleteIcon from "./images/delete.svg";
import { helperFunctions } from "./helperFunctions";
import { Task } from "./task";
import closeIcon from "./images/close.svg";
import * as dates from "date-fns";

const domController = (() => {
  const dropDownContainer = document.querySelector(".nav__dropdown");
  let projectsList;
  let hideCheck;
  if (localStorage.getItem("projects")) {
    console.log("aa");
    projectsList = JSON.parse(localStorage.getItem("projects"));
  } else {
    projectsList = [Project("Project 1", "This is example of a project.")];
  }
  if (localStorage.getItem("hideCheck")) {
    hideCheck = localStorage.getItem("hideCheck") === "true";
  } else {
    hideCheck = false;
  }
  localStorage.setItem("projects", JSON.stringify(projectsList));
  const open = document.getElementById("add_project");
  const modal_container = document.getElementById("modal-container");
  let main = document.querySelector("main");

  /// TODO: Update this method
  const updateProjects = () => {
    dropDownContainer.innerHTML = "";
    let i = 0;
    console.log(projectsList);
    projectsList.forEach((project) => {
      const button = document.createElement("button");
      button.dataset.index = i;
      button.classList.add("nav__section");
      button.classList.add("project");
      const icon = new Image();
      icon.src = projectImg;
      button.appendChild(icon);
      const name = document.createElement("p");
      name.textContent = project.name;
      button.appendChild(name);
      dropDownContainer.appendChild(button);
      i++;
    });
    dropDownContainer.appendChild(open);
  };
  const toggleDropDown = () => {
    document.querySelector(".arrow-up").classList.toggle("rotate");
    dropDownContainer.classList.toggle("show");
  };

  document.querySelector("nav").addEventListener("click", (e) => {
    let button = e.target.closest("button");
    putActive(e, button);
    if (isProject(button)) {
      document.body.removeChild(main);
      main = createProjectMain(projectsList[button.dataset.index], true);
      document.body.appendChild(main);
    }
    if (e.target.closest("button").classList.contains("nav__today")) {
      let today = Project("Today", "");
      let projects = [];
      projectsList.forEach((project) => {
        project.listOfTasks.forEach((task) => {
          if (dates.isToday(dates.parseISO(task.dueDate))) {
            today.listOfTasks.push(task);
            projects.push(project.name);
          }
        });
      });

      document.body.removeChild(main);
      main = createProjectMain(today, false, projects);
      document.body.appendChild(main);
    }
    if (e.target.closest("button").classList.contains("nav__thisweek")) {
      let today = Project("This Week", "");
      let projects = [];
      projectsList.forEach((project) => {
        project.listOfTasks.forEach((task) => {
          if (dates.isThisISOWeek(dates.parseISO(task.dueDate))) {
            today.listOfTasks.push(task);
            projects.push(project.name);
          }
        });
      });

      document.body.removeChild(main);
      main = createProjectMain(today, false, projects);
      document.body.appendChild(main);
    }
  });

  const putActive = (e, button) => {
    if (e.target.nodeName !== "NAV") {
      const buttons = Array.from(document.querySelectorAll("nav button"));
      buttons.forEach((current) => {
        if (current !== button) {
          current.classList.remove("active");
        } else if (
          !current.classList.contains("nav__projects") &&
          current.id !== "add_project"
        ) {
          current.classList.add("active");
          return;
        }
      });
    }
  };

  const isProject = (button) => {
    const projectButtons = document.querySelectorAll(".project");
    return Array.from(projectButtons).includes(button);
  };

  const addProjectModal = () => {
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
      console.log(inputName.value);
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

  const editModal = () => {
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

  const deleteModal = () => {
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
  const deleteTaskModal = (index) => {
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
      refreshMain(project);
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

  const createProjectMain = (project, isProject, projects = "") => {
    const main = document.createElement("main");
    const headerDiv = document.createElement("div");
    headerDiv.classList.add("main__header-div");

    const projectHeader = document.createElement("p");
    projectHeader.classList.add("main__header");
    projectHeader.textContent = project.name;
    headerDiv.appendChild(projectHeader);
    if (isProject) {
      const editToolTip = createToolTip("EDIT PROJECT");

      const edit = new Image();
      edit.src = editIcon;
      edit.addEventListener("click", () => {
        modal_container.appendChild(editModal());
        modal_container.classList.add("show-modal");
      });
      editToolTip.appendChild(edit);
      headerDiv.appendChild(editToolTip);

      const removeToolTip = createToolTip("REMOVE PROJECT");

      const remove = new Image();
      remove.src = deleteIcon;
      remove.addEventListener("click", () => {
        modal_container.appendChild(deleteModal());
        modal_container.classList.add("show-modal");
      });
      removeToolTip.appendChild(remove);
      headerDiv.appendChild(removeToolTip);
    }
    main.appendChild(headerDiv);
    if (isProject) {
      const projectDescription = document.createElement("p");
      projectDescription.classList.add("main__description");
      projectDescription.textContent = project.description;
      main.appendChild(projectDescription);

      const addTask = document.createElement("button");
      addTask.textContent = "Add task";

      addTask.addEventListener("click", () => {
        modal_container.classList.add("show-modal");
        modal_container.appendChild(addTaskModal(true));
      });
      main.appendChild(addTask);
    }

    if (project.listOfTasks.length > 0) {
      const hideDiv = document.createElement("div");
      hideDiv.classList.add("tasks__hide");
      const hideText = document.createElement("p");
      hideText.textContent = "HIDE DONE TASKS";
      hideDiv.appendChild(hideText);

      const toggleDone = document.createElement("label");
      toggleDone.classList.add("switch");

      const checkBox = document.createElement("input");
      checkBox.type = "checkbox";
      checkBox.checked = hideCheck;
      checkBox.addEventListener("change", () => {
        hideCheck = checkBox.checked;
        localStorage.setItem("hideCheck", checkBox.checked);
        let tasks = document.querySelectorAll(".project__task");
        Array.from(tasks).forEach((task) => {
          console.log(task.dataset.isdone);
          console.log(task.classList);
          if (task.dataset.isdone === "true") {
            console.log("aaa");
            task.classList.toggle("hide");
          }
        });
      });

      toggleDone.appendChild(checkBox);
      const span = document.createElement("span");
      span.classList.add("slider");
      span.classList.add("round");
      toggleDone.appendChild(span);
      hideDiv.appendChild(toggleDone);
      main.appendChild(hideDiv);
      main.appendChild(createTaskHeaders(isProject));
      let i = 0;
      project.listOfTasks.sort(function (a, b) {
        return new Date(a.dueDate) - new Date(b.dueDate);
      });
      if (isProject) {
        project.listOfTasks.forEach((task) => {
          main.appendChild(createTaskDiv(task, i, hideCheck));
          i++;
        });
      } else {
        project.listOfTasks.forEach((task) => {
          main.appendChild(
            createUnEditableTaskDiv(task, projects[i], hideCheck)
          );
          i++;
        });
      }
    } else {
      const noTasks = document.createElement("p");
      noTasks.classList.add("main__header");
      noTasks.textContent = "No tasks yet!";
      main.appendChild(noTasks);
    }

    return main;
  };

  const createTaskDiv = (task, index, hideDone) => {
    const wrapper = document.createElement("div");
    wrapper.classList.add("project__task");
    wrapper.dataset.index = index;

    const taskPara = document.createElement("p");
    taskPara.classList.add("task__left");
    taskPara.textContent = task.task;

    const toggleDone = document.createElement("label");
    toggleDone.classList.add("switch");

    const checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    checkBox.checked = task.isDone;
    toggleDone.appendChild(checkBox);
    checkBox.addEventListener("change", () => {
      const project = helperFunctions.getProjectByName(
        projectsList,
        document.querySelector(".main__header").textContent
      );
      projectsList[projectsList.indexOf(project)].listOfTasks[index].isDone =
        checkBox.checked;
      wrapper.dataset.isdone = checkBox.checked;
      localStorage.setItem("projects", JSON.stringify(projectsList));

      setTimeout(() => {
        refreshMain(project);
      }, 500);
    });

    const span = document.createElement("span");
    span.classList.add("slider");
    span.classList.add("round");
    toggleDone.appendChild(span);
    taskPara.appendChild(toggleDone);

    wrapper.appendChild(taskPara);

    switch (task.priority) {
      case "low":
        wrapper.classList.add("left-border-green");
        break;
      case "medium":
        wrapper.classList.add("left-border-yellow");
        break;
      case "high":
        wrapper.classList.add("left-border-red");
        break;
    }
    const rightSide = document.createElement("div");
    rightSide.classList.add("task__options");

    const editToolTip = createToolTip("EDIT TASK");
    const editTask = new Image();
    editTask.src = editIcon;
    editTask.addEventListener("click", () => {
      modal_container.classList.add("show-modal");
      modal_container.appendChild(
        addTaskModal(false, wrapper.dataset.index, task)
      );
    });
    editToolTip.appendChild(editTask);

    rightSide.appendChild(editToolTip);

    const removeToolTip = createToolTip("REMOVE TASK");
    const removeTask = new Image();
    removeTask.src = deleteIcon;
    removeTask.addEventListener("click", () => {
      modal_container.classList.add("show-modal");
      modal_container.appendChild(deleteTaskModal(wrapper.dataset.index));
    });
    removeToolTip.appendChild(removeTask);
    rightSide.appendChild(removeToolTip);

    const dueDate = document.createElement("p");
    dueDate.textContent = task.dueDate;
    rightSide.appendChild(dueDate);
    wrapper.appendChild(rightSide);
    if (task.isDone) {
      wrapper.classList.add("task__done");
    }
    wrapper.addEventListener("click", (e) => {
      if (e.target.nodeName == "P" || e.target.nodeName == "DIV") {
        modal_container.classList.add("show-modal");
        modal_container.appendChild(previewTaskModal(task));
      }
    });
    if (
      dates.isPast(dates.parseISO(task.dueDate)) &&
      !dates.isToday(dates.parseISO(task.dueDate)) &&
      !task.isDone
    ) {
      wrapper.classList.add("expired__task");
    }
    if (hideDone && task.isDone) {
      wrapper.classList.add("hide");
    }
    wrapper.dataset.isdone = task.isDone;
    return wrapper;
  };

  const createUnEditableTaskDiv = (task, project, hideDone) => {
    const wrapper = document.createElement("div");
    wrapper.classList.add("project__task");

    const taskPara = document.createElement("p");
    taskPara.classList.add("task__left");
    taskPara.innerHTML = `${task.task}<span> (${project})</span>`;
    wrapper.appendChild(taskPara);

    switch (task.priority) {
      case "low":
        wrapper.classList.add("left-border-green");
        break;
      case "medium":
        wrapper.classList.add("left-border-yellow");
        break;
      case "high":
        wrapper.classList.add("left-border-red");
        break;
    }
    const rightSide = document.createElement("div");
    rightSide.classList.add("task__options");

    const dueDate = document.createElement("p");
    dueDate.textContent = task.dueDate;
    rightSide.appendChild(dueDate);
    wrapper.appendChild(rightSide);
    if (task.isDone) {
      wrapper.classList.add("task__done");
    }
    wrapper.addEventListener("click", (e) => {
      if (e.target.nodeName == "P" || e.target.nodeName == "DIV") {
        modal_container.classList.add("show-modal");
        modal_container.appendChild(previewTaskModal(task));
      }
    });
    if (hideDone && task.isDone) {
      wrapper.classList.add("hide");
    }
    wrapper.dataset.isdone = task.isDone;
    return wrapper;
  };

  const createToolTip = (text) => {
    const toolTip = document.createElement("div");
    toolTip.classList.add("tooltip");
    const tooltipText = document.createElement("span");
    tooltipText.classList.add("tooltiptext");
    tooltipText.textContent = text;
    toolTip.appendChild(tooltipText);
    return toolTip;
  };

  const createTaskHeaders = (isProject) => {
    const wrapper = document.createElement("div");
    wrapper.classList.add("task__headers");

    const taskPara = document.createElement("p");
    taskPara.textContent = isProject ? "TASK" : "TASK (PROJECT)";
    wrapper.appendChild(taskPara);
    const dueDate = document.createElement("p");
    dueDate.textContent = "DUE DATE";
    wrapper.appendChild(dueDate);
    return wrapper;
  };

  const addTaskModal = (toAdd, index = 0, task = Task("", "", "low", "")) => {
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
    inputDescription.required = true;
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
    // TODO: Extract this function
    let today = new Date();
    let dd = today.getDate();
    let mm = today.getMonth() + 1; //January is 0!
    let yyyy = today.getFullYear();

    if (dd < 10) {
      dd = "0" + dd;
    }

    if (mm < 10) {
      mm = "0" + mm;
    }

    today = yyyy + "-" + mm + "-" + dd;
    inputDueDate.type = "date";
    inputDueDate.id = "dueDate";
    inputDueDate.value = task.dueDate;
    inputDueDate.min = today;
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
        refreshMain(project);
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
        refreshMain(project);
      });
    }

    modal.appendChild(form);

    return modal;
  };
  open.addEventListener("click", () => {
    modal_container.appendChild(addProjectModal());
    modal_container.classList.add("show-modal");
  });

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
  window.onclick = (e) => {
    if (modal_container.classList.contains("show-modal")) {
      if (
        e.target.closest(".modal") === null &&
        e.target.closest("#modal-container") !== null
      ) {
        modal_container.classList.remove("show-modal");
        modal_container.innerHTML = "";
      }
    }
  };
  document.querySelector(".nav__projects").onclick = toggleDropDown;

  const refreshMain = (project) => {
    document.body.removeChild(main);
    main = createProjectMain(projectsList[projectsList.indexOf(project)], true);
    document.body.appendChild(main);
  };
  updateProjects();
  return {};
})();
export { domController };
