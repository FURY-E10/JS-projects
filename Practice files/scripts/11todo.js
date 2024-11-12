const todolist = ['make dinner for her', 'wash dishes'];

let todoListHTML = '';

for (let i = 0; i < todolist.length; i++) {
  const todo = todolist[i];
  const html = `<p>${todo}</p>`;
  todoListHTML += html;
}
console.log(todoListHTML);

document.querySelector('.js-todo-list')
  .innerHTML = todoListHTML;

function addTodo() {
  const inputElement = document.querySelector('.js-input');
  const name = inputElement.value;
  console.log(name);
}

