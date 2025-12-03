
// 1. QUESTIONS ARRAY

const questions = [
    {
        question: "What color is the sky??",
        options: ["Blue", "Green", "Red", "Yellow"],
        answer: 0
    },
    {
        question: "What color is the ocean??",
        options: ["Red", "Blue", "Pink", "Purple"],
        answer: 1
    },
    {
        question: "1+1=?",
        options: ["2", "3", "4", "5"],
        answer: 0
    }
];

let currentIndex = 0;
let score = 0;
let timer;
let timeLeft = 15;

// 2. SHUFFLE QUESTIONS

function shuffleQuestions(){
    questions.sort(() => Math.random() - 0.5);
}


// 3. START TIMER

function startTimer(){
    timeLeft = 15;
    document.getElementById("time").textContent = timeLeft;

    timer = setInterval(() => {
        timeLeft--;
        document.getElementById("time").textContent = timeLeft;

        if(timeLeft === 0){
            clearInterval(timer);
            nextQuestion();
        }
    },1000);
}


// 4. DISPLAY QUESTION
function displayQuestion(){
    const q = questions[currentIndex];

    document.getElementById("question").textContent = q.question;

    const optionsBox = document.getElementById("options");
    optionsBox.innerHTML = "";

    q.options.forEach((option, index) => {
        const btn = document.createElement("button");
        btn.textContent = option;
        btn.onclick = () => checkAnswer(index);
        optionsBox.appendChild(btn);
    });
}


// 5. CHECK ANSWER

function checkAnswer(selected){
    clearInterval(timer);

    if(selected === questions[currentIndex].answer){
        score++;
        document.getElementById("feedback").textContent = "✅ Correct!";
    }else{
        document.getElementById("feedback").textContent = "❌ Wrong!";
    }

    document.getElementById("score").textContent = score;
}


// 6. NEXT QUESTION

function nextQuestion(){
    currentIndex++;
    document.getElementById("feedback").textContent = "";

    if(currentIndex < questions.length){
        displayQuestion();
        startTimer();
    }
    else{
        document.getElementById("question").textContent = "Quiz Finished 🎉";
        document.getElementById("options").innerHTML = "";
        document.getElementById("time").textContent = "0";
    }
}

// 7. START QUIZ

function startQuiz(){
    shuffleQuestions();
    displayQuestion();
    startTimer();
}

startQuiz();
