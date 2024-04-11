/*
    Finally, let's make our to-do list work. 
    JavaScript allows us to add interactivity to our webpage. 
    We will write a script to add a new task 
    to the list when the user types a task 
    and clicks the 'Add Task' button.
*/
document.getElementById("taskButton").addEventListener("click", function () {
  // Add what it should do on click here
  var taskInput = document.getElementById("taskInput");
  var task = taskInput.value;
  var taskList = document.getElementById("taskList");
  var newTask = document.createElement("li");
  newTask.innerText = task;
  taskList.appendChild(newTask);
  taskInput.value = "";
});
