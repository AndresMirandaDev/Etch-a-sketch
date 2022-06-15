const sketchPad = document.getElementById("sketchpad");
//function for grid making automation
function makeGrid (rows, cols) {
    sketchPad.style.setProperty("--grid-rows", rows);
    sketchPad.style.setProperty("--grid-cols", cols);
    for(i = 0; i < (rows * cols); i++){
        let cell = document.createElement("div");
        sketchPad.appendChild(cell).className = "grid-cell"
    };
};

makeGrid(16, 16);
//hovering effect function
const gridCell = document.querySelectorAll(".grid-cell");
gridCell.forEach((cell)=>{
    cell.addEventListener("mouseover", (e)=>{
        cell.style.background = "black";
    });
});
//reset
function reset () {
    gridCell.forEach((cell)=>{
        cell.style.background = "white";
    });
};

//buttons 
const resetButton = document.getElementById("reset-btn");

resetButton.addEventListener("click", (e)=>{
    reset();
})

