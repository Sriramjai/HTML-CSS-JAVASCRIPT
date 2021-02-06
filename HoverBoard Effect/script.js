const container = document.getElementById('container');
const colors = ['#FFADAD','#FFD6A5','#FDFFB6','#CAFFBF','#9BF6FF','#A0C4FF','#BDB2FF','#FFC6FF'];
const SQUARES = 500;

for(let i = 0; i < SQUARES; i++){
    const square = document.createElement('div');
    square.classList.add('square');

    square.addEventListener('mouseover', () => setColor(square));
    square.addEventListener('mouseout', () => removeColor(square));

    container.appendChild(square);

}

function setColor(element){
    const color = getRandomColor();
    element.style.background = color;
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;

}

function removeColor(element) {
    element.style.background = "#1d1d1d";
    element.style.boxShadow = `0 0 2px #000`;
}

function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)];
}