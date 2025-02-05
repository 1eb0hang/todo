
const taskList = document.getElementById("tasks");
const input = document.getElementById("todo_input");
const form = document.getElementById("todo");
const submit = document.getElementById("todo_submit");

submit.addEventListener("click", addTask);
form.addEventListener("submit", addTask);

function addTask(e){
  e.preventDefault();
  const task = document.createElement("p");
  task.classList.add("task");
  task.innerText = input.value;
  input.value = "";

  taskList.appendChild(task);
}
