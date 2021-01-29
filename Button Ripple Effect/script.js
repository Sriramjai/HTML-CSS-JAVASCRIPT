const buttons = document.querySelectorAll('.ripple');


buttons.forEach(button => {
    button.addEventListener('click', function (e)  {
        const x = e.clientX;
        const y = e.clientY;

        const buttonTop = e.target.offsetTop;
        const buttonLeft = e.target.offsetLeft;

        const xInside = x - buttonLeft;
        const yInside = y - buttonTop;

        const circle = document.createElement('span');
        circle.classList.add('circle');
        circle.style.top = yInside + 'px';
        circle.style.left = xInside + 'px';

        this.appendChild(circle);

        randomBgColor();

        setTimeout(() => circle.remove(), 500);
        
    })
})

function randomBgColor() {
    var x = Math.floor(Math.random() * 250);
    var z = Math.floor(Math.random() * 100);
    var y = Math.floor(Math.random() * 175);

    var bgColor = "rgb(" + x + "," + y + "," + z +")";
    console.log(bgColor);

    document.body.style.backgroundColor = bgColor;
}