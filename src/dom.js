import { Project } from "./project";
import projectImg from "./images/singleproj.svg";
const domController = (() => {
  const dropDownContainer = document.querySelector(".nav__dropdown");
  const projectLists = [];
  const open = document.getElementById("add_project");
  const modal_container = document.getElementById("modal-container");

  const proj1 = Project("Project 1");
  console.log(proj1);
  proj1.addTask("labas");
  console.log(proj1.get());
  const objproj1 = JSON.stringify(proj1);
  const proj = JSON.parse(objproj1);
  proj.addTask("rajonas");

  projectLists.push(JSON.stringify(Project("Project 1")));
  projectLists.push(JSON.stringify(Project("Project 2")));

  localStorage.setItem("projects", JSON.stringify(projectLists));
  let list = JSON.parse(localStorage.getItem("projects"));

  const updateProjects = () => {
    dropDownContainer.innerHTML = "";
    projectLists.forEach((project) => {
      const button = document.createElement("button");
      button.classList.add("nav__section");
      const icon = new Image();
      icon.src = projectImg;
      button.appendChild(icon);
      const name = document.createElement("p");
      // name.textContent = JSON.parse(project).getName();
      button.appendChild(name);
      dropDownContainer.appendChild(button);
    });
    dropDownContainer.appendChild(open);
  };
  const toggleDropDown = () => {
    document.querySelector(".arrow-up").classList.toggle("rotate");
    dropDownContainer.classList.toggle("show");
  };

  document.querySelector("nav").addEventListener("click", (e) => {
    if (e.target.nodeName !== "NAV") {
      let button = e.target.closest("button");
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
  });

  const addProjectModal = () => {
    const modal = document.createElement("div");
    modal.classList.add("modal");

    const header = document.createElement("p");
    header.textContent = "Add a project";
    header.classList.add("modal__header");
    modal.appendChild(header);

    const form = document.createElement("form");

    const label = document.createElement("label");
    label.setAttribute("for", "name");
    label.textContent = "Project name: ";
    form.appendChild(label);

    const input = document.createElement("input");
    input.type = "text";
    input.id = "name";
    input.required = true;
    form.appendChild(input);

    const add = document.createElement("button");
    add.textContent = "Create project";
    add.classList.add("modal__button");
    form.appendChild(add);
    form.addEventListener("submit", () => {
      projectLists.push(Project(input.value));
    });
    modal.appendChild(form);
    return modal;
  };

  open.addEventListener("click", () => {
    modal_container.appendChild(addProjectModal());
    modal_container.classList.add("show-modal");
  });

  document.querySelector(".nav__projects").onclick = toggleDropDown;
  updateProjects();
  return {};
})();
export { domController };
