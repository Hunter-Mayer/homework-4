var h1 = document.querySelector("h1")
var answersDiv = document.getElementById('answers')

console.log(h1, answersDiv)
// make a render function
    //make a for loop that runs the quiz 
    //increase the variable for the for loop of the quiz until the amount of questions is ran through

//Add a next button

//The beginning of the video on 9/21/2022 has all the helpful information Josh said to complete this project

// make the questions an object
    //put the questions and the answers in one object
var questions = [
    {
        text: "test",
        answer: "A",
        choices: ["A","B", "C"]
    },
    {
        text: "test",
        answer: "A",
        choices: ["A","B", "C"]  
    }
]

function renderQuiz() {
    h1.innerText = questions[0].text + " | " + questions[0].choices
}

renderQuiz()