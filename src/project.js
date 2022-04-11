const Project = (name) => {
  let listOfTasks = [];
  const getName = () => name;
  const addTask = (task) => listOfTasks.push(task);
  const removeTask = (index) => listOfTasks.splice(index, 1);
  const get = () => {
    return Object.freeze({
      name,
      listOfTasks,
    });
  };
  const toJSON = () => {
    return get();
  };

  return Object.freeze({
    toJSON,
    getName,
    addTask,
    removeTask,
    get,
  });
};
export { Project };
