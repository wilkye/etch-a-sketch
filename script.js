const gridCont = document.getElementById("gridCont");
const clearBtn = document.getElementById("clear");
const gridBtn = document.getElementById("gridSize");

let createSquare = (x) => {
    const square = document.createElement("div");

    square.className = "square";
    square.style.width = `${x}px`;
    square.style.height = `${x}px`;
    square.addEventListener("mouseenter", () => {
        square.style.backgroundColor = "red";
    });

    gridCont.appendChild(square);
}

let makeGrid = (dimension) => {
    gridCont.textContent = "";

    const adjDime = Math.floor(400 / dimension);
    console.log(adjDime);

    gridCont.style.width = `${adjDime * dimension}px`;
    gridCont.style.height = `${adjDime * dimension}px`;

    for (let i = 0; i < Math.pow(dimension, 2); i++) {
        console.log("Y");
        createSquare(adjDime);
    }
}

clearBtn.addEventListener("click", () => {
    const allSquares = document.getElementsByClassName("square");
    for (let i = 0; i < allSquares.length; i++) {
        allSquares[i].style.backgroundColor = "rgb(195, 195, 195)";
    }
});

gridBtn.addEventListener("click", () => {
    const userInput = prompt("Pick a grid size 1-100");
    if (userInput > 100 || userInput < 1) {
        alert("Please provide a number within range.");
    } else {
        makeGrid(Math.floor(userInput));
    }
});

// Initial grid creation
makeGrid(16);