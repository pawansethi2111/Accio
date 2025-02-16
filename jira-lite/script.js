
// let btn = document.querySelector('#add-task');
let btn = document.getElementById("add-task");

let todoContainer = document.getElementById("todo")
let count = 1
btn.addEventListener('click', (e)=>{
 let parentTask = document.createElement('div');
    parentTask.className = "task-parent";
  let taskCard = document.createElement('div');
  taskCard.className = "task-card";
  taskCard.id = `task-${count++}`;
//   taskCard.setAttribute("class", "task-card");
  taskCard.innerHTML = "Enter your Task"
//   taskCard.
// taskCard.contentEditable = true;
 taskCard.setAttribute("contenteditable", "true");   
 parentTask.append(taskCard)


  taskCard.addEventListener("click", (e)=>{
    //  let text = e.target.innerText.trim();
     if(taskCard.innerText === "Enter your Task"){
         e.target.innerText = ""
     }
  })

  taskCard.addEventListener("blur", ()=>{
    let parent = taskCard.parentElement;
       if(taskCard.innerText === ""){
        //   taskCard.remove()
        // parentTask.remove()
        parent.remove()
       }
  })


  let select = document.createElement('select');
  let arr = ["todo", "progress", "done"];

//   <option value="todo">Todo</option>

  arr.forEach(item => {
    let option = document.createElement('option');
    option.value = item;
    option.innerText = item[0].toUpperCase() + item.slice(1);
                  //  P + rogress
    select.append(option)
    
  })

  parentTask.append(select)



  todoContainer.append(parentTask)





  select.addEventListener('change', (e)=>{
    // console.log("I changed", e.target.value)
    let selectedValue = e.target.value; // "progress"

    let tobeMoved = document.getElementById(selectedValue);

    // get siblings of e.target
    // let siblings = e.target.previousS
    
    tobeMoved.append(parentTask)
  })

})


  //blur event when clicked out of box and focus when clicked on the box
