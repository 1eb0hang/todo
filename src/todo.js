// Function called while clicking add button
const form = document.getElementById("todo");
const input = document.getElementById("todo_input"); // old
const todoLane = document.getElementById("todo-lane");// old

const submit = document.getElementById("todo_submit");

function addTask(e){
  e.preventDefault();
  const value = input.value;

  if(!value) return;

  const task = document.createElement("p");
  task.classList.add("task");
  task.setAttribute("draggable","true");
  task.innerText=value;

  task.addEventListener("dragstart",()=>{
    task.classList.add("is-dragging");
  });
  task.addEventListener("dragend", ()=>{
    task.classList.remove("is-dragging");
  });

  todoLane.appendChild(task);

  input.value = "";
}

form.addEventListener("click",addTask);
form.addEventListener("submit",addTask);
