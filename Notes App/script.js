const addBtn = document.getElementById('add');



var palette = "";

const notes = JSON.parse(localStorage.getItem('notes'));

if(notes) {
    notes.forEach(note => addNewNote(note));
}

addBtn.addEventListener('click', () => addNewNote());

function addNewNote(text = '') {
    const note = document.createElement('div');
    note.classList.add('note');

    note.innerHTML=`
    <div class="tools">
        <button class="colorPalette"><i class="fas fa-palette"></i></button>
        <button class="edit"><i class="fas fa-edit"></i></button>
        <button class="delete"><i class="fas fa-trash-alt"></i></button>
    </div>

    <div class="main ${text ? "" : "hidden"}"></div>
    <textarea class="${text ? "hidden" : ""}"></textarea>
    `;

    // note.style.backgroundColor = setRandomBgColor();

    

    const editBtn = note.querySelector('.edit');
    const deleteBtn = note.querySelector('.delete');
    const main = note.querySelector('.main');
    const textArea = note.querySelector('textarea');

    const colorPaletteBtn = note.querySelector('.colorPalette');

    textArea.value = text;
    main.innerHTML = marked(text);

    // colorPaletteBtn.addEventListener('click', () => {
    //     const color = document.createElement('div');
    //     color.classList.add('palette');

    //     color.innerHTML = `
    //     <div id='palette-div' style='border:2px solid white;  justify-content:space-evenly'>&nbsp;</div>
    //     `;

    //     note.appendChild(color);

    //     for(var i = 0; i < colors.length; i++) {
    //         palette = palette + " <div class='palette'" + " style='background-color:" + colors[i]
    //             + "' onClick='setBgColor(this)'>  </div>";
    //     }

    //     document.getElementById('palette-div').innerHTML = palette;

    // })


    deleteBtn.addEventListener('click', () => {
        note.remove();

        updateLS();
    })

    editBtn.addEventListener('click', () => {
        main.classList.toggle('hidden');
        textArea.classList.toggle('hidden');
    })

    textArea.addEventListener('input', (e) => {
        const { value } = e.target;

        main.innerHTML = marked(value);

        updateLS();
    })

    document.body.appendChild(note);
   

}


// Updates Local Storage

function updateLS() {
    const notesText = document.querySelectorAll('textarea');

    const notes = [];

    notesText.forEach(note => notes.push(note.value));

    localStorage.setItem('notes', JSON.stringify(notes));

}


// function setRandomBgColor() {
//     const note = document.querySelector('.note');
//     var colors = ["#F28B82", "#FBBC04", "#CBF0F8","#FFF475","#CCFF90","#E6C9A8","#AECBFA"];

//    const setColor = (colors[Math.floor(Math.random() * colors.length)]);

//    note.style.backgroundColor = setColor;

// }


// function setBgColor( clickedDiv ) {
//     var currentColor = clickedDiv.style.backgroundColor;
//     body.style.backgroundColor = currentColor;
// }