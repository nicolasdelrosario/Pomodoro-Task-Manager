import * as switchThemeJS from './modules/switchTheme.js';
import * as handleTabJS from './modules/handleTab.js';
import * as pomodoroJS from './modules/pomodoro.js';
import * as todoListJS from './modules/todoList.js';
import * as formJS from './modules/form.js';

function main() {
  //switch theme
  switchThemeJS.switchTheme.addEventListener('click', switchThemeJS.switchThemeFunction);

  //handle tab
  handleTabJS.tabLinks.forEach(tabLink => tabLink.addEventListener('click', handleTabJS.handleTabClick));

  //pomodoro
  pomodoroJS.btnPomodoroStart.addEventListener('click', () => {
    pomodoroJS.btnPomodoroStart.dataset.action === 'start' ? pomodoroJS.startTimer() : pomodoroJS.stopTimer();
  });

  //to do list
  todoListJS.todoList.addEventListener('click', (event) => {
    const target = event.target;
    const parentElement = target.parentNode;

    if (parentElement.className !== 'todo') return;

    const todo = parentElement;
    const todoId = Number(todo.id);
    const action = target.dataset.action;

    action === 'check' && todoListJS.checkTodo(todoId);
    action === 'edit' && todoListJS.editTodo(todoId);
    action === 'delete' && todoListJS.deleteTodo(todoId);
  });

  //form
  formJS.submitButton.addEventListener('click', () => {
    formJS.validateField(formJS.emailInput, formJS.iconEmail, 5);
    formJS.validateField(formJS.subjectInput, formJS.iconSubject, 2);
    formJS.validateField(formJS.messageInput, formJS.iconMessage, 10);
  });
}

main()