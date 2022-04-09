const domController = (() => {
  const toggleDropDown = () => {
    document.querySelector(".nav__dropdown").classList.toggle("show");
  };

  document.querySelector(".nav__projects").onclick = toggleDropDown;
  return { toggleDropDown };
})();
export { domController };
