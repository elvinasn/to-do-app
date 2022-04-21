import * as dates from "date-fns";
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

  return { getProjectByName, refreshMain };
})();
export { helperFunctions };
