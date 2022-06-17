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
draw();


function clearGrid(){
    const grid = document.querySelectorAll(".grid-cell");
    grid.forEach((cell)=>{
        cell.remove();
    })
}

//hovering effect function
function draw(){
    const gridCell = document.querySelectorAll(".grid-cell");
    gridCell.forEach((cell)=>{
        cell.addEventListener("mouseover", (e)=>{
            cell.style.background = "black";
         });
     });
   };

//reset
function reset () {
    const gridCell = document.querySelectorAll(".grid-cell");
    gridCell.forEach((cell)=>{
        cell.style.background = "white";
    });
};

//buttons 
const resetButton = document.getElementById("reset-btn");

resetButton.addEventListener("click", (e)=>{
    reset();
})

const sizeButton = document.getElementById("size-btn");

sizeButton.addEventListener("click", (e)=>{
    const size = document.getElementById("16x16");
    const size2= document.getElementById("32x32");
    const size3= document.getElementById("64x64");
    
    size.classList.toggle("hide");
    size.classList.toggle("show");
    size2.classList.toggle("hide");
    size2.classList.toggle("show");
    size3.classList.toggle("hide");
    size3.classList.toggle("show");

});

const button16 = document.getElementById("16x16");
const button32= document.getElementById("32x32");
const button64= document.getElementById("64x64");

button16.addEventListener("click", (e)=>{
    clearGrid();
    makeGrid(16,16)
    draw();
});

button32.addEventListener("click", (e)=>{
   clearGrid();
   makeGrid(32, 32);
   draw();
});

button64.addEventListener("click", (e)=>{
    clearGrid();
    makeGrid(64, 64)
    draw();
});

