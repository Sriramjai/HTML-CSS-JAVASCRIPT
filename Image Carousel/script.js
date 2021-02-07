const imageContainer = document.getElementById('imgs');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const text = document.getElementById('season');

const img = document.querySelectorAll('#imgs img');

let idx = 0;

let interval = setInterval(run, 2000)


function run(){
    idx++;
    
    changeImage();
}


function changeImage() {
     if(idx > img.length -1 ) {
         idx = 0;
     } else if (idx < 0) {
         idx = img.length -1;
     }


    imageContainer.style.transform = `translateX(${-idx * 500}px)`;

    if(idx === 0) { text.innerHTML = "SPRING"}
    else if (idx === 1 ) { text.innerHTML = "SUMMER"}
    else if (idx === 2 ) { text.innerHTML = "FALL"}
    else if (idx === 3 ) { text.innerHTML = "WINTER"}
}

function resetInterval(){
    clearInterval(interval);
    interval = setInterval(run, 2000);
}


prevBtn.addEventListener('click', () => {
    idx--;
    changeImage();
    resetInterval();
});

nextBtn.addEventListener('click', () => {
    idxx++;
    changeImage();
    resetInterval();
})

