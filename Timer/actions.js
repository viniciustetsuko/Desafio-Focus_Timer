import state from "./state.js";
import * as timer from "./timer.js";
import * as el from './elements.js'
import * as sounds from "./sounds.js";

export function toggleRunning() {
    state.isRunning = document.documentElement.classList.toggle('running')

    timer.countDown()
    sounds.buttonPressAudio.play()
}

export function reset() {
    state.isRunning = false
    document.documentElement.classList.remove('running')
    timer.updateDisplay()
    sounds.buttonPressAudio.play()
}

export function plusBtn() {
    timer.updateDisplay(Number(el.minutes.textContent) + 1);
}

export function minusBtn() {
    const minute = Number(el.minutes.textContent);

    if(minute > 0)
    timer.updateDisplay(minute - 1);
}

export function set() {
    el.minutes.setAttribute('contenteditable', true)
    el.minutes.focus()

}

export function treeMusic() {
    state.isMute = document.documentElement.classList.toggle('music-on')
    if (state.isMute) {
    sounds.bgAudioTree.play()
    return	
}


    sounds.bgAudioTree.pause()

}

export function coffshopMusic() {
    state.isMute = document.documentElement.classList.toggle('music-on')
    if (state.isMute) {
        sounds.bgAudiCoffee.play()
        return
    }

    sounds.bgAudiCoffee.pause() 
}

export function fireplaceMusic() {
    state.isMute = document.documentElement.classList.toggle('music-on')
    if (state.isMute) {
    sounds.bgAudiFire.play()
    return	
}

sounds.bgAudiFire.pause()

}

export function rainMusic() {
     state.isMute = document.documentElement.classList.toggle('music-on')
    if (state.isMute) {
    sounds.bgAudioRain.play()
    return	
}

sounds.bgAudioRain.pause()

}
