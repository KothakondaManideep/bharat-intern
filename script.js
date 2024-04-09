document.addEventListener('DOMContentLoaded', function () {
    const taskInput = document.getElementById('taskInput');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskList = document.getElementById('taskList');

    addTaskBtn.addEventListener('click', function () {
        const taskText = taskInput.value.trim();
        if (taskText !== '') {
            const li = document.createElement('li');
            li.innerHTML = `
                <span>${taskText}</span>
                <button class="editBtn">Edit</button>
                <button class="deleteBtn">Delete</button>
            `;
            taskList.appendChild(li);
            taskInput.value = '';
        }
    });

    taskList.addEventListener('click', function (e) {
        if (e.target.classList.contains('editBtn')) {
            const span = e.target.previousElementSibling;
            const newText = prompt('Edit task:', span.textContent.trim());
            if (newText !== null && newText !== '') {
                span.textContent = newText;
            }
        } else if (e.target.classList.contains('deleteBtn')) {
            const li = e.target.parentElement;
            taskList.removeChild(li);
        }
    });
});
