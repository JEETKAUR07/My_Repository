document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('form');
    const taskInput = document.getElementById('task-input');
    const tasksContainer = document.getElementById('tasks');

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const taskText = taskInput.value;
        const taskDiv = document.createElement('div');
        taskDiv.classList.add('task');

        const taskContent = document.createElement('span');
        taskContent.textContent = taskText;
        taskDiv.appendChild(taskContent);

        const completeCheckbox = document.createElement('input');
        completeCheckbox.type = 'checkbox';
        completeCheckbox.addEventListener('change', () => {
            taskContent.classList.toggle('completed');
        });
        taskDiv.appendChild(completeCheckbox);

        const deleteButton = document.createElement('span');
        deleteButton.textContent = '❌';
        deleteButton.classList.add('delete');
        deleteButton.addEventListener('click', () => {
            tasksContainer.removeChild(taskDiv);
        });
        taskDiv.appendChild(deleteButton);

        tasksContainer.appendChild(taskDiv);
        taskInput.value = '';
    });
});