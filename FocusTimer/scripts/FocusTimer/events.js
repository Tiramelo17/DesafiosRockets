import state from "./state.js";
import { controls } from "./elements.js"
import * as actions from './actions.js'
import * as elements from './elements.js'
import { updateDisplay } from "./timer.js"


export function register(){
    controls.addEventListener('click', (event)=> {
        const action = event.target.dataset.action
        if(typeof actions[action] != 'function'){
            return
        }
        
        actions[action]()
    })

}

export function setMinutes(){
    elements.minutes.addEventListener('focus',()=>{
        elements.minutes.textContent = ''
    })

    //Expressão regular apenas para pegar numeros, realizando o teste com a tecla que esta disparando evet no momento
    elements.minutes.onkeypress = (event) => /\d/.test(event.key)

    elements.minutes.addEventListener('blur',()=>{
        let time = event.currentTarget.textContent
        time = time > 60 ? 60 : time

        state.minutes = time
        state.seconds = 0
        updateDisplay()
        elements.minutes.setAttribute('contenteditable',false)

    })
}