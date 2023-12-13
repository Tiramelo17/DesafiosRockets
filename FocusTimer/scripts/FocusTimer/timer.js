import state from "./state.js"
import * as elements from './elements.js'
import * as actions from './actions.js'
import {kitchenTimer} from './sounds.js'


export function contDown(){
    
    clearTimeout(state.countDownID)
    
    if(!state.isRunning){
        return
    }

    let minutes = Number(elements.minutes.textContent)
    let seconds = Number(elements.seconds.textContent)

    seconds--

    if(seconds < 0){
        seconds = 59
        minutes--
    } 
    if(minutes < 0){
        actions['reset']()
        kitchenTimer.play()
        return
    }

    updateDisplay(minutes,seconds)

    state.countDownID = setTimeout(()=>{
        contDown()
    },1000)

}

export function updateDisplay(minutes,seconds){
    minutes = minutes ?? state.minutes /* nullish coaleshin operator */
    seconds = seconds ?? state.seconds /* nullish coaleshin operator */

    elements.minutes.textContent = String(minutes).padStart(2,"0")
    elements.seconds.textContent = String(seconds).padStart(2,"0")

}