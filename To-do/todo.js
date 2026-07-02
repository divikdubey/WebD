let todo =[];
let req = prompt("What would you like to do? ");

while(true){
    if(req == "quit"){
        console.log("Quitting the app...");
        break;
    }
    if(req == "list"){
        console.log("**********"); 
        for( task of todo){
            console.log(task);
        }
        console.log("**********");
    }else if(req == "add"){
        let task = prompt("Enter a new task: ");
        todo.push(task);
        console.log("task added");
    }
    else if(req == "delete"){
        let index = prompt("Enter index of task to delete: ");
        todo.splice(index, 1);
        console.log("task deleted");
    }
    else{
        console.log("Unknown command");
    }
    req = prompt("What would you like to do? ");
}