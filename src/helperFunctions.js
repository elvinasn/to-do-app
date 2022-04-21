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


  return { getProjectByName };
})();
export { helperFunctions };
