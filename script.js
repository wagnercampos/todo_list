document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('formulario-tarefas');
    const input = document.getElementById('tarefa-input');
    const taskList = document.getElementById('lista-tarefas');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const taskText = input.value.trim();
        if (taskText !== '') {
            const taskItem = createTaskItem(taskText);
            taskList.appendChild(taskItem);
            input.value = '';
        }
    });

    function createTaskItem(taskText) {
        const taskItem = document.createElement('li');
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.addEventListener('change', function() {
            if (this.checked) {
                taskTextElement.classList.add('task-done');
            } else {
                taskTextElement.classList.remove('task-done');
            }
        });
        const taskTextElement = document.createElement('span');
        taskTextElement.textContent = taskText;
        taskItem.appendChild(checkbox);
        taskItem.appendChild(taskTextElement);
        return taskItem;
    }
});