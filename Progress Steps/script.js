const progress = document.getElementById('progress');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const circles = document.querySelectorAll('.circle');
const titles = document.querySelectorAll('.title');

let currentActive = 1;

next.addEventListener('click', () => {
    currentActive++;
   
     if(currentActive > circles.length){
         currentActive = circles.length;
     }
     
     updateProgress();
     showTitle();
})

prev.addEventListener('click', () => {
    currentActive--;

     if(currentActive < 1){
         currentActive = 1;
     }
     
     updateProgress();
     showTitle();
     
})

function updateProgress() {
    circles.forEach((circle, index) => {
        if(index < currentActive){
            circle.classList.add('active');
            
        } else {
            circle.classList.remove('active');
            
        }
    })


    const activeCircles = document.querySelectorAll('.active');

    progress.style.width = (activeCircles.length - 1) / (circles.length - 1) * 100 + '%'
 
    
    if(currentActive === 1 ){
        prev.disabled = true;
    } else if (currentActive === circles.length ){
        next.disabled = true;
    } else{
        prev.disabled = false;
        next.disabled = false;
    }
}

function showTitle() {
    titles.forEach((title, idx) => {
        if(idx < currentActive){
            title.classList.add('show');
        } else{
            title.classList.remove('show');
        }
    })
}