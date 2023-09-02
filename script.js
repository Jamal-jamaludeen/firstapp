const inputtext = document.getElementById("input-text");
const todolist = document.getElementById("todo-list");
var taskbar = document.querySelector("task-bar");

inputtext.addEventListener("keypress",function(event){
   if(event.key==="Enter"){
       event.preventDefault();
      add()
   }
});

function add(){
    
    if (inputtext.value===''){
    alert("enter the text");
    }else{
        let li = document.createElement("li");
        li.innerHTML=inputtext.value;
        todolist.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML="x";
        li.appendChild(span);    
    }savadata()
    inputtext.value = "";
    }
    
    todolist.addEventListener('click',function(e){
        if (e.target.tagName==='LI'){
            e.target.classList.toggle("linethrough");
            savadata()
        }else if(e.target.tagName==='SPAN'){
            e.target.parentElement.remove();
            savadata()
        }
        
    },false);

    //localstorage
    function savadata(){
        localStorage.setItem("data",todolist.innerHTML);
    }
    function showdata(){
        todolist.innerHTML=localStorage.getItem("data");
    }
    showdata()

    
