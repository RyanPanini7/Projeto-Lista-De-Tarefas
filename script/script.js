class Todo{
    constructor(){
        this.totalTasks = document.querySelectorAll('.task').length;
    }
    // implementando a lista com tarefas
    addTask(taskText) {
        
        //clonar o tamplate
        let template = document.querySelector('.task').cloneNode(true);
        //remover classe hide
        template.classList.remove('hide');
        //Manipular texto
        let templateText = template.querySelector('.task-title');
        templateText.textContent = taskText;
        //pegar lista e inserir nela
        let list = document.querySelector('#tasks-container');
        list.appendChild(template);

        // Adiciona evento as tasks
        this.addEvents();
    }
    removeTask(task){
        console.log('Deu certo!')
    }
    completeTask(task){
        console.log('Top!')
    }
 
    addEvents() {
        let removeBtns = document.querySelectorAll('.fa-trash');
        let removeBtn = removeBtns[removeBtns.length - 1];
        let doneBtns = document.querySelectorAll('.fa-check');
        let doneBtn = doneBtns[doneBtns.length - 1];
        // adicionar evento de remover
        removeBtn.addEventListener('click', function(){
            todo.removeTask(this);
        });

    //Adicionar evento de completar tarefa
        doneBtn.addEventListener('click', function(){
            todo.completeTask(this);
        });
    }
}

let todo = new Todo();

// Eventos
let addBtn = document.querySelector('#add');

addBtn.addEventListener('click', function(e){
    e.preventDefault();
    let taskText = document.querySelector('#task');
    // nao chamar o method se estiver vazio, apagar empty.
    if(taskText.value != ''){
        todo.addTask(taskText.value);
    }

    //limpa campo de texto 
    taskText.value = '';
});