let input = document.querySelector('.todo-input');
let list = document.querySelector('.todo-list');
let addBtn = document.querySelector('.todo-add');
let clearBtn = document.querySelector('.todo-clear');
let taskList = [];

function reproduction(elements){
    list.innerHTML = '';
    for(let i = 0; i < elements.length; i++){
        let newElem = document.createElement('li');
            newElem.innerHTML = elements[i];
            newElem.classList.add('todo__list-task');
        list.appendChild(newElem);
    }
}

addBtn.onclick = function() {
    if(input.value != "") {
        taskList.push(input.value);
        input.value = "";
        reproduction(taskList);
        clearBtn.style.display = 'inline-block';
        localStorage.setItem('list', JSON.stringify(taskList));      
    } else alert('пожалуйста, введите задание');
}

if(localStorage.getItem('list')){
    taskList = JSON.parse(localStorage.getItem('list'));
    reproduction(taskList);
    clearBtn.style.display = 'inline-block';
}

clearBtn.onclick = function() {
    clearBtn.style = '';
    taskList = [];
    list.innerHTML = '';
    localStorage.clear();
};