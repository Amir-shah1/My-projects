let randomNumber = parseInt(Math.random() * 100 + 1);
const submit = document.querySelector("button");
const userinput = document.querySelector("#inputfield");
const guessSlot = document.querySelector(".guesses");
const remaning = document.querySelector(".lastResult");
const loworhi = document.querySelector(".loworhi");
const startOver = document.querySelector(".resultParas")


const p = document.createElement("button");

let preGuess = []
let numGues = 1
let playGame= true;

if(playGame){
    submit.addEventListener("click", function(e){
        e.preventDefault
        const guess = parseInt(userinput.value)
        validateGuess(guess)
    })
}

function validateGuess(guess){
    if(isNaN(guess)){
        alert('please enter a valid number.')
    } else if(guess < 1){
        alert('please enter number greater than 0.')
    } else if(guess > 100){
        alert('please enter number less than 100.')
    } else{
        preGuess.push(guess)
        if(numGues === 10){
            displayGuess(guess)
            displayMessage(`Game Over. Random number was ${randomNumber}`)
            endGame()
        } else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }
};

function checkGuess(guess){
    if(guess === randomNumber){
        displayMessage(`You guessed it right`)
        endGame()
    } else if(guess < randomNumber){
        displayMessage(`Numer is Too low`)
    } else if (guess > randomNumber){
        displayMessage(`Number is Too High`)
    }
};

function displayGuess(guess){
    userinput.value = ``
    guessSlot.innerHTML += `${guess},  `
    numGues++;
    remaning.innerHTML = `${11 - numGues}`

};

function displayMessage(message){
    loworhi.innerHTML = `<h3>${message}</h3>`

};

function endGame(){
    userinput.value = ""
    userinput.setAttribute("disabled", "")
    // p.classList.add("button")
    // p.innerHTML = `<h3 id= "newGame">Start new Game</h3>`
    // startOver.appendChild(p)
    playGame = false
    newGame()

}

function newGame(){
    let newbtn = document.querySelector("#reset")
    newbtn.addEventListener("click", ()=>{
        randomNumber = parseInt(Math.random() * 100 + 1);
        preGuess = []
        numGues = 1
        guessSlot.innerHTML = "";
        remaning.innerHTML = `${11 - numGues} `
        userinput.removeAttribute("disabled")
        // startOver.removeChild(p)
        playGame = true
    })

};






// const btn = document.querySelector("button");
// let guessipt= document.querySelector("#inputfield")

// guessipt.addEventListener("click", (e) =>{
//     // e.preventDefault()



//     const guessinput = parseInt(document.querySelector("#inputfield").value);
//     if (guessinput == 10){
//         btn.style.backgroundColor = "green"
//     } else if(guessinput !== 10){
//         btn.style.backgroundColor = "red"
//     } else{
//         btn.style.backgroundColor = "white"
//     }

    
// })

