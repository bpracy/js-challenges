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
  // random date in near future and a random date in the past 
  function randomDate(start, end) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
  }

  let date = randomDate(new Date(2012, 0, 1), new Date(2023, 6,30));
 
  // optional: sort the todos by date
  // optional: show completed todos last 
  return `
    <div class="todo">
      <div class="todo__title">${todo.title}</div>
      <div class="todo__date">${date.getDate()} - ${date.getMonth()} - ${date.getFullYear()}</div>
    </div>`;
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