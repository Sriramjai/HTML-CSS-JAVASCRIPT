const quizData = [
    {
        question: "What’s the tallest building in the world?",
        a: "CN Tower",
        b: "Shangai Tower",
        c: "Burj Khalifa",
        d: "Makkah Clock Tower",
        correct: "c",
    },
    {
        question: "In the 1997 film Titanic, what actor played the main protagonist?",
        a: "Will Smith",
        b: "Leonardo di Caprio",
        c: "Tom Hanks",
        d: "George Clooney",
        correct: "b",
    },
    {
        question: "What is the largest French speaking city outside of France?",
        a: "Montreal",
        b: "New York",
        c: "London",
        d: "Frankfurt",
        correct: "a",

    },
    {
        question: "What kind of food is Monterey Jack?",
        a: "Pizza",
        b: "Pasta",
        c: "Sandwich",
        d: "Cheese",
        correct: "d",

    },
    {
        question: "Where does the rock band AC/DC originally come from?",
        a: "UK",
        b: "USA",
        c: "Australia",
        d: "Canada",
        correct: "c",

    },
];

const quiz = document.getElementById('quiz');
const answerEls = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz(){
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false);
}


function getSelected() {
    let answer;
    
    answerEls.forEach(answerEl => {
        if(answerEl.checked){
            answer = answerEl.id;
        }
    })
    
    return answer;
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected();
    
    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;
        console.log("current quiz : ", currentQuiz);
        if(currentQuiz < quizData.length) {
            loadQuiz();
        }
        else {
            quiz.innerHTML = `
                <h2>You answered ${score}/${quizData.length} questions correctly</h2>

                <button onclick="location.reload()
                ">Reload</button>
            `
        }
    }
})