let computerNO = Math.floor(Math.random() * 3 + 1);
console.log(computerNO)
let rock = document.querySelector(".rock");
let paper = document.querySelector(".paper");
let secesor = document.querySelector(".sicesor");
let button = document.querySelector("#button");

button.addEventListener("click", () => {
    if (computerNO === 1) {
        rock.innerHTML = computerNO;
    } else if (computerNO === 2) {
        paper.innerHTML = computerNO;
    } else if (computerNO === 3) {
        secesor.innerHTML = 3;
    }
    computerNO = Math.floor(Math.random() * 3 + 1);
    if(rock.innerHTML == 1 && paper.innerHTML == 2 && secesor.innerHTML == 3){
        rock.innerHTML = "Rock"
        paper.innerHTML = "Paper"
        secesor.innerHTML = "Secesor"
    
    }
    

});




