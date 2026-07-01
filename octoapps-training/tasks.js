export const STORAGE_KEY = 'task-manager-v1';




export function loadTasks() {
    const data = localStorage.getItem(STORAGE_KEY);

  return data ? JSON.parse(data) : [];
}

export function saveTasks(tasks) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
}

export function addTasks(tasks){
    //Code here
}

saveTasks([
  { id: 1, title: "test", completed: false },
  { id: 2, title: "Hello!", completed: true }
])
console.log(localStorage.getItem("task-manager-v1"));