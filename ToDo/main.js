let list = {
    'Wash Dishes':"To Do",
    "Do homework":"In Progress",
    "Make new practice task":"Done"
}
function changeStatus(taskName) {
    if (taskName in list) {
        console.log(list[taskName]);
    } else {
        console.log("the task not found");
    }
}
function addTask(taskName, status) {
    if (typeof status == "string" && (status == "To Do" || status == "In Progress" || status == "Done")) {
    list[taskName] = status;    
    } else {
        console.log("The status is incorrectly entered");
    }
}
function deleteTask(taskName) {
    delete list[taskName];
}
function showList() {
    
    console.log("To Do:");

    for (let prop in list) {

        switch (list[prop]) {
            case "To Do":
                console.log("   '",prop,"'");
            break;
        }
    }

    console.log("In Progress:");
    
    for (let prop in list) {
        
        switch (list[prop]) {
            case "In Progress":
                console.log("   '",prop,"'");
            break;
        }
    }

    console.log("Done:");

    for (let prop in list) {
        
        switch (list[prop]) {
            case "Done":
                console.log("   '",prop,"'");
            break;
        }
    }
}

addTask("Go to home", "In Progress");
showList();
deleteTask("Do homework");
showList();