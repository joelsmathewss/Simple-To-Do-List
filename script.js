document.addEventListener('DOMContentLoaded', function() {
    const todoForm = document.getElementById('todo-form');
    const todoInput = document.getElementById('todo-input');
    const todoList = document.getElementById('todo-list');

    todoForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission

        const taskText = todoInput.value.trim();
        if (taskText !== '') {
            addTask(taskText);
            todoInput.value = ''; // Clear input field after adding task
        }
    });

    function addTask(taskText) {
        const newTask = document.createElement('li');

        // Create checkbox
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.addEventListener('change', function() {
            if (checkbox.checked) {
                newTask.style.textDecoration = 'line-through';
            } else {
                newTask.style.textDecoration = 'none';
            }
        });

        // Create label for task text
        const taskLabel = document.createElement('label');
        taskLabel.textContent = taskText;

        // Append checkbox and task text label to the task item
        newTask.appendChild(checkbox);
        newTask.appendChild(taskLabel);

        // Append task item to the todo list
        todoList.appendChild(newTask);
    }
});
