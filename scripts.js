
//status  validation function

function isValidStatus(status) {
    const validStatuses = ['todo', 'doing', 'done'];
    return  validStatuses.include(status.toLowerCase());
}

// function to get task details

function getTaskDetails(taskNumber) {
    let task = {
        titel: prompt('Enter task ${taskNumber} titel:'),
        description: '',
        status: ''
    }

// exit if user cancels title prompt

if (task.title === null) return null;

task.description = prompt(`Enter task ${taskNumber} description:`);
    if (task.description === null) return null;

// Get and validate status
 
let status; do {
    status = prompt(`Enter task ${taskNumber} status (todo/doing/done):`);
        if (status === null) return null;

        if (!isValidStatus(status)) {
            alert("Invalid status. Please enter 'todo', 'doing', or 'done'.");
 }
    } while (!isValidStatus(status));

    task.status = status.toLowerCase();
    return task;
}

//Main Task Manager Function/////////

function manageTasks() {
    const task1 = getTaskDetails(1); // Get Task 1
    const task2 = getTaskDetails(2); // Get Task 2

    const tasks = [];
    if (task1) tasks.push(task1); // Add Task 1 if not cancelled
    if (task2) tasks.push(task2); // Add Task 2 if not cancelled

 // Filter completed tasks (status = "done")
    const completedTasks = tasks.filter(task => task.status === 'done');
       
             // Console output

if(completedTasks.length > 0) {
    completedTasks.forEach(task => {
            console.log(`Title: ${task.title}, status: ${task.status}`);
    });
} else{
    console.log("No tasks completed, let's get to work!");
   }
}

//RUN TASKMANGER
manageTasks();