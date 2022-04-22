import projectImg from "./images/singleproj.svg";
import editIcon from "./images/edit.svg";
import deleteIcon from "./images/delete.svg";
import { helperFunctions } from "./helperFunctions";
import { Project } from "./project";
import { Task } from "./task";
import { domModals } from "./domModals";
import * as dates from "date-fns";

const domController = (() => {
  const dropDownContainer = document.querySelector(".nav__dropdown");
  let projectsList;
  let hideCheck;
  if (localStorage.getItem("projects")) {
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

  const init = () => {
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

    document.body.removeChild(document.querySelector("main"));
    main = createProjectMain(today, false, projects);
    document.body.appendChild(main);
  };
  const updateProjects = () => {
    dropDownContainer.innerHTML = "";
    let i = 0;
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
      document.body.removeChild(document.querySelector("main"));
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

      document.body.removeChild(document.querySelector("main"));
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

      document.body.removeChild(document.querySelector("main"));
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
        modal_container.appendChild(domModals.editModal(projectsList));
        modal_container.classList.add("show-modal");
      });
      editToolTip.appendChild(edit);
      headerDiv.appendChild(editToolTip);

      const removeToolTip = createToolTip("REMOVE PROJECT");

      const remove = new Image();
      remove.src = deleteIcon;
      remove.addEventListener("click", () => {
        modal_container.appendChild(domModals.deleteModal(projectsList));
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
      addTask.classList.add("addtask__button");
      addTask.textContent = "ADD TASK";

      addTask.addEventListener("click", () => {
        modal_container.classList.add("show-modal");
        modal_container.appendChild(
          domModals.addTaskModal(true, projectsList, createProjectMain)
        );
      });
      main.appendChild(addTask);
    }

    if (project.listOfTasks.length > 0) {
      const hideDiv = document.createElement("div");
      hideDiv.classList.add("tasks__hide");
      const hideText = document.createElement("p");
      hideText.textContent = "HIDE DONE TASKS";
      hideText.style.fontWeight = 700;
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
          if (task.dataset.isdone === "true") {
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
        helperFunctions.refreshMain(
          projectsList,
          project,
          document.body.querySelector("main"),
          createProjectMain
        );
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
        domModals.addTaskModal(false, projectsList, wrapper.dataset.index, task)
      );
    });
    editToolTip.appendChild(editTask);

    rightSide.appendChild(editToolTip);

    const removeToolTip = createToolTip("REMOVE TASK");
    const removeTask = new Image();
    removeTask.src = deleteIcon;
    removeTask.addEventListener("click", () => {
      modal_container.classList.add("show-modal");
      modal_container.appendChild(
        domModals.deleteTaskModal(
          wrapper.dataset.index,
          projectsList,
          createProjectMain
        )
      );
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
        modal_container.appendChild(domModals.previewTaskModal(task));
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
        modal_container.appendChild(domModals.previewTaskModal(task));
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

  open.addEventListener("click", () => {
    modal_container.appendChild(domModals.addProjectModal(projectsList));
    modal_container.classList.add("show-modal");
  });

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

  updateProjects();
  return { init };
})();
export { domController };
