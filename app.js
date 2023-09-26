function makeBubble() {
    let bubbles = ""

for (let i=0; i<=151; i++) {
    bubbles += `<div class="bubble">${Math.floor(Math.random()*10)}</div>`
}
document.querySelector(".pbottom").innerHTML = bubbles
}

let timer = 0;
function setTimer() {
    timer = document.querySelector(".timer").textContent
    let timerInterval = setInterval(() => {
        if(timer > 0) {
           timer-- 
           document.querySelector(".timer").textContent = timer
        } else {
            clearInterval(timerInterval)
            document.querySelector(".pbottom").innerHTML = `<h1>GAME OVER!</h1>`
        }
        
    }, 1000);
}

let rn;
function getNewHit() {
    rn = Math.floor(Math.random()*10)
    document.querySelector(".hit").textContent = rn
}
let score = 0;
function checkScore() {
    score += 10;
    document.querySelector(".score").textContent = score
}

function updateScore() {
    let pbottom = document.querySelector(".pbottom")
    pbottom.addEventListener("click", function(bubbleNum) {
        let rn = document.querySelector(".hit").textContent
        if(bubbleNum.target.textContent === rn) {
            checkScore()
            makeBubble()
            getNewHit()
        }
    })
}

updateScore()
setTimer()
getNewHit()
makeBubble()


