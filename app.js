let todo = [];

let req = prompt("Enter your request");

while(true){
    if(req == "quit"){
        console.log("quitting app");
        break;
    }
    if(req == "list"){
        console.log("___________");
        for(let i=0; i<todo.length; i++){
            console.log(i, todo[i]);
        }
        console.log("___________");
    } else if(req == "add"){
        let task = prompt("Enter task of your choice");
        todo.push(task);
        console.log("task added");
    } else if(req == "delete"){
        idx = prompt("Enter the index of task to remove");
        todo.splice(idx, 1);
        console.log("task deleted");
    } else {
        console.log("Wrong request");
    }

    req = prompt("Enter your request");
}
