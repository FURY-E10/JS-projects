const todoList = ['Make dinner for her', 'Do dishes with her'];

renderTodoList();

function renderTodoList() {

      let todoListHTML = '';

      for (let i = 0; i < todoList.length; i++) {
        const todo = todoList[i];
        const html = `<p>${todo}</p>`;//generating HTML
        todoListHTML += html
      }

      console.log(todoListHTML);

      document.querySelector('.js-todo-list').innerHTML = todoListHTML;
    }

function addTodo() {
  const inputElement = document.querySelector('.js-input');
  const name = inputElement.value;
  
  todoList.push(name);
  console.log(todoList);

  inputElement.value = '';
  renderTodoList();
}

