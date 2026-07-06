//Importing my Functions to they work when called
import { saveTasks, loadTasks, addTask } from './tasks.js';
let tasks = loadTasks();
tasks = addTask("Study");
saveTasks(tasks);