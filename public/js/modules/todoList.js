export const todoList = document.getElementById('todos-list');
const form = document.getElementById('todo-form');
const todoInput = document.getElementById('new-todo');
const todoNotification = document.querySelector('.todo-notification');

let todos = JSON.parse(localStorage.getItem('todos')) || [];
let EditTodoId = -1;


const renderTodos = () => {
  if (todos.length === 0) {
    todoList.innerHTML = '<center class="text">Nothing to do!</center>';
    return;
  };

  todoList.innerHTML = '';

  todos.forEach((todo, index) => {
    todoList.innerHTML += `
  <div class="todo" id=${index}>
    <i 
      class="bi ${todo.checked ? 'bi-check-circle-fill' : 'bi-circle-fill'}"
      style="color : ${todo.color}"
      data-action="check"
    ></i>
    <p class="${todo.checked ? 'checked' : ''}" data-action="check">${todo.value}</p>
    <i class="bi bi-slash-circle-fill" data-action="edit"></i>
    <i class="bi bi-x-circle-fill m-0" data-action="delete"></i>
  </div>
  `;
  });
}

renderTodos();

form.addEventListener('submit', (event) => {
  event.preventDefault();

  saveTodo();
  renderTodos();
  localStorage.setItem('todos', JSON.stringify(todos));
});

const saveTodo = () => {
  const todoValue = todoInput.value;
  const isEmpty = todoValue === '';
  const isDuplicate = todos.some((todo) => todo.value.toUpperCase() === todoValue.toUpperCase());

  if (isEmpty || isDuplicate) {
    showNotification(isEmpty ? "Task is empty." : 'Task already exists!');
  } else {
    todos = EditTodoId >= 0
      ? todos.map((todo, index) => index === EditTodoId ? { ...todo, value: todoValue } : todo)
      : [...todos, {
        value: todoValue,
        checked: false,
        color: '#' + Math.floor(Math.random() * 16777215).toString(16)
      }];

    EditTodoId = -1;

    todoInput.value = '';
  }
}

export const editTodo = (todoId) => {
  todoInput.value = todos[todoId].value;
  EditTodoId = todoId;
}

export const deleteTodo = (todoId) => {
  todos = todos.filter((todo, index) => index !== todoId);
  EditTodoId = -1;

  renderTodos();
  localStorage.setItem('todos', JSON.stringify(todos));
}

export const checkTodo = (todoId) => {
  todos = todos.map((todo, index) => ({
    ...todo,
    checked: index === todoId ? !todo.checked : todo.checked,
  }));

  renderTodos();
  localStorage.setItem('todos', JSON.stringify(todos));
}

const showNotification = (msg) => {
  todoNotification.innerHTML = msg;

  todoNotification.classList.add('notif-enter');

  setTimeout(() => {
    todoNotification.classList.remove('notif-enter');
  }, 2000);
}