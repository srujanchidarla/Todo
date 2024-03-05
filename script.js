document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('add-task-form');
    const taskList = document.getElementById('task-list');
  
    form.addEventListener('submit', function(event) {
      event.preventDefault();
  
      const taskName = document.getElementById('task-name').value;
      const dueDate = document.getElementById('due-date').value;
      const priority = document.getElementById('priority').value;
  
      if (taskName) {
        addTaskToList(taskName, dueDate, priority);
        form.reset();
      }
    });
  
    function addTaskToList(name, date, priority) {
      const taskItem = document.createElement('li');
      taskItem.classList.add('task-item', priority + '-priority');
      taskItem.innerHTML = `
              <span>${name}</span>
              <span>${date}</span>
              <span>${priority}</span>
              <button onclick="deleteTask(this)">Delete</button>
              <button onclick="completeTask(this)">Complete</button>
          `;
  
      taskList.appendChild(taskItem);
    }
  
    window.deleteTask = function(button) {
      const taskItem = button.parentNode;
      taskList.removeChild(taskItem);
    };
  
    window.completeTask = function(button) {
      const taskItem = button.parentNode;
      taskItem.classList.toggle('completed');
    };
  });
  