// Get the container element in which we will render the spreadsheet structure
let container = document.getElementById('container');

// A Set to store currently selected cells (used for multiple selection)
let selectedCellsSet = new Set();

// Query all elements that have the 'data-cell' class
let Rcells = document.querySelectorAll('.data-cell');

// A Map to store styles for each cell, keyed by cell ID
let idToStyle = new Map();

/* 
   Generate the top header row (A, B, C, ...) along with the initial empty corner cell.
   Loop runs from 0 to 26:
   - i=0 creates an empty header-cell.
   - i>0 creates cells labeled A, B, C... up to Z (ASCII codes).
*/
for(let i = 0; i <= 26; i++){
    let newCell = document.createElement('div');
    newCell.className = 'cell header-cell';
    if(i !== 0){
        // 64 is ASCII for '@', so for A we do 65 => i + 64
        newCell.innerHTML = String.fromCharCode(i + 64);
    }
    container.append(newCell);
}

// Now generate the main grid: 20 rows, each having a row header (1 to 20) and 26 data cells
let count = 0;
for(let i = 1; i <= 20; i++){ // row index
    
    // Create the header cell for each row (1, 2, 3, ...)
    let headerCell = document.createElement('div');
    headerCell.className = 'cell header-cell';
    headerCell.innerHTML = i;
    container.append(headerCell);

    // Create 26 data cells per row
    for(let j = 1; j <= 26; j++){
        let newCell = document.createElement('div');
        // Assign row and column info for convenience
        newCell.row = i;
        newCell.col = j;
        // Create a unique ID (cell1, cell2, etc.)
        newCell.id = "cell" + ++count;
        // Make the cell editable
        newCell.contentEditable = true;
        newCell.className = 'cell data-cell';
        // Add a click event listener for multiple selection functionality
        newCell.addEventListener('click', multipleSelect);

        container.append(newCell);
    }
}

/* 
   This function populates cells with previously stored data in localStorage.
   Local storage item 'filledColumn' is an array of objects:
       [{id: <cellId>, value: <cell content>, styles: <cell styles>}, ...]
   If found, each cell is updated with 'value' and its styles.
*/
function setDefaultValues(){
    let filledColumn = JSON.parse(localStorage.getItem('filledColumn'));
    if(filledColumn && filledColumn.length > 0){
        for(let t of filledColumn){
            let element = document.getElementById(t.id);
            // Set the innerText with the saved value
            element.innerText = t.value;
            // If styles exist, apply them and update the Map
            if("styles" in t) {
                Object.assign(element.style, t.styles);
                addStyles(t.id, t.styles);
            }
        }
    }
}

// Call the function to load existing data on page load
setDefaultValues();

/*
   Handles the click event for data cells to support multiple selection:
   - If CTRL (or CMD on Mac) is NOT held, reset the selection to the single clicked cell.
   - If CTRL (or CMD) is held and the cell is already selected, deselect it. Otherwise, add it.
*/
function multipleSelect(e){
    let clickedCell = e.target;

    // If no Ctrl/Meta key is pressed, clear previous selection
    if(!e.ctrlKey && !e.metaKey){
        for(let t of selectedCellsSet){
            t.classList.remove('selected');
        }
        selectedCellsSet.clear();

        clickedCell.classList.add('selected');
        selectedCellsSet.add(clickedCell);
    }
    
    // Toggle selection if Ctrl/Meta is pressed
    if((e.ctrlKey || e.metaKey) && selectedCellsSet.has(clickedCell)){
        clickedCell.classList.remove('selected');
        selectedCellsSet.delete(clickedCell);
    } 
    else {
        clickedCell.classList.add('selected');
        selectedCellsSet.add(clickedCell);
    }
}

// Get the "Bold" button from the DOM
let boldBtn = document.getElementById('bold');

/*
   On clicking the bold button, toggle the font weight 
   between 'bold' and 'normal' for all selected cells.
*/
boldBtn.addEventListener('click', function(){
    selectedCellsSet.forEach((cell) => {
        cell.style.fontWeight == "bold" ? cell.style.fontWeight = 'normal' : cell.style.fontWeight = 'bold';
        addStyles(cell.id, {fontWeight: cell.style.fontWeight});
    });
});

// Get the font-family selector from the DOM
let selectedFont = document.getElementById('font');

/*
   When the font-family selection changes, update the fontFamily
   property for all currently selected cells and save it to the Map.
*/
selectedFont.addEventListener('change', function(){
    let curentFont = selectedFont.value;

    selectedCellsSet.forEach((cell) => {
        cell.style.fontFamily = curentFont;
        addStyles(cell.id, {fontFamily: curentFont});
    });
});

// Get the "Save" button and attach an event listener to store the data in localStorage
let saveBtn = document.getElementById('save');
saveBtn.addEventListener('click', addtoLocalStorage);

// This array will be used to collect and store cell info before saving
let filledColumn = [];

/*
   Go through all data cells:
   - If a cell has text, push an object with id, value, and styles into 'filledColumn'.
   - Then store 'filledColumn' in localStorage.
*/
function addtoLocalStorage(){
    let cells = document.querySelectorAll('.data-cell');
    for(let t of cells){
        if(t.innerText){
            let obj = {
                id: t.id,
                value: t.innerText,
                styles: idToStyle.get(t.id)
            };
            filledColumn.push(obj);
        }
    }
    localStorage.setItem('filledColumn', JSON.stringify(filledColumn));
}

/*
   A helper function that merges the current styles for a cell with new styles
   and updates the 'idToStyle' Map. This ensures the styles are kept in one place.
*/
function addStyles(id, obj){
    let value = idToStyle.get(id); // fetch existing style object
    idToStyle.set(id, {...value, ...obj}); // merge and update
    console.log(idToStyle);
}

/*
   Example:
   cell1: {textAlign: 'left'}

   You can store or merge multiple style properties like this:
   cell12: {textAlign: 'left', backgroundColor: 'red', ...}
*/