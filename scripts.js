



//status  validation function

function isValidStatus(status) {
    const validStatuses = ['todo', 'doing', 'done'];
    return  validStatuses.include(status.toLowerCase());
}

// function to get task details

function getTaskDetails(taskNumber) {
  const title = prompt(`Enter task ${taskNumber} title:`);
  if (title === null) return null;

  const description = prompt(`Enter task ${taskNumber} description:`);
  if (description === null) return null;

  let status;
  // Loop until valid status is entered
  do {
    status = prompt(`Enter task ${taskNumber} status (todo/doing/done):`);
    if (status === null) return null;

        
        if (!isValidStatus(status)) {
            alert("Invalid status. Please enter 'todo', 'doing', or 'done'.");
        }
    } while (!isValidStatus(status));

    task.status = status.toLowerCase();
   return {
          title: title.trim(),
    description: description.trim(),
    status: status.toLowerCase().trim()
    };
}

//Main Task Manager Function/////////

    function manageTasks() {
  console.log("🚀 Task Management System Activated!");

  const tasks = [];

  const task1 = getTaskDetails(1);
  if (task1) tasks.push(task1);

  const task2 = getTaskDetails(2);
  if (task2) tasks.push(task2);

 // Display completed task(s)
  const completedTasks = tasks.filter(task => task.status === "done");

  if (completedTasks.length > 0) {
    console.log("✅ Completed Tasks:");
    completedTasks.forEach(task => {
      console.log(`Title: ${task.title}, Status: ${task.status}`);
    });
  } else {
    // ✅ Motivational fallback message
    console.log("No tasks completed, let's get to work!");
  }
    }

            // Set up button click handler
document.addEventListener("DOMContentLoaded", () => {
  const launchBtn = document.getElementById("launchCareerBtn");

  launchBtn.addEventListener("click", () => {
    const confirmLaunch = confirm(
      "Ready to launch your career tasks?\n\nYou'll be asked to enter 2 tasks with their statuses."
    );

    if (confirmLaunch) {
      manageTasks();
    } else {
      alert("Come back when you're ready to launch!");
      console.log("Career launch postponed");
    }
  });
});