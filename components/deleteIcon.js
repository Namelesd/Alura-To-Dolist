import { readTask } from "./readTasks.js";

const deleteIcon= (id)=>{
    const i= document.createElement("i");
    i.classList.add("fas","fa-trash-alt","trashIcon","icon");
    i.addEventListener("click",()=> deleteTask(id));


    return i;

}

const deleteTask = (id) =>{
const li = document.querySelector('[data-list]');
const task = JSON.parse(localStorage.getItem('tasks'));
const index = task.findIndex ((item)=>item.id == id)
const newTask = task.splice(index,1);
console.log(index);
li.innerHTML= ""
localStorage.setItem("tasks", JSON.stringify(task));
readTask();

}

export default deleteIcon;