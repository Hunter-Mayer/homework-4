var h1 = document.querySelector("h1")
var choicesEl = document.getElementById('choices')
var startBtn = document.querySelector('button')
var index = 0
var timer = 50
var timerEl = document.getElementById('timer')

var questionsList = [
    {
        question: "JavaScript is an ____ language?",
        answer: "Object-Oriented",
        choices: ["Object-Oriented","Object-Based", "Procedural", "None of the Above"]
    },
    {
        question: "Which of the following keywords is used to define a variable in JavaScript?",
        answer: "Both A and B",
        choices: ["var","let", "Both A and B", "None of the Above"]
    },
    {
        question: "How can a datatype be declared to be a constant type?",
        answer: "const",
        choices: ["const","var", "let", "constant"]
    },
    {
        question: "What keyword is used to check whether a give property is valid or not?",
        answer: "in",
        choices: ["in","is in", "exists", "lies"]
    },
    {
        question: "Which  function is used to serialize an object into a JSON string in JavaScript?",
        answer: "stringify()",
        choices: ["parse()","convert()", "stringify()", "None of the Above"]
    }
]

function renderQuiz() {
     
    // Condition to check if theres anymore questions
    // if the current index is = length of the questions
    // Then we call the end quiz function
    if (index === 5) {
        endQuiz()
        
    } else {
    var currentQuestion = questionsList[index]
    h1.innerText = currentQuestion.question
    choicesEl.innerHTML = "" //clear out answerEL

    for (var i = 0; i < currentQuestion.choices.length; i++) {//for loop to create the choices for each question of the quiz 
       
        var button = document.createElement('button') //create list item
        var choice = currentQuestion.choices[i] //give text content
        button.innerText = choice
        choicesEl.appendChild(button)
    }
    }   
}


// THe user clicks a button as their choice for the question
choicesEl.addEventListener('click', function(e) {
    console.log(e.target.textContent)
    var choice = e.target.textContent
    if(choice === questionsList[index].answer){
        console.log("Next question")
        index++
        renderQuiz()
    } else {
        console.log("Minus Time")
        timer-=5
    }
        
})
// Once they choose, we grab the text of the choice
// Then compare it to what the answer should be
//If it's correct, it will go to next question
// If wrong minus time


startBtn.addEventListener('click', function(e){
    console.log(e.target.textContent)
    renderQuiz()
    startTimer()
})

function startTimer() {
    var myTimer = setInterval(function(){
    timer--
    console.log(timer)
    timerEl.innerText = timer
    if( timer === 0) {
        clearInterval(myTimer)
        endQuiz()
    }
}, 1000)
}

//make an end quiz function
function endQuiz () {
    h1.textContent = "Game Over, Thank you for Playing!"
    console.log("Quiz over..")
    clearInterval(timerEl)
    var submitBtn = document.createElement ("button")
    var inputInitials = document.createElement("input") 
    QuizEnd.appendChild(inputInitials)
    submitBtn.textContent = "Please type your Initials!"
    QuizEnd.appendChild(submitBtn)
    submitBtn.addEventListener("click", function(){
//save initials to local storage?
    })
}

//To Do Still:
//When all questions are answered correctly, end quiz and count remaining time left/save to score
//When end quiz function is called, stop timer and use time remaining as score
//save score and initials to local storage