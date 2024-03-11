/*===================== Selecting Html Elements ============================*/

let result = document.querySelector("#result");
let one = document.querySelector("#one");
let two = document.querySelector("#two");
let three = document.querySelector("#three");
let positive = document.querySelector("#positive");
let four = document.querySelector("#four");
let five = document.querySelector("#five");
let six = document.querySelector("#six");
let negative = document.querySelector("#negative");
let seven = document.querySelector("#seven");
let eight = document.querySelector("#eight");
let nine = document.querySelector("#nine");
let multiply = document.querySelector("#multiply");
let empty = document.querySelector("#empty");
let zero = document.querySelector("#zero");
let equal = document.querySelector("#equal");
let divide = document.querySelector("#divide");
let outside = document.querySelector("#outside")
let Ac = document.querySelector("#empty")

/*=============================================================================*/

function listenforEvents(two) {
    two.addEventListener("click", () => {
        result.innerHTML = result.innerHTML + two.innerHTML
    }
)};

listenforEvents(one);
listenforEvents(two);
listenforEvents(three);
listenforEvents(positive);
listenforEvents(four);
listenforEvents(five);
listenforEvents(six)
listenforEvents(negative);
listenforEvents(seven);
listenforEvents(eight);
listenforEvents(nine);
listenforEvents(multiply);
listenforEvents(zero);
listenforEvents(divide);

equal.addEventListener("click",()=>{
    conditon = true
    let StringResult = String("")
    for(i of result.innerHTML){
        StringResult = StringResult.concat(i)
    };
    if(result.innerHTML)
        result.innerHTML = eval(StringResult)
    else{
    }
});

Ac.addEventListener("click", ()=>{
    result.innerHTML = ""
});


