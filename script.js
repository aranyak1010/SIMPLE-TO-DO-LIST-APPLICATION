const taskInput = document.getElementById('myInput');
const addButton = document.getElementById('mybtn');
const taskList = document.getElementById('myUL');

addButton.addEventListener('click', function () {
    const taskText = taskInput.value.trim();
    if (taskText != "") {
        const listItem = document.createElement('li');
        listItem.classList.add('task-item');

        const taskSpan = document.createElement('span');
        taskSpan.textContent = taskText;
        taskSpan.classList.add('task-text');

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('delete-button');

        const markAsDoneButton = document.createElement('button');
        markAsDoneButton.textContent = 'Mark As Done';
        markAsDoneButton.classList.add('mark-done-button');

        listItem.appendChild(taskSpan);
        listItem.appendChild(deleteButton);
        listItem.appendChild(markAsDoneButton);

        taskList.appendChild(listItem);
        taskInput.value = "";
    }
});

taskList.addEventListener('click', function (event) {
    if (event.target.classList.contains('delete-button')) {
        const listItem = event.target.parentNode;
        taskList.removeChild(listItem);
    }

    if (event.target.classList.contains('mark-done-button')) {
        const taskElement = event.target.parentNode.querySelector('.task-text');
        taskElement.classList.toggle('done');
        const taskText = taskElement.innerText;
        const message = `Yay! Task "${taskText}" is accomplished.`;
        alert(message);
    }
});
