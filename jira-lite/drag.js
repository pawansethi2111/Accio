
// let btn = document.querySelector('#add-task');
let btn = document.getElementById("add-task");

let todoContainer = document.getElementById("todo")
let count = 1
btn.addEventListener('click', (e)=>{
 
  let taskCard = document.createElement('div');
  taskCard.className = "task-card";
  taskCard.id = `task-${count++}`;
//   taskCard.setAttribute("class", "task-card");
  taskCard.innerHTML = "Enter your Task"
//   taskCard.
// taskCard.contentEditable = true;
 taskCard.setAttribute("contenteditable", "true");   
//  taskCard.setAttribute("draggable", "true");
taskCard.draggable = true;
 todoContainer.append(taskCard)


  taskCard.addEventListener("click", (e)=>{
    //  let text = e.target.innerText.trim();
     if(taskCard.innerText === "Enter your Task"){
         e.target.innerText = ""
     }
  })

  taskCard.addEventListener("blur", ()=>{
   
       if(taskCard.innerText === ""){
         taskCard.remove()
       }
  })


  // events set 1:  applies to element which we are drag and drop

  taskCard.addEventListener("dragstart", (e)=>{
    console.log("drag start")
    taskCard.style.opacity = "0.5"
    e.dataTransfer.setData("text", taskCard.id)
    
  })

    taskCard.addEventListener("dragend", (e)=>{
    console.log("drag end")
    taskCard.style.opacity = "1"

    })


  // events set 2:  applies to the path where we are dropping the element

     // "dragover" event is required to allow a drop
     // dragenter
     // drop

     let cols = document.querySelectorAll('.column');
     let dragEvents = ['dragover', 'dragenter', 'drop'];

     dragEvents.forEach(eventsOfDrag =>{

        // console.log(eventsOfDrag)

          for(let t of cols){
             t.addEventListener(eventsOfDrag, (e)=>{
                  e.preventDefault();

                  if(eventsOfDrag == "drop"){
                    //  console.log("drop", taskCard)
                    let id = e.dataTransfer.getData("text")
                    
                    let card = document.getElementById(id)
                      t.append(card)
                  }
             })
          }
     })
  

})
