const sounds = ['HipHop', 'Proud', 'Stylish','Live','UpBeat'];

sounds.forEach(sound => {
    const btn = document.createElement('button');
    btn.classList.add('btn');

    btn.innerText = sound;
    

    btn.addEventListener('click', () => {
        stopSongs();
        changeBackgroundColor(btn);
        //removeActiveClasses();
        
        document.getElementById(sound).play();
        btn.classList.add('active');
        

    });

    document.getElementById('buttons').appendChild(btn);
});


function stopSongs() {
    sounds.forEach(sound => {
        const song = document.getElementById(sound);
        
        song.pause();
        song.currentTime = 0;
    });
}

function changeBackgroundColor(btn) {
     
         const beatTitle = btn.innerText;      
        console.log(beatTitle);
        

        if(beatTitle === "HipHop") {
            document.body.style.background = "linear-gradient(90deg, #00C9FF 0%, #92FE9D 100%)";
            
        } else if (beatTitle === "Proud") {
            document.body.style.background = "linear-gradient(0deg, #D9AFD9 0%, #97D9E1 100%)";  
                    } else if (beatTitle === "Stylish") {
            document.body.style.background = "linear-gradient(45deg, #85FFBD 0%, #FFFB7D 100%)";
            
        } else if (beatTitle === "Live") {
            document.body.style.background = "linear-gradient(to right, #ffafbd, #ffc3a0)";
            
            //"linear-gradient(58deg, #FFDEE9 0%, #B5FFFC 100%)";
        } else if (beatTitle === "UpBeat") {
            document.body.style.background = "radial-gradient( circle farthest-corner at 3.1% 8.2%,  rgba(248,250,107,1) 0%, rgba(238,148,148,1) 98.2% )";
            
        }   
    
}


function removeActiveClasses() {
    const btn = document.getElementById(sound);
    console.log(btn);
    btn.classList.remove('active');

}
