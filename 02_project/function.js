// let height = document.querySelector("#height");
// let weight = document.querySelector("#weight");
// let btn = document.querySelector("#btn");
const form = document.querySelector("form");



form.addEventListener("submit", function(e) {
    e.preventDefault()

    const height = parseInt(document.querySelector("#height").value)
    const weight = parseInt(document.querySelector("#weight").value)
    const result = document.querySelector("#result")
    const underweight = document.querySelector("#underweight");
    const normalweight = document.querySelector("#normalWeight");
    const overweight = document.querySelector("#overweight");



    if(height === "" || height < 0 || isNaN(height)) {
        result.innerHTML = `Please give a valid height`;

    } else if(weight === "" || weight < 0 || isNaN(weight)) {
        result.innerHTML = `Please give a valid weight`;

    } else{
        const final = (weight / ((height * height) / 10000)).toFixed(2);
        result.innerHTML = `<span> Your Body to Mass ratio is : ${final}</span>`
        if(final < 18.6){
            underweight.style.textDecoration = "underline"

        } else if(final > 18.6 && final < 24.9) {
            normalweight.style.textDecoration = "underline"

        } else{
            overweight.style.textDecoration = "underline"
        }
    }



});


