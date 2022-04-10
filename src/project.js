const Project = (name) => {
  const getName = () => name;
  const getTask = (index) => listOfTasks[index];
  const addTask = (task) => listOfTasks.push(task);
  const removeTask = (index) => listOfTasks.splice(index, 1);

  return { getName, getTask, addTask, removeTask };
};
export { Project };
