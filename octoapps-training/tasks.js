export const STORAGE_KEY = 'task-manager-v1';




export function loadTasks() {
    const data = localStorage.getItem(STORAGE_KEY);

  return data ? JSON.parse(data) : [];
}

export function saveTasks(tasks) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
}

export function addTask(title) {
  console.log("addTask called");
  const trimmed = title.trim();
  if (!trimmed) throw new Error('Task title cannot be blank.');
  if (trimmed.length > 200) throw new Error('Task title must be 200 characters or fewer.');

  const tasks = loadTasks();
  const newTask = {
    id: Date.now(),
    title: trimmed,
    completed: false,
    createdAt: new Date().toISOString(),
  };
  const updated = [...tasks, newTask];
  saveTasks(updated);
  return updated;
}

export function toggleTask(id) {
  const tasks = loadTasks();
  const updated = tasks.map(task =>
    task.id === id ? { ...task, completed: !task.completed } : task
  );
  saveTasks(updated);
  return updated;
}

export function deleteTask(id) {
  const tasks = loadTasks();
  const updated = tasks.filter(task => task.id !== id);
  saveTasks(updated);
  return updated;
}

export function setFilter(filter) {
  if (!['all', 'active', 'completed'].includes(filter)) {
    throw new Error(`Unknown filter: ${filter}`);
  }
  currentFilter = filter;
}

export function getFilter() {
  return currentFilter;
}

export function getFilteredTasks() {
  const tasks = loadTasks();
  if (currentFilter === 'active') return tasks.filter(t => !t.completed);
  if (currentFilter === 'completed') return tasks.filter(t => t.completed);
  return tasks;
}



// saveTasks([
//   { id: 1, title: "test", completed: false },
//   { id: 2, title: "Hello!", completed: true }
// ])
// addTask("Test")
// console.log(localStorage.getItem("task-manager-v1"));