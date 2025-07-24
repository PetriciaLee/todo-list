document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const addTaskButton = document.getElementById('addTaskButton');
    const taskList = document.getElementById('taskList');

    addTaskButton.addEventListener('click', () => {
        const taskText = taskInput.value.trim();
        if (taskText !== '') {
            const listItem = document.createElement('li');
            listItem.textContent = taskText;

            // Dodaj gumb za brisanje (opcionalno, možeš dodati kasnije)
            // const deleteButton = document.createElement('button');
            // deleteButton.textContent = 'X';
            // deleteButton.addEventListener('click', () => {
            //     taskList.removeChild(listItem);
            // });
            // listItem.appendChild(deleteButton);

            taskList.appendChild(listItem);
            taskInput.value = ''; // Očisti input polje
        }
    });
});
