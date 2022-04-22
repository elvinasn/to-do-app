const helperFunctions = (() => {
  const getProjectByName = (projectsList, name) => {
    let found;
    projectsList.forEach((element) => {
      if (element.name === name) {
        found = element;
        return;
      }
    });
    return found;
  };
  const refreshMain = (projectsList, project, main, createProjectMain) => {
    document.body.removeChild(main);
    main = createProjectMain(projectsList[projectsList.indexOf(project)], true);
    document.body.appendChild(main);
  };
  const getTodayDate = () =>{
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
    return today;
  }

  return { getProjectByName, refreshMain, getTodayDate };
})();
export { helperFunctions };
