const value = document.querySelector('#colorValue');
const button = document.querySelector('#changeButton');
const body = document.querySelector('body');

body.addEventListener('click', changeBg)

const colors = [
    '#0000ff',
    '#00ff00',
    '#ff0000',
    '#ffff00',
    '#00ffff',
    '#ff00ff',
    '#f5f5f5',
    '#f7f7f7',
    '#112233',
    '#332211'
]

function getIndex() {
    const colorIndex = Math.floor(colors.length * Math.random())

    return colorIndex
}

function changeBg() {
    color = getIndex();
    body.style.backgroundColor = colors[color];
    value.innerHTML = colors[color]
}
