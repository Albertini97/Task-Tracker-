let tasks = [];

document.getElementById('taskInput').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        const taskDescription = this.value.trim();
        if (taskDescription) {
            tasks.push({ description: taskDescription, completed: false });
            this.value = '';
            renderTasks();
        }
    }
});

function renderTasks() {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';

    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.className = task.completed ? 'completed' : '';

        const span = document.createElement('span');
        span.textContent = task.description;
        span.addEventListener('click', () => toggleTaskCompletion(index));

        const button = document.createElement('button');
        button.textContent = 'Eliminar';
        button.addEventListener('click', () => deleteTask(index));

        li.appendChild(span);
        li.appendChild(button);
        taskList.appendChild(li);
    });
}

function toggleTaskCompletion(index) {
    tasks[index].completed = !tasks[index].completed;
    renderTasks();
}

function deleteTask(index) {
    tasks.splice(index, 1);
    renderTasks();
}

renderTasks();