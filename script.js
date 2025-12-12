let tasks = [];

const taskForm = document.getElementById('taskForm');
const tasksContainer = document.getElementById('tasksContainer');

taskForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    const priority = document.getElementById('priority').value;
    const status = document.getElementById('status').value;

    const task = { title, description, priority, status };
    tasks.push(task);
    renderTasks(tasks);
    taskForm.reset();
});

function renderTasks(tasksToRender) {
    tasksContainer.innerHTML = '';
    tasksToRender.forEach((task, index) => {
        const taskDiv = document.createElement('div');
        taskDiv.classList.add('task');
        taskDiv.classList.add(task.status.toLowerCase().replace(' ', '-'));
        taskDiv.innerHTML = `
            <div>
                <h3>${task.title} (${task.priority})</h3>
                <p>${task.description}</p>
                <p>Status: ${task.status}</p>
            </div>
            <div>
                <button onclick="deleteTask(${index})">Delete</button>
            </div>
        `;
        tasksContainer.appendChild(taskDiv);
    });
}

function deleteTask(index) {
    tasks.splice(index, 1);
    renderTasks(tasks);
}

// Filter buttons
document.getElementById('allTasksBtn').addEventListener('click', () => renderTasks(tasks));
document.getElementById('completedBtn').addEventListener('click', () => renderTasks(tasks.filter(t => t.status === 'Completed')));
document.getElementById('inProgressBtn').addEventListener('click', () => renderTasks(tasks.filter(t => t.status === 'In Progress')));
document.getElementById('notStartedBtn').addEventListener('click', () => renderTasks(tasks.filter(t => t.status === 'Not Started')));
