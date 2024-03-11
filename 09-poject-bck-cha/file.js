let bckColors = ["red", "blue", "yellow", "brown", "white", "black", "purple"]

const start = document.querySelector("#start");
const stop = document.querySelector("#stop");

const randomcolor = function (){
    const hex = "0123456789ABCDEF";
    let color = "#";
    for(let i = 0; i < 6; i++){
        color += hex[Math.floor(Math.random()*16)]
    }
    return color;
};


function starChangeBck (){
    start.addEventListener("click", function(){
        setInterval(function(){
            document.body.style.backgroundColor = randomcolor()
        },1000)
        stopChangeBck()

    })
};
starChangeBck()

function stopChangeBck (){
    stop.addEventListener("click", ()=>{
        document.body.style.backgroundColor = "white"
    });

};


//=======================================================================
let innsert = document.querySelector("#insert")
window.addEventListener("keydown", (e)=>{
    innsert.innerHTML = `<p>${e.key}, ${e.keyCode}, ${e.code}<p>`
})
console.log(23040)




// let intervalId;
// start.addEventListener("click",()=>{
//     intervalId= setInterval(function(){
//         document.body.style.backgroundColor = randomcolor()
//     },1000);
//     stop.addEventListener("click", ()=>{
//         clearInterval(intervalId)
//         document.body.style.backgroundColor = "white"
//         intervalId = null;
//     })
    
// });
// },{once : true});

