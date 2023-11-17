const todoTitle = document.getElementById('todo-title');
const todoDescription = document.getElementById('todo-description');
const todoList = document.getElementById('todo-list');

function addTodo() {
    const titleText = todoTitle.value.trim();
    const descriptionText = todoDescription.value.trim();
    
    if (titleText !== '' && descriptionText !== '') {
        const li = document.createElement('li');
        li.innerHTML = `
            <div>${titleText}</div>
            <div>${descriptionText}</div>
            <button onclick="removeTodo(this)">X</button>
        `;
        todoList.appendChild(li);
        todoTitle.value = '';
        todoDescription.value = '';
    }
}

function removeTodo(button) {
    const li = button.parentElement;
    todoList.removeChild(li);
}

todoDescription.addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
        addTodo();
    }
});