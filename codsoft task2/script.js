const questions = [
  {
    question: "Which is largest animal in the world?",
    answers: [
      {text: "Shark", correct: false},
      {text: "Blue whale", correct: true},
      {text: "Elephant", correct: false},
      {text: "Giraffe", correct: false},
        
    ],
  },
  {
    question: "Which is the smallest country in the world?",
    answers: [
      {text: "Vatican city", correct: true},
      {text: "Bhutan", correct: false},
      {text: "Nepal", correct: false},
      {text: "Shri lanka", correct: false},
    ],
  },
  {
    question: "Which is the largest desert in the world?",
    answers: [
      {text: "Kalahari", correct:false},
      {text: "Gobi", correct: false},
      {text: "Sahara", correct: false},
      {text: "Antartica", correct: true},
    ],
  },
  {
    question: "Which is the smallest continent in the world?",
    answers: [
      {text: "Asia", correct: false},
      {text: "Australia", correct: true},
      {text: "Europe", correct: false},
      {text: "Africa", correct: false},
    ],
  },
];

const questionElement = document.getElementById("question");
const answerbutton= document.getElementById("answer-buttons");
const nexButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nexButton.innerHTML = "Next";
    showQuestion();

}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
       const button = document.createElement("button");
       button.innerHTML = answer.text;
       button.classList.add("btn");
       answerbutton.appendChild(button);
       if(answer.correct){
        button.dataset.correct = answer.correct;
       }
       button.addEventListener("click",selectAnswer);
  });
}

function resetState(){
   nexButton.style.display = "none";
   while(answerbutton.firstChild){
    answerbutton.removeChild(answerbutton.firstChild);
   
}
}

function selectAnswer(e){
    const selectedBtn =  e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
      selectedBtn.classList.add("correct");
      score++;
    }else{
      selectedBtn.classList.add("incorrect");
    }
    Array.from(answerbutton.children).forEach(button => {
      if(button.dataset.correct === "true"){
        button.classList.add("correct");
      }
      button.disabled = true;
    });
    nexButton.style.display = "block";
    nexButton.addEventListener("click", goToNextQuestion);
  }

  function goToNextQuestion(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
      showQuestion();
    }else{
      alert("Quiz finished! Your score: " + score);
    }
  }




startQuiz();