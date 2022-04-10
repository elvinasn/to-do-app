const domController = (() => {
  const toggleDropDown = () => {
    document.querySelector(".arrow-up").classList.toggle("rotate");
    document.querySelector(".nav__dropdown").classList.toggle("show");
  };
  document.querySelector("nav").addEventListener("click", (e) => {
    if (e.target.nodeName !== "NAV") {
      let target = e.target;
      console.log(target);
      while (target.nodeName !== "BUTTON") {
        console.log(target.parrentElement);
        target = target.parrentElement;
      }
    }
  });

  document.querySelector(".nav__projects").onclick = toggleDropDown;
  return { toggleDropDown };
})();
export { domController };
