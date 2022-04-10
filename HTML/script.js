var tasks=[{
    name:"Learn Javascript",
    id:12345,
    isCompleted:false   
}, {
    name:"Learn Nodejs",
    id:235235,
    isCompleted:false   
}, {
    name:"Go to Gym",
    id:5134154,
    isCompleted:false   
}, {
    name:"Brush your Teeth",
    id:525341,
    isCompleted:false   
}];

// create new todo tasks and apeend them to the UI list


const todoListContent=document.querySelector(".todo-list-content");


tasks.forEach((task)=>{

    const newItem = newTodoListItem(task);
    todoListContent.appendChild(newItem);
    
})


function newTodoListItem(task)
{
    const div=document.createElement('div');
    div.setAttribute("class","todo-list-item")

    const heading=document.createElement('h3');
    
    const input=document.createElement('input');
    input.type = "text";
    input.value =task.name;
    input.setAttribute("class","todo-list-input");
    input.addEventListener("focusout",(event)=>onInputFocusOut(event));

    heading.innerHTML=task.name;

    heading.appendChild(input);

    const controlsDiv=document.createElement('div');
    controlsDiv.setAttribute("class","todo-list-item-controls");
    const button1=document.createElement('button');
    const button2=document.createElement('button');
    const button3=document.createElement('button');

    button1.innerText='Mark as Complete';
    button2.innerText='Modify Task';
    button3.innerText='Delete Task';


    if(task.isCompleted){
        heading.style.backgroundColor="green";
        button1.style.display="none";
    }
    else{
        button1.addEventListener("click",(event)=>onMarkAsComplelted(event));
    }

    
    button2.addEventListener("click",(event)=>onModifyTask(event));
    button3.addEventListener("click",(event)=>onDeleteTask(event));
  

    controlsDiv.appendChild(button1);
    controlsDiv.appendChild(button2);
    controlsDiv.appendChild(button3);



    div.appendChild(heading);
    div.appendChild(controlsDiv);

    div.setAttribute("id",task.id);

    return div;
}

function onMarkAsComplelted(e){
    const listItem= e.srcElement.parentNode.parentNode;
    const id=listItem.getAttribute("id");
    console.log(id);

    tasks.forEach((task)=>{

        if(task.id===id)
        {
            task.isCompleted=true;
        }

    })

    markComplete(listItem);
}



function markComplete(listItem)
{
    const heading=listItem.firstElementChild;
    heading.style.backgroundColor="green";

    const button=listItem.lastElementChild.firstElementChild;
    button.style.display="none";

}

function onDeleteTask(e){

    const listItem= e.srcElement.parentNode.parentNode;
    const id=listItem.getAttribute("id");

    tasks=tasks.filter((task)=>{
        task.id!==id;
    });

    listItem.style.display="none";

}

function onModifyTask(e){
    console.log(e);
    const listItem= e.srcElement.parentNode.parentNode;
    const id=listItem.getAttribute("id");
    const heading=listItem.firstElementChild;
    const headingValue=heading.firstElementChild.textContent;
    heading.firstChild.textContent="";

    const inputField=heading.firstElementChild;

    inputField.setAttribute("value",headingValue);
    inputField.style.display="inline-block";
    inputField.focus();

}

function onInputFocusOut(e){
    const listItem= e.srcElement.parentNode.parentNode;
    const id=listItem.getAttribute("id");
    const heading=listItem.firstElementChild;
    const inputField=heading.firstElementChild;
    inputField.style.display="none";
    heading.firstChild.textContent=e.target.value;

    tasks.forEach((task)=>{
        if(task.id==id){
            task.name=e.target.value;
        }
    })
    
}