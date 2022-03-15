// todo: create a todo list with js
// code execution from top to bottom
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
    "completed": true,
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

const handleClick = (todo, index) => {
  todo.addEventListener('click', function () {
    const currentTodo = todosList[index];
    editTodo.classList.add('editTodoShow');
    editTodo.querySelector('.editTodo__title').value = currentTodo.title;
    editTodo.querySelector('.editTodo__date').value = currentTodo.date;
    editTodo.querySelector('.editTodo__des').value = currentTodo.des;
    editTodo.querySelector('.editTodo__check input').checked = currentTodo.completed;
    editTodo.querySelector('.saveButton').addEventListener('click', () => {
      const newTodo = {
        title: editTodo.querySelector('.editTodo__title').value,
        date: editTodo.querySelector('.editTodo__date').value,
        des: editTodo.querySelector('.editTodo__des').value,
        completed: editTodo.querySelector('.editTodo__check input').checked,
      };
      todosList[index] = newTodo;
      paintTodoHtml();
      editTodo.classList.remove('editTodoShow');
    });
  });
}

// construire le html de tous les todos
function paintTodoHtml() {
  let todosHtml = '';
  for (const todo of todosList) {
    todosHtml += getTodoHtml(todo);
  }
  // inserer le html final dans le #todos
  const todos = document.querySelector('.todos');
  todos.innerHTML = todosHtml;

  // const todobtn = document.querySelector('.todo');
  const allTodos = document.querySelectorAll('.todo');
  allTodos.forEach((todo, index) => {
    handleClick(todo, index);
  }); //le parametre 'todo' est undefined
}

paintTodoHtml()
// ouvrir addTodo
const btnAdd = document.querySelector('.openTodoModal');
let addTodo= document.querySelector('.newTodo__modal');
btnAdd.onclick = function(){
  addTodo.classList.add('editTodoShow');
  const saveNewTodo = document.getElementById('saveNewTodo');
  saveNewTodo.addEventListener('click', () => {
  newTodo()
  });
}
let editTodo = document.querySelector('.editTodo__modal');

document.querySelector('.newTodo__modal').addEventListener('click', (event) => {
  if (event.target == addTodo) {
    addTodo.classList.remove('editTodoShow');
  }
});
document.querySelector('.editTodo__modal').addEventListener('click', (event) => {
  if (event.target == editTodo) {
    editTodo.classList.remove('editTodoShow');
  }
});

// ! pas good practive
// window.onclick = function(event){
//   console.log(`clicked...`, event.target)
//   console.log(`clicked... 1`, event.target == addTodo)
//   console.log(`clicked... 2`, event.target === addTodo)
//   if (event.target == addTodo || event.target == editTodo) {
//     addTodo.classList.remove('editTodoShow');
//     editTodo.classList.remove('editTodoShow');
//   }
// }

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
        <input type="checkbox" name="completed" ${todo.completed && 'checked'}>
        <label>Completed</label>
    </div>
  </div>
  `;
}

//click sur le todo
/*ce click marche uniquement sur le premier todo, for of ou for each ne marche pas comme je voudrais, 
une autre solution maybe? */

/*ce paragraphe ne marche pas ,il marche soit pour le 'add todo' ou soit pour le 'edit todo' */
/*window.onclick = function(event){
  if(event.target == editTodo ){
    editTodo.style.display ="none";
  }
}
*/ 

// add todo
// brouillon
function newTodo() {
  const title = document.querySelector('.newTodo__title').value;
  const date = document.querySelector('.newTodo__date').value;
  const des = document.querySelector('.newTodo__des').value;
  const completed = document.querySelector('.newTodo__check input').checked;

  // todo: validation

  // const newTodo = {
  //   title: title,
  //   completed: completed,
  //   des: des,
  //   date: date,
  // };
  
  const newTodo = {
    title,
    completed,
    des,
    date,
  };

  if (!newTodo.title) {
    return console.warn('we need a title....');
  }
  if (!newTodo.des) {
    return console.warn('we need a des....');
  }
  todosList.unshift(newTodo);
  paintTodoHtml()
  addTodo.classList.remove('editTodoShow');
}
