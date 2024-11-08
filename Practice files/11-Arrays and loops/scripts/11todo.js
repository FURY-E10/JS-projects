const todoList = [];

function addTodo() {
  const inputElement = document.querySelector('.js-input');
  const Name = inputElement.value
  
  todoList.push(Name);
  console.log(todoList);

  inputElement.value = '';
}

