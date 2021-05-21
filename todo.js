// function todoList() {
//   var item = document.getElementById("todoInput").value;
//   var text = document.createTextNode(item);
//   var newItem = document.createElement("li");
//   newItem.appendChild(text);
//   document.getElementById("todoList").appendChild(newItem);
// }

// selectors
document.querySelector("form").addEventListener("submit", handleSubmitForm);
document.querySelector(".delete").addEventListener("click", deleteTodo);

document.querySelector(".check").addEventListener("click", checkTodo);

document.querySelector("body").addEventListener("click", function(e) {
  if (e.target.name === "check") {
    // we need to get the <li></li> element, because that is where the todo list item is
    let todo = e.target.parentNode.parentNode;
    // there is a textDecoration style in css, it has many values,
    // line through will strike a line accross the word
    if (todo.style.textDecoration === "line-through") {
      todo.style.textDecoration = "none";
    } else {
      todo.style.textDecoration = "line-through";
    }
  } else if (e.target.name === "delete") {
    let todo = e.target.parentNode.parentNode;
    if (e.target && e.target.className == "delete") {
      //do something
      todo.remove();
    }
  }
});

let todoListsContainer = document.querySelector("#todoList");

// functions
function handleSubmitForm(e) {
  e.preventDefault();
  // prevent default form behaviour(prevents page refresh);

  // get the input's value
  let todo = document.querySelector("#todoInput").value;

  // Check if the value of submitted form is empty
  if (todo !== "" && todo.length > 0) {
    addTodo(todo);
    document.querySelector("#todoInput").value = "";
  }
}

function addTodo(todo) {
  let li = document.createElement("li");
  li.innerHTML = `
    ${todo} <span
    ><button name="delete" class="delete">Delete</button
    ><button name="check" class="check">Check</button></span
  >
  `;
  li.classList.add("todo");
  todoListsContainer.appendChild(li);
}

function deleteTodo(e) {}

function checkTodo(e) {}

function clearTodoList() {
  todoListsContainer.innerHTML = "";
}
