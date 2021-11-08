const container = document.getElementById('container');
let rows = document.getElementsByClassName('gridRow');

//grid functions and initialized state

function defaultGrid() {
    makeRows(256);
}

function makeRows(rowNum) {
    for (i = 0; i < rowNum; i++) {
        let row = document.createElement('div');
        container.appendChild(row).className = 'gridRow';

    }
}

defaultGrid();

//darkening on hover; must be declared after defaultGrid function is called above

const boxes = document.querySelectorAll('.gridRow');

boxes.forEach((box) => {
    box.addEventListener('mouseover', () => {
        box.classList.add('darken');
    });
});

// .reset functions
const reset = document.querySelector('.reset');

reset.addEventListener('click', boardReset);

function boardReset() {
    boxes.forEach((box) => {
        box.classList.remove('darken');
    });
};
