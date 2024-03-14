document.querySelector('#push').onclick = function(){
    if(document.querySelector('#newTask input').value.length == 0){
        alert('You have to done to task');
    }else{
        document.querySelector('#task').innerHTML 
        +=`<div class ="task">
        <span id = "taskName">
        ${document.querySelector('#newTask input').value}
        </span>
        <button class="delate">
            <i class="fa-regular fa-trash"></i>
        </button>

        </div>`;
        let current_task = document.querySelectorAll('.delate');
        for(let i=0; i<current_task.length; i++){
            current_task[i].onclick = function(){
                this.parentNode.remove();
            }
        }
        let task = document.querySelectorAll('.task')
        for(let i=0; i<task.length; i++){
            task[i].onclick = function(){
                   this.classList.toggle('compleated');
            }
        }
    }


}