let gridDimensionsCount = 50;
const gridDimensions = 500;

let gridColor = 'black';

const gridContainer = document.getElementById('grid');

//change the item color, called from eventlistener in createGridElements()
function changeItemColor(item) {
    console.log(item);
    item.target.style.backgroundColor = 'white';
    console.log(item.target);
}

//create the grid of items and color them, add event listener for mouseover
function createGridElements() {
    for (i = 1; i <= gridDimensionsCount*gridDimensionsCount; i++) {
        let gridElement = document.createElement('div');
        gridElement.className = 'grid-item';
        gridElement.id = i;
        //gridElement.textContent = i;
        gridElement.style.backgroundColor = gridColor;
        gridContainer.appendChild(gridElement);
    }

    gridContainer.style.width = gridDimensions + 'px';
    gridContainer.style.height = gridDimensions + 'px';

    const gridItems = document.getElementsByClassName('grid-item');

    for (j = 0; j < gridItems.length; j++) {
        gridItems[j].style.width = (gridDimensions / gridDimensionsCount) + 'px';

        gridItems[j].addEventListener('mouseover', (e) => {
            changeItemColor(e);
        });
    }

    

}

function resetGrid() {
    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.firstChild);
    }
    createGridElements();
}

createGridElements();


const clearButton = document.getElementById('clear-grid')

//eventlistener for clearButton
clearButton.addEventListener('click', e => {
    resetGrid();
});


const changeDimensionsButton = document.getElementById('change-dimensions');

changeDimensionsButton.addEventListener('click', e => {
    changeDimensions();
});

//change dimensions function
function changeDimensions() {
    gridDimensionsCount = prompt('please enter the new grid dimensions: ');
    resetGrid();
}


//change color button implementation
const colorChangeButton = document.getElementById('change-color');

colorChangeButton.addEventListener('click', e => {
    changeColor();
});

function changeColor() {
    gridColor = prompt('Please type in the color you would like');
    resetGrid();
}