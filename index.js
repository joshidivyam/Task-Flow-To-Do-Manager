

const taskInp = document.querySelector("#tskInp");
const addButtn = document.querySelector("#addButt");
const taskList = document.querySelector("#tskList");

function addTask(message) {
  const task = document.createElement("li");
  task.className = "task";

  const taskText = document.createElement("span");
  taskText.textContent = message;

  const checkButtn = document.createElement("button");
  checkButtn.className = "checkButtn";
  checkButtn.textContent = "✅";

  const editButtn = document.createElement("button");
  editButtn.className = "editButtn";
  editButtn.textContent = "Edit";

  const delButtn = document.createElement("button");
  delButtn.className = "delButtn";
  delButtn.textContent = "Delete";

  checkButtn.addEventListener("click", () => {
    taskText.style.textDecoration =
      taskText.style.textDecoration === "line-through" ? "none" : "line-through";
  });

  editButtn.addEventListener("click", () => {
    const newText = prompt("Edit task", taskText.textContent);

    if (newText === null) return;
    if (newText.trim() === "") return;

    taskText.textContent = newText.trim();
  });

  delButtn.addEventListener("click", () => {
    task.remove();
  });

  task.append(taskText, checkButtn, editButtn, delButtn);
  taskList.append(task);
}

addButtn.addEventListener("click", () => {
  const taskInpValue = taskInp.value.trim();

  if (taskInpValue === "") {
    alert("Please enter a task");
    return;
  }

  addTask(taskInpValue);
  taskInp.value = "";
});