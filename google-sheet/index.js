
let container = document.getElementById('container');

let selectedCellsSet = new Set();
let Rcells = document.querySelectorAll('.data-cell');

let idToStyle = new Map();

// generate header column:

for(let i = 0; i<=26; i++){
    let newCell = document.createElement('div');
    newCell.className = 'cell header-cell';
    if(i!==0){
        newCell.innerHTML = String.fromCharCode(i+64);
    }
    container.append(newCell);
}

// generate data cells:
let count = 0
for(let i = 1; i<=20; i++){ // row

    // generate header row
    let headerCell = document.createElement('div');
    headerCell.className = 'cell header-cell';
    headerCell.innerHTML = i;
    container.append(headerCell);

    // generate data cells per row
    for(let j = 1; j<=26; j++){
        let newCell = document.createElement('div');
        // newCell.innerHTML = i + ',' + j;
        // newRow.append(newCell);
        newCell.row = i 
        newCell.col = j;
        newCell.id = "cell"+ ++count;
        newCell.contentEditable = true;
        newCell.className = 'cell data-cell';

        newCell.addEventListener('click', multipleSelect)

        container.append(newCell);
        
    }



}

function setDefaultValues(){

    let filledColumn = JSON.parse(localStorage.getItem('filledColumn'));

    //  [{id: "Cell1", value: 'A1'}, {id:2,2, value: 'B2'}, {id:3,2, value: 'C3'}]
    // console.log(filledColumn)
    if( filledColumn && filledColumn.length>0){
    for(let t of filledColumn){
        
        let element = document.getElementById(t.id);
        //  console.log(t, element)
        element.innerText = t.value;
        if("styles" in t) {
            Object.assign(element.style, t.styles)

        //    element.style = {color: 'red', fontSize: '20px'}  // {color: 'red', fontSize: '20px'}


            addStyles(t.id, t.styles)
        } 
    }
}

}

setDefaultValues()



    // let a = 10

    function multipleSelect(e){
        //  console.log(e)
        // console.log(a)
         let clickedCell = e.target

        if(!e.ctrlKey  && !e.metaKey){

            for(let t of selectedCellsSet){
                // console.log("I am executed inside loop")
                t.classList.remove('selected');
            }
            
            selectedCellsSet.clear();
            // console.log("I am executed outside loop")

            clickedCell.classList.add('selected');
            selectedCellsSet.add(clickedCell);
        }
        
         // already selected cell will be unselected
        if((e.ctrlKey || e.metaKey) && selectedCellsSet.has(clickedCell)){
                clickedCell.classList.remove('selected');
                selectedCellsSet.delete(clickedCell);  
        }
       else{
        clickedCell.classList.add('selected');
        selectedCellsSet.add(clickedCell);
       }
    

      
    }
    




let boldBtn = document.getElementById('bold');

boldBtn.addEventListener('click', function(){


    selectedCellsSet.forEach((cell) => {
        cell.style.fontWeight=="bold"?  cell.style.fontWeight = 'normal'  :cell.style.fontWeight = 'bold';
        addStyles(cell.id, {fontWeight: cell.style.fontWeight})
    })


})


let selectedFont = document.getElementById('font');

selectedFont.addEventListener('change', function(){
    let curentFont = selectedFont.value;

    selectedCellsSet.forEach((cell) => {
        cell.style.fontFamily = curentFont;
        addStyles(cell.id, {fontFamily: curentFont})
    })

})


// add to localstorage: (old)

let saveBtn = document.getElementById('save');

saveBtn.addEventListener('click', addtoLocalStorage);

let filledColumn = []
function addtoLocalStorage(){
     let cells = document.querySelectorAll('.data-cell');
    for(let t of cells){
      if(t.innerText){;

        let obj = {
            id: t.id,
            value: t.innerText,
            styles : idToStyle.get(t.id)
        }
        filledColumn.push(obj)
        
    }
}
localStorage.setItem('filledColumn', JSON.stringify(filledColumn));
}



function addStyles(id, obj){
    // id = cell12 , {textAlign: 'left', backgroundColor: 'red'}
    let value = idToStyle.get(id); // {color: 'red', fontSize: '20px'}
    idToStyle.set(id, {...value, ...obj} )

    console.log(idToStyle)
}

cell1: {textAlign: 'left'}




// 1: {textAlign: 'left', text-align: 'center', text-align: 'right'}


