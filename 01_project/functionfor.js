
let gray = document.querySelector("#gray");
let body = document.querySelector("body")
let box = document.querySelectorAll(".box")


box.forEach( (box) =>{
    box.addEventListener("click", () =>{
        body.style.backgroundColor = box.style.backgroundColor
    })
});

 