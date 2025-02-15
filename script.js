const body = document.querySelector('body');

const button = document.querySelector('#button');

button.addEventListener('click', changeColor);

const colors = [
    '#565656',
    '#771122',
    '#ff0000',
    '#00ff00',
    '#0000ff',
    '#ffff00',
    '#00ffff'
]

function getIndex() {
    const randomIndex = Math.floor(colors.length*Math.random())

    return randomIndex
}

function changeColor() {
    index = getIndex();
    body.style.backgroundColor = colors[index];
}



