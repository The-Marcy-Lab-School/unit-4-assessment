class Tasks{
    constructor(taskName, description){
        this.taskName = taskName;
        this.description = description;
    }
    
}

class ToDoList{
    constructor(month, date, year){
        this.month = month;
        this.date = date;
        this.year = year;
        this.list = [];
    }
    addTask(obj){
        this.list.push(obj)
        return `${obj.taskName} added to your To-Do List!`;
    }
    showTasks(obj){
        return this.list;
    }
    completeTask(obj){
        this.list.forEach(el => {
        if(el === obj){
            this.list.splice(el, 1);
        }
        });
        return `${obj.taskName} completed`;
    }
}

const eat = new Tasks('eat food', 'at burger king')
const coffee = new Tasks('get coffee', 'at starbucks');
const newToDo = new ToDoList('may','13','2020');
console.log(newToDo.addTask(eat));
console.log(newToDo.addTask(coffee));
console.log(newToDo.completeTask(eat)); 
console.log(newToDo.list);



