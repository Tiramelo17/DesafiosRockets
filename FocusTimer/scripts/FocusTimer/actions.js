import state from "./state.js";
import * as timer from './timer.js'
import * as elements from './elements.js'
import * as sounds from './sounds.js'

export function toggleRunning(){
    state.isRunning = document.documentElement.classList.toggle('running')
    timer.contDown()
    sounds.buttonPressAudio.play()
    !state.isMute ? sounds.bgAudio.play() : sounds.bgAudio.pause()

}


export function set(){
    elements.minutes.setAttribute('contenteditable',true)
    elements.minutes.focus()
    sounds.buttonPressAudio.play()

}


export function reset(){
    state.isRunning = false
    sounds.buttonPressAudio.play()
    sounds.bgAudio.pause()
    document.documentElement.classList.toggle('running')
    timer.updateDisplay(30,0)

}

export function toggleMusic(){
    state.isMute = !document.documentElement.classList.toggle('music-on')
    
    !state.isMute ? sounds.bgAudio.play() : sounds.bgAudio.pause()

}