
const taskList = document.getElementById("tasks");
const input = document.getElementById("todo_input");
const form = document.getElementById("todo");
const submit = document.getElementById("todo_submit");

submit.addEventListener("click", addTask);
form.addEventListener("submit", addTask);

function addTask(e){
  e.preventDefault();
  const task = document.createElement("div");

  const label = document.createElement("label");
  label.setAttribute("for", "task_checkbox");

  const checkbox = document.createElement("input");
  checkbox.setAttribute("type", "checkbox");
  checkbox.setAttribute("id","task_checkbox");
  checkbox.setAttribute("name","task_checkbox");
//   <div class="preference">
//     <label for="cheese">Do you like cheese?</label>
//     <input type="checkbox" name="cheese" id="cheese" />
//   </div>

  task.appendChild(checkbox);
  task.appendChild(label);

  task.classList.add("task");
  label.innerText = input.value;
  input.value = "";

  taskList.appendChild(task);
}
