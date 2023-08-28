const questions=[
    {
        question:"Javascript is an _______ language",
        answer:[
            {   text:"Object-Based",correct:false},
            {   text:"Object-Oriented",correct:true},
            {   text:"Procedural",correct:false},
            {   text:"Non of the above",correct:false},
        ]
    },
    {
        question:"Which of the following keywords is used to define a variable in Javascript",
        answer:[
            {   text:"var",correct:false},
            {   text:"let",correct:false},
            {   text:"Both var and let",correct:true},
            {   text:"Non of the above",correct:false},
        ]
    },
    {
        question:"How can a datatype be declared to be a constant type",
        answer:[
            {   text:"const",correct:true},
            {   text:"var",correct:false},
            {   text:"let",correct:false},
            {   text:"constant",correct:false},
        ]
    },
    {
        question:"Which of the following methods can be used to display data in some form using Javascript",
        answer:[
            {   text:"document.write()",correct:false},
            {   text:"console.log()",correct:false},
            {   text:"window.alert()",correct:false},
            {   text:"All of the above",correct:true},
        ]
    },
];
const questionElement=document.getElementById("question");
const answerButtons=document.getElementById("answer-buttons");
const nextButton=document.getElementById("next-btn");
let currentQuestionIndex=0;
let score=0;
function startQuiz()
{
   
    currentQuestionIndex=0;
    score=0;
    nextButton.innerHTML="Next";
    showQuestion();
}
function showQuestion()
{
    resetState();
    let currentQuestion=questions[currentQuestionIndex];
    let questionNo=currentQuestionIndex+1;
    questionElement.innerHTML= questionNo+"."+currentQuestion.question;

    currentQuestion.answer.forEach(answer=>{
        const button=document.createElement("button");
        button.innerHTML=answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct)
        {
            button.dataset.correct=answer.correct;
        }
        button.addEventListener("click",selectAnswer);
    });
}
function resetState()
{
    nextButton.style.display="none";
    while(answerButtons.firstChild)
    {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e)
{
    const selectedBtn=e.target;
    const isCorrect=selectedBtn.dataset.correct==="true";
    if(isCorrect)
    {
        selectedBtn.classList.add("correct");
        score++;
    }
    else{
        selectedBtn.classList.add("incorrect");
    }
    nextButton.style.display="block";
}

function showScore()
{
    resetState();
    questionElement.innerHTML=`You scored ${score} out of ${questions.length}! `;
    nextButton.innerHTML="Play Again";
    nextButton.style.display="block";
}
function handleNextButton()
{
    currentQuestionIndex++;
    if(currentQuestionIndex<questions.length)
    {
        showQuestion();
    }
    else{
        showScore();
    }
}
nextButton.addEventListener("click",()=>
{
    if(currentQuestionIndex<questions.length)
    {
        handleNextButton();
    }
    else{
        startQuiz();
    }
});
startQuiz();
