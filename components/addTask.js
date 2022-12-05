import checkComplete from "./checkComplete.js";
import deleteIcon from "./deleteIcon.js";

const Cdate = new Date();

export const addTask = (evento)=>{
  const list =document.querySelector("[data-list]");
  const task = createTask(evento);
  list.appendChild(task);
}



const createTask = (evento)=> {
    evento.preventDefault();
    const taskList = JSON.parse(localStorage.getItem("tasks")) || [];

    const input = document.querySelector("[data-form-input]");
    const calendar = document.querySelector("[data-form-date]");
    const value = input.value; 
    const date = calendar.value;

    let dateformat;
    

  if(date==""){
    dateformat = moment(Cdate).format("DD/MM/YYYY")

  }else{ dateformat = moment(date).format("DD/MM/YYYY");}
  console.log(value);
  console.log(dateformat);

    const task=document.createElement("li");
    task.classList.add("card");
    input.value="";
    const taskContent = document.createElement("div");

    const taskObj = {
      value:value,
      dateformat:dateformat,
    }
  
    console.log(taskObj);
    taskList.push(taskObj);
    
    const dateElement = document.createElement("span");
    dateElement.innerHTML = dateformat;
  
    taskContent.appendChild(checkComplete());
    localStorage.setItem("tasks",JSON.stringify(taskList));

    console.log(taskList);
    console.log(localStorage);
    const titleTask=document.createElement("span");
    titleTask.classList.add("task");
    titleTask.innerText = value;
    taskContent.appendChild(titleTask);


      //  task.innerHTML = content;
        task.appendChild(taskContent);
        task.appendChild(dateElement);
        task.appendChild(deleteIcon());
        return task;
      
}
