const sketchPad = document.getElementById("sketchpad");

function makeGrid (rows, cols) {
    sketchPad.style.setProperty("--grid-rows", rows);
    sketchPad.style.setProperty("--grid-cols", cols);
    for(i = 0; i < (rows * cols); i++){
        let cell = document.createElement("div");
        sketchPad.appendChild(cell).className = "grid-cell"
    };
};

makeGrid(24, 24);

const sizeButton = document.getElementById("size-btn");


