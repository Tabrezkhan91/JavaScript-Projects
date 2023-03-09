const dateEl = document.querySelector('.date');

const enterEl = document.querySelector('#enter');
const listEL = document.querySelector('.todo-list');
const task = document.querySelector('#task');

const todoArray = localStorage.getItem('todolist') ? JSON.parse(localStorage.getItem('todolist')) : [];


function displayDate(){
    let date = new Date();
    date = date.toString().split(" ");
    dateEl.textContent = `${date[2]}-${date[1]}-${date[3]}`
}



enterEl.addEventListener('click', () => {
    if(task.value === ''){
        showToast('Please Enter Something...');
        return;
    }
    createTodo(task)
})

function showToast(message) {
    const toast = document.createElement('div')
    toast.classList.add('toast')

    toast.innerText = message;

    document.body.appendChild(toast)
    setTimeout(() => {
        toast.remove();
    },3000)
}

function displayTodos(){
    let todolist = ""
    for(let i=0; i < todoArray.length; i++ ){
        todolist += `<div class="todo-item">
                    <div class="input-controller">
                        <textarea disabled>${todoArray[i]}</textarea>
                        <div class="edit-controller">
                            <i class="fa-solid fa-pen-to-square editBtn"></i>
                            <i class="fa-solid fa-trash deleteBtn"></i>
                        </div>
                    </div>
                    <div class="update-controller">
                        <button class="saveBtn">Save</button>
                        <button class="cancelBtn">Cancel</button>
                    </div>
                </div>`
        
        listEL.innerHTML = todolist;
        activateDeleteListener();        
        activateEditListener();        
        activateSaveListener();        
        activateCancelListener();        
    }
}
function createTodo(task){
    todoArray.unshift(task.value)
    localStorage.setItem('todolist', JSON.stringify(todoArray))
    location.reload();
}

function activateDeleteListener(){
    const deleteBtns = document.querySelectorAll('.deleteBtn')
    deleteBtns.forEach((db,i) => {
        db.addEventListener('click', ()=> {
            confirm("Are you Sure ??")
            deleteTodo(i);
            window.reload();
        })
    })
}

function deleteTodo(i) {
    todoArray.splice(i,1);
    localStorage.setItem('todolist', JSON.stringify(todoArray));
    location.reload();
}

function activateEditListener(){
    const editBtns = document.querySelectorAll('.editBtn');
    const updateController = document.querySelectorAll('.update-controller');
    const inputFields = document.querySelectorAll('.input-controller textarea');

    editBtns.forEach((eb,i) => {
        eb.addEventListener('click', () => {
            updateController[i].style.display = 'block'
            inputFields[i].disabled = false
        })
    })
}

function activateSaveListener(){
    const saveButton = document.querySelectorAll('.saveBtn')
    const inputFields = document.querySelectorAll('.input-controller textarea');
    saveButton.forEach((sb,i)  => {
        sb.addEventListener('click', () => {
            updateItem(inputFields[i].value, i)
        })
    })
}

function activateCancelListener(){
    const cancelButton = document.querySelectorAll('.cancelBtn')
    const updateController = document.querySelectorAll('.update-controller');
    const inputFields = document.querySelectorAll('.input-controller textarea');  
    
    cancelButton.forEach((cb,i) => {
        cb.addEventListener('click', () => {
            updateController[i].style.display = 'none';
            inputFields[i].disabled = true;
        })
    })
}


function updateItem(text,i){
    todoArray[i] = text
    localStorage.setItem('todolist', JSON.stringify(todoArray))
    location.reload();
}


window.onload = () => {
    displayDate();
    displayTodos();
}