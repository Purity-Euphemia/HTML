const taskInput = document.getElementById('task-input');
const addTaskForm = document.getElementById('add-tasks');
const taskList = document.getElementById('tasks');
const searchInput = document.getElementById('search');

let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

function renderTasks(filter = '') {
  taskList.innerHTML = '';
  tasks
    .filter(task => task.text.toLowerCase().includes(filter.toLowerCase()))
    .forEach((task, index) => {
      const li = document.createElement('li');

      const taskLabel = document.createElement('span');
      taskLabel.textContent = task.text;
      if (task.completed) taskLabel.classList.add('completed');

      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.checked = task.completed;

      checkbox.addEventListener('change', () => {
        tasks[index].completed = checkbox.checked;
        saveTasks();
        renderTasks(searchInput.value);
      });

      const deleteBtn = document.createElement('button');
      deleteBtn.textContent = 'Delete';
      deleteBtn.classList.add('delete');
      deleteBtn.addEventListener('click', () => {
        tasks.splice(index, 1);
        saveTasks();
        renderTasks(searchInput.value);
      });

      const leftSide = document.createElement('div');
      leftSide.style.display = 'flex';
      leftSide.style.alignItems = 'center';
      leftSide.appendChild(checkbox);
      leftSide.appendChild(taskLabel);

      li.appendChild(leftSide);
      li.appendChild(deleteBtn);
      taskList.appendChild(li);
    });
}

// Save to localStorage
function saveTasks() {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Add task
addTaskForm.addEventListener('submit', function (e) {
  e.preventDefault();
  const text = taskInput.value.trim();
  if (text === '') {
    alert("Please enter a task.");
    return;
  }
  tasks.push({ text, completed: false });
  saveTasks();
  renderTasks(searchInput.value);
  taskInput.value = '';
});

// Search tasks
searchInput.addEventListener('input', () => {
  renderTasks(searchInput.value);
});

// Initial render
renderTasks();
