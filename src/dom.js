const domController = (() => {
  const toggleDropDown = () => {
    document.querySelector(".arrow-up").classList.toggle("rotate");
    document.querySelector(".nav__dropdown").classList.toggle("show");
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

  const open = document.getElementById("add_project");
  const modal_container = document.getElementById("modal-container");
  const close = document.getElementById("close");

  open.addEventListener("click", () => {
    modal_container.classList.add("show-modal");
  });

  close.addEventListener("click", () => {
    modal_container.classList.remove("show-modal");
  });

  document.querySelector(".nav__projects").onclick = toggleDropDown;
  return { toggleDropDown };
})();
export { domController };
