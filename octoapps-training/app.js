//Importing my Functions to they work when called
import { saveTasks,
     loadTasks, 
     addTask,
    deleteTask,
    setFilter,
    getFilter,
    getFilteredTasks,
    getStats } from './tasks.js';
function renderTasks() {
  const listEl = document.getElementById('task-list');
  const emptyEl = document.getElementById('empty-state');
  const tasks = getFilteredTasks();
    if (tasks.length === 0) {
    listEl.innerHTML = '';
    emptyEl.hidden = false;
  } else {
    emptyEl.hidden = true;
    listEl.innerHTML = tasks
      .map(task => `
        <li class="task-item ${task.completed ? 'completed' : ''}" data-id="${task.id}">
          <input
            type="checkbox"
            ${task.completed ? 'checked' : ''}
            aria-label="Mark ${escapeHtml(task.title)} complete"
            data-action="toggle"
            data-testid="task-item-toggle"
          />
          <span class="task-title">${escapeHtml(task.title)}</span>
          <button
            class="task-delete"
            aria-label="Delete ${escapeHtml(task.title)}"
            data-action="delete"
            data-testid="task-item-delete"
          >✕</button>
        </li>
      `)
      .join('');
  }

  updateStats();
}