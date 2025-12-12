let color = document.querySelector("input")
let display = document.querySelector(".display")
let body = document.querySelector("body")
let button = document.querySelector("button")

button.addEventListener("click", ()=>{
    // console.log(color);
    let colorChange = color.value
    body.style.backgroundColor = colorChange
})