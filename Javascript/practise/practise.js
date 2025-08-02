let tasks = [];

function renderTasks() {
  const list = document.getElementById("taskList");
  list.innerHTML = "";

  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.innerHTML = `
      ${task}
      <button onclick="removeTask(${index})">❌ Delete</button>
      <button onclick="editTask(${index})">✏️ Edit</button>
    `;
    list.appendChild(li);
  });
}

function addTask() {
  const input = document.getElementById("taskInput");
  const newTask = input.value.trim();
  if (newTask) {
    tasks.splice(0, 0, newTask); // Insert at end
    input.value = "";
    renderTasks();
  }
}

function removeTask(index) {
  tasks.splice(index, 1); // Delete 1 task at that index
  renderTasks();
}

function editTask(index) {
  const updatedTask = prompt("Update your task:", tasks[index]);
  if (updatedTask !== null && updatedTask.trim() !== "") {
    tasks.splice(index, 1, updatedTask.trim()); // Replace
    renderTasks();
  }
}
