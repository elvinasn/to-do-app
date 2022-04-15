const Task = (task, description, priority, dueDate, isDone = false) => {
  return { task, description, priority, dueDate, isDone };
};
export { Task };
