// Task Manager App

// Select elements
const taskInput = document.getElementById('task-input');
const addTaskBtn = document.getElementById('add-task-btn');
const taskList = document.getElementById('task-list');

// Load tasks from localStorage
function loadTasks() {
    taskList.innerHTML = '';
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.forEach((task, index) => {
        addTaskToDOM(task, index);
    });
}

// Add task to localStorage and DOM
function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText === '') return;
    
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.push(taskText);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    
    addTaskToDOM(taskText, tasks.length - 1);
    taskInput.value = '';
}

// Add task to DOM
function addTaskToDOM(taskText, index) {
    const li = document.createElement('li');
    li.innerHTML = `
        <span>${taskText}</span>
        <button onclick="deleteTask(${index})">Delete</button>
    `;
    taskList.appendChild(li);
}

// Delete task
function deleteTask(index) {
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.splice(index, 1);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    loadTasks();
}

// Event Listeners
addTaskBtn.addEventListener('click', addTask);
window.addEventListener('load', loadTasks);
