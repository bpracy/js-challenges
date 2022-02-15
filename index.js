// todo: create a todo list with js
const todosList = [
  {
    "userId": 1,
    "id": 1,
    "title": "delectus aut autem",
    "completed": false
  },
  {
    "userId": 1,
    "id": 2,
    "title": "quis ut nam facilis et officia qui",
    "completed": false
  },
  {
    "userId": 1,
    "id": 3,
    "title": "fugiat veniam minus",
    "completed": false
  },
  {
    "userId": 1,
    "id": 4,
    "title": "et porro tempora",
    "completed": true
  },
  {
    "userId": 1,
    "id": 5,
    "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
    "completed": false
  },
  {
    "userId": 1,
    "id": 6,
    "title": "qui ullam ratione quibusdam voluptatem quia omnis",
    "completed": false
  },
  {
    "userId": 1,
    "id": 7,
    "title": "illo expedita consequatur quia in",
    "completed": false
  },
  ];

const getTodoHtml = (todo) => {
  const date = new Date().toDateString(); // This is very good. Can use try to get a random date in near future?
  // and a random date in the past for completed tasks
  // avoid using br tag, use padding or margins
  // optional: sort the todos by date
  // optional: show completed todos last
  return `
    <div class="todo">
      <div class="todo-title">${todo.title}</div>
      <div class="todo-date">${date}</div>
      <br>
    </div>`
}

// construire le html de tous les todos
let todosHtml = "";
for (const todo of todosList){
  todosHtml += getTodoHtml(todo);
}
// inserer le html final dans le #todos
const todos = document.querySelector('.todos');
todos.innerHTML = todosHtml;
// css