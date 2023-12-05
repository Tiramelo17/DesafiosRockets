const screen1 =document.querySelector(".screen1")
const screen2 =document.querySelector(".screen2")
let randonNumber = Math.round(Math.random()*10)

let numTentativas = 0
console.log(randonNumber)

function handleClick(event){
    event.preventDefault()
    const inputNumber = document.querySelector("#inputNumber") 
    numTentativas++
    if(randonNumber === Number(inputNumber.value)){
        toogleScreen()
        
        document.querySelector(".screen2 h2").innerText
        =`Acertou em ${numTentativas} tentativas!`
    }
}

//Maneira diferente de trabalhar com um evento em tela. 
const button = document.querySelector(".screen2 button")

button.addEventListener('click', ()=>{
    randonNumber = Math.round(Math.random()*10)
    toogleScreen()
    document.querySelector("#inputNumber").value = ""
    numTentativas = 0
    console.log(randonNumber)
})

function toogleScreen(){
    screen1.classList.toggle("hide")
    screen2.classList.toggle("hide")
}