// todo: create a todo list with js
const todosList = [
  {
    "title": "delectus aut autem",
    "completed": false,
    "des":"laboriosam mollitia et enim quasi adipisci quia provident illum",
    "date":"21-1-2022"
  },
  {
    "title": "quis ut nam facilis et officia qui",
    "completed": false,
    "des":"laboriosam mollitia et enim quasi adipisci quia provident illum",
    "date":"21-1-2022"
  },
  {
    "title": "fugiat veniam minus",
    "completed": false,
    "des":"laboriosam mollitia et enim quasi adipisci quia provident illum",
    "date":"21-1-2022"
  },
  {
    "title": "et porro tempora",
    "completed": true,
    "des":"laboriosam mollitia et enim quasi adipisci quia provident illum",
    "date":"21-1-2022"
  },
  {
    "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
    "completed": false,
    "des":"laboriosam mollitia et enim quasi adipisci quia provident illum",
    "date":"21-1-2022"
  },
  ];

const getTodoHtml = (todo) => {
  return `
    <div class="todo">
      <div class="todo__title">${todo.title}</div>
      <div class="todo__date">${todo.date}</div>
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

//ouvrir addTodo
let addTodo= document.querySelector('.newTodo__modal');
let btnAdd = document.querySelector('.button');
btnAdd.onclick = function(){
  addTodo.style.display = "block";
}
let editTodo = document.querySelector('.editTodo__modal');
window.onclick = function(event){
  if(event.target == addTodo){
    addTodo.style.display ="none";
  }
  if(event.target == editTodo){
    editTodo.style.display = 'none';
  }
}

//edit todo
const getEditTodoHtml = (todo) => {
  console.log('todo', todo)
  return `
  <div class="editTodo">
    <h1 class="heading">Edit todo</h1>
    <input class="editTodo__title" type="text" name="title"  value="${todo.title}">
    <input class="editTodo__date" type="text" name="date"  value="${todo.date}">
    <textarea class="editTodo__des" name="description">${todo.des}</textarea>
    <div class="editTodo__check" >
        <input type="checkbox" name="completed" placeholder="what to do..." value="${todo.completed}">
        <label>Completed</label>
    </div>
  </div>
  `;
}
let editTodoHtml = "";

//click sur le todo
/*ce click marche uniquement sur le premier todo, for of ou for each ne marche pas comme je voudrais, 
une autre solution maybe? */

// const todobtn = document.querySelector('.todo');
const allTodos = document.querySelectorAll('.todo');
allTodos.forEach((todo, index) => {
  todo.addEventListener('click', function () {
    const currentTodo = todosList[index];
    editTodoHtml += getEditTodoHtml(currentTodo);
    editTodo.innerHTML = editTodoHtml;
    editTodo.style.display = 'block';
  });
});; //le parametre 'todo' est undefined

/*ce paragraphe ne marche pas ,il marche soit pour le 'add todo' ou soit pour le 'edit todo' */
/*window.onclick = function(event){
  if(event.target == editTodo ){
    editTodo.style.display ="none";
  }
}
*/ 

// add todo
//brouillon
/*function newTodo(){
  let title = document.getElementsByClassName("newTodo__title").value;
  let date = document.getElementsByClassName("newTodo__date").value;
  let des= document.getElementsByClassName("newTodo__date").value;
  let completed = document.getElementsByClassName("newTodo__date").value;
  let newTodo={
      "title":title,
      "completed":completed,
      "des":des,
      "date":date
  }
  todosList.unshift(newTodo),
}*/
