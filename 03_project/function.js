let time = document.querySelector(".time");

setInterval( () => {
    let newtime = new Date ();
    newtime = newtime.toLocaleTimeString();
    time.innerHTML = newtime

}, 1000)
