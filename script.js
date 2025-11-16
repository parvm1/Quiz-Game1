const quizData = [
    {
        question: "Which language is used for web styling?",
        options: ["HTML", "Python", "CSS", "C++"],
        answer: "CSS"
    },
    {
        question: "What does HTML stand for?",
        options: ["Hyperlinks Text Markup Language", "HyperText Markup Language", "Home Tool Markup Language", "None"],
        answer: "HyperText Markup Language"
    },
    {
        question: "Which is a JavaScript framework?",
        options: ["React", "Laravel", "Django", "Flask"],
        answer: "React"
    }
];

let index = 0;
let score = 0;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("next-btn");
const scoreEl = document.getElementById("score");

function loadQuestion() {
    nextBtn.style.display = "none";
    optionsEl.innerHTML = "";

    let current = quizData[index];
    questionEl.textContent = current.question;

    current.options.forEach(option => {
        const div = document.createElement("div");
        div.classList.add("option");
        div.textContent = option;
        div.onclick = () => selectOption(div, current.answer);
        optionsEl.appendChild(div);
    });
}

function selectOption(selected, correct) {
    let allOptions = document.querySelectorAll(".option");

    allOptions.forEach(opt => opt.style.pointerEvents = "none");

    if (selected.textContent === correct) {
        selected.style.background = "#90ee90";
        score++;
    } else {
        selected.style.background = "#ff7276";
    }

    nextBtn.style.display = "block";
}

nextBtn.onclick = () => {
    index++;
    if (index < quizData.length) {
        loadQuestion();
    } else {
        showScore();
    }
};

function showScore() {
    questionEl.style.display = "none";
    optionsEl.style.display = "none";
    nextBtn.style.display = "none";

    scoreEl.style.display = "block";
    scoreEl.innerHTML = `🎉 You scored <strong>${score}/${quizData.length}</strong>`;
}

loadQuestion();
