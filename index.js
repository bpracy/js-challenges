// todo: create a todo list with js
const todos = [];

const getTodoHtml = (todo) => {
  return `
    <div class="todo">
      <div class="todo-title">${todo.title}</div>
    </div>
  `
}

// construire le html de tous les todos
// inserer le html fianl dans le #todos
// css