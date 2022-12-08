import { uniqueDates } from "../services/date.js";
import checkComplete from "./checkComplete.js";
import deleteIcon from "./deleteIcon.js";
import { readTask } from "./readTasks.js";


const Cdate = new Date();

export const addTask = (evento)=>{
  evento.preventDefault();

  const list =document.querySelector("[data-list]");
  const input = document.querySelector("[data-form-input]");
  const calendar = document.querySelector("[data-form-date]");

  const value = input.value; 
  const date = calendar.value;
  let dateformat;

  if(date==""){
  dateformat = moment(Cdate).format("DD/MM/YYYY")
  }else{ dateformat = moment(date).format("DD/MM/YYYY");}

  if(value==""){
    return
  }

input.value="";
calendar.value="";
const complete = false;

const taskObj = {
  value,
  dateformat,
  complete,
  id: uuid.v4(),
}

list.innerHTML = "";

const taskList = JSON.parse(localStorage.getItem("tasks")) || [];
taskList.push(taskObj);
localStorage.setItem("tasks",JSON.stringify(taskList));
readTask();

}



export const createTask = ({value,dateformat,complete,id})=> {
    const task=document.createElement("li");
    task.classList.add("card");

    const taskContent = document.createElement("div");
    const check = checkComplete(id);
      if(complete){
        check.classList.toggle("far");
        check.classList.toggle("completeIcon");
        check.classList.toggle("fas");
      }



    const dateElement = document.createElement("span");
    //dateElement.innerHTML = dateformat;
  


    taskContent.appendChild(check);
    const titleTask=document.createElement("span");
    titleTask.classList.add("task");
    titleTask.innerText = value;
    taskContent.appendChild(titleTask);


      //  task.innerHTML = content;
        task.appendChild(taskContent);
        task.appendChild(dateElement);
        task.appendChild(deleteIcon(id));
        return task;
      
}
