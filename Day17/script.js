const ques=[
    {
        question:"What does the DOM stand for in JavaScript?",
        answers:[
            {text:"Document Object Model",correct:true},
            {text:"Data Object Model",correct:false},
            {text:"Document Order Model",correct:false},
            {text:"Dynamic Operation Model",correct:false}
        ]
    },
    {
        question:"Which keyword is used to declare a variable in JavaScript?",
        answers:[
            {text:"let",correct:false},
            {text:"var",correct:false},
            {text:"const",correct:false},
            {text:"All of these",correct:true}
        ]
    },
    {
        question:"What is the purpose of the JSON.stringify() method in JavaScript?",
        answers:[
            {text:" Parsing JSON",correct:false},
            {text:"Converting a JavaScript object to a JSON string",correct:true},
            {text:"Converting a JSON string to a JavaScript object",correct:false},
            {text:"Both B and C",correct:false}
        ]
    },
    {
        question:'What will be the output of the following code snippet?(console.log(2 + "2");',
        answers:[
            {text:"22",correct:false},
            {text:'"22"',correct:true},
            {text:"4",correct:false},
            {text:"TypeError",correct:false}
        ]
    },
    {
        question:"In JavaScript, what is the purpose of the addEventListener method?",
        answers:[
            {text:"Attaching an event handler function to an HTML element",correct:true},
            {text:"Adding a new HTML element to the page",correct:false},
            {text:" Modifying the style of an HTML element",correct:false},
            {text:"Creating a copy of an HTML element",correct:false}
        ]
    }

]

const quesElem=document.getElementById("question")
const ans_btn=document.getElementById("answer-btn")
const next_btn=document.getElementById("next")

let score=0
let ques_index=0

function Start() {
    ques_index=0
    score=0
    next_btn.innerHTML="Next"
    showQues()
}

function showQues() {
    reset()
    let current_ques=ques[ques_index]
    let ques_num=ques_index+1
    quesElem.innerHTML=ques_num + "." + current_ques.question

    current_ques.answers.forEach(answers=>{
        const btn=document.createElement('button')
        btn.innerHTML=answers.text
        btn.classList.add('btn')
        ans_btn.appendChild(btn)
        
        if (answers.correct) {
            btn.dataset.correct=answers.correct
        }
        btn.addEventListener('click',select)
    })
}

function select(e) {
    const select_btn=e.target
    const isCorrect = select_btn.dataset.correct === "true"

    if (isCorrect) {
        select_btn.classList.add('correct')
        score++
    }
    
    else{
        select_btn.classList.add('incorrect')
    }

    Array.from(ans_btn.children).forEach(bttn=>{
        if (bttn.dataset.correct === "true") {
            bttn.classList.add('correct')
        }
        bttn.disabled=true
    })
    next_btn.style.display='block'
}

function showScore() {
    reset()
    quesElem.innerHTML=`You Scored ${score} out of ${ques.length}!`
    next_btn.innerHTML='Play Again'
    next_btn.style.display='block'
}

function handleNext() {
    ques_index++
    if (ques_index<ques.length) {
        showQues()
    }

    else{
        showScore()
    }
}

next_btn.addEventListener('click',()=>{
    if (ques_index<ques.length) {
        handleNext()
    }

    else{
        Start()
    }
})


function reset() {
    next_btn.style.display='none'
    while(ans_btn.firstElementChild){
        ans_btn.removeChild(ans_btn.firstElementChild)
    }
}

Start()