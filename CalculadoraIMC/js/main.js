
import {Modal} from './modal.js'
import { alertErrorPopUp } from './alertError.js'

const button = document.querySelector(".button-form")
let buttonClose = document.querySelector(".close")
const peso = document.querySelector("#peso")
const altura = document.querySelector("#altura")



function calcIMC(peso,altura){
    
       const pesoAux = Number(peso)
       const AlturaAux = Number(altura)
       
        if(isNaN(pesoAux)){
            throw Error('Peso') 
        }

        if(isNaN(AlturaAux)){
            throw Error('Altura') 
        }

        return pesoAux/Math.pow(AlturaAux/100,2)
    
}

function getInfPeso(){
    return peso.value;
}

function getInfAltura(){
    return altura.value;
}

function updateMensagemImc(imc){
    const h2Title = document.querySelector('h2')
    h2Title.innerText= ` Seu IMC é de ${imc.toFixed(2)}`
}

button.addEventListener('click',(event)=>{
    event.preventDefault()
    // alertError.classList.remove('open')
    // alertErrorPopUp.close()
    try {
        const imc = calcIMC(getInfPeso(),getInfAltura())
        
            updateMensagemImc(imc);
        
            //modal.classList.add('open')
            Modal.open()


            buttonClose = document.querySelector(".close")   
        
    
    } catch (error) {
        mensagemError(error.message)
        return
    }
})


buttonClose.addEventListener('click',closePopUp)


function mensagemError(atributoError){
    if(atributoError === 'Peso'){
        peso.classList.add('erro')
    }
    if(atributoError === 'Altura'){
        altura.classList.add('erro')
    }

    // alertError.classList.add('open')
    alertErrorPopUp.open()

}


window.addEventListener('keydown', event => {
    if(event.key === 'Escape'){
        closePopUp()
    }
})


function closePopUp(){
    peso.classList.remove('erro')
    altura.classList.remove('erro')
    
    // modal.classList.remove('open')
    Modal.close()
}


peso.addEventListener('input',()=>{
    alertErrorPopUp.close()
})
altura.addEventListener('input',()=>{
    alertErrorPopUp.close()
    
})