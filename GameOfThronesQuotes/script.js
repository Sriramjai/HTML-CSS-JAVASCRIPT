const quoteEl = document.getElementById('quote');
const quoteBtn = document.getElementById('quoteBtn');

quoteBtn.addEventListener('click', genereateQuote);

genereateQuote();

async function genereateQuote() {
   
    const res = await fetch('https://game-of-thrones-quotes.herokuapp.com/v1/author/tyrion/1')

    const data = await res.json();

    quoteEl.innerHTML = data.sentence;
 
}