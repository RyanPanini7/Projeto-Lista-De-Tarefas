class Todo{
    constructor(){
        this.totalTasks = document.querySelectorAll('.task').length;
    }
    addTask() {
        console.log("funcionou")
    }

}

let todo = new Todo();

// Eventos
const addBtn = document.getElementById('add');

addBtn.addEventListener('click', function(e){
    e.preventDefault();
    let taskText = document.querySelector('#task');
    console.log(taskText.value);
});