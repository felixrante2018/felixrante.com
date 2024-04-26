const todoInput = document.getElementById('todo-input');
const addTodoButton = document.getElementById('add-todo');
const todoList = document.getElementById('todo-list');

let todos = [];

function renderTodos() {
 todoList.innerHTML = '';
 todos.forEach((todo, index) => {
   const li = document.createElement('li');
   const span = document.createElement('span');
   span.textContent = todo;
   
   const deleteButton = document.createElement('button');
   deleteButton.textContent = 'Delete';
   deleteButton.addEventListener('click', () => {
     deleteTodo(index);
   });
   
   li.appendChild(span);
   li.appendChild(deleteButton);
   todoList.appendChild(li);
 });
}

function addTodo() {
 const todoText = todoInput.value.trim();
 if (todoText) {
   todos.push(todoText);
   todoInput.value = '';
   renderTodos();
 }
}

function deleteTodo(index) {
 todos.splice(index, 1);
 renderTodos();
}

addTodoButton.addEventListener('click', addTodo);
todoInput.addEventListener('keydown', (event) => {
 if (event.key === 'Enter') {
   addTodo();
 }
});

renderTodos();