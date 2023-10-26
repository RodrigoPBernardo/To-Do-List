const button = document.querySelector('.button_task')
const input = document.querySelector('.input_task')
const list = document.querySelector('.list_tasks')

let itemList = []

function addNewTask(){
    itemList.push({
        task: input.value,
        finish: false
    })
    input.value = ''

    showTasks()
}

function showTasks(){
let newItem =''

itemList.forEach((task, index) => {
    newItem = newItem +  `<li class="tasks ${task.finish && "done"}">
    <img src="./img/checked.png" alt="checked" onclick="finishTask(${index})">
    <p>${task.task}</p>
    <img src="./img/trash.png" alt="" onclick="deleteItem(${index})">
    </li>`
})

list.innerHTML = newItem

localStorage.setItem('list', JSON.stringify(itemList))

}

function deleteItem(index){
    itemList.splice(index, 1)
    showTasks()
}

function finishTask(index){
    itemList[index].finish = !itemList[index].finish
    showTasks()
}

function ReloadTasks(){
    const listLocalStorage = localStorage.getItem('list')
    if(listLocalStorage){
    itemList = JSON.parse(listLocalStorage)
    }
    showTasks()
}

ReloadTasks()
button.addEventListener('click', addNewTask)



