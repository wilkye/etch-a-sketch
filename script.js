const gridCont = document.getElementById("gridCont");
const clearBtn = document.getElementById("clear");
const gridBtn = document.getElementById("gridSize");
const redBtn = document.getElementById("red");
const greenBtn = document.getElementById("green");
const blueBtn = document.getElementById("blue");

let selectedColor = "red";

let createSquare = (x) => {
    const square = document.createElement("div");

    square.className = "square";
    square.style.backgroundColor = "rgba(233, 233, 233, 1)";
    square.style.width = `${x}px`;
    square.style.height = `${x}px`;
    square.addEventListener("mouseenter", () => {
        square.style.backgroundColor = selectedColor;
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
        allSquares[i].style.backgroundColor = "rgba(233, 233, 233, 1)";
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

redBtn.addEventListener("mousedown", () => {
    selectedColor = "red";
    redBtn.classList.add("current");
    greenBtn.classList.remove("current");
    blueBtn.classList.remove("current");
});

greenBtn.addEventListener("mousedown", () => {
    selectedColor = "green";
    greenBtn.classList.add("current");
    blueBtn.classList.remove("current");
    redBtn.classList.remove("current");
});

blueBtn.addEventListener("mousedown", () => {
    selectedColor = "blue";
    blueBtn.classList.add("current");
    greenBtn.classList.remove("current");
    redBtn.classList.remove("current");
});

// Initial grid creation
makeGrid(16);