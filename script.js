var h1 = document.querySelector("h1")
var choicesEl = document.getElementById('choices')
var nextBtn = document.querySelector('button')
var index = 0

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
        question: "Which function is used to serialize an object into a JSON string in JavaScript?",
        answer: "stringify()",
        choices: ["parse()","convert()", "stringify()", "None of the Above"]
    }
]

function renderQuiz() {
    h1.innerText = questionsList[index].question + " | "  + questionsList[index].answer //Sets up Question
    //temporarily showing answer with questionsList[index].answer

   
    answersEl.innerHTML = "" //clear out answerEL

    for (var i = 0; i < questionsList[index].choices.length; i++) //for loop to create the choices for each question of the quiz 
        var li = document.createElement('li') //create list item
        var choice = questionsList[index].choices[i] //give text content
        li.innerText = choice
        choicesEl.appendChild(li)
}

function showAnswer(){
    
}

nextBtn.addEventListener('click', function(){
 index++
 renderQuiz()
})