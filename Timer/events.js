import * as actions from "./actions.js";
import * as el from './elements.js'
import state from "./state.js";
import { updateDisplay } from "./timer.js";
import * as sounds from "./sounds.js";


export function registerControls() {
    el.controls.addEventListener('click', (e) => {
        const action = e.target.dataset.action
        if (typeof actions[action] != "function") {
            return
        }

        actions[action]()
        
    }) 
    
}

export function registerCintrolsMusic() {
    el.controlsMusic.addEventListener('click', (e) => {
        const action = e.target.dataset.action
        if (typeof actions[action] != "function") {
            return
        }

        actions[action]()
    })
    
}


export function setMinutes() {
    el.minutes.addEventListener('focus', () => {
        el.minutes.textContent = ""
    })

    el.minutes.onkeypress = (e) =>/\d/.test(e.key)
    

    el.minutes.addEventListener('blur', (e) => {
        let time = e.currentTarget.textContent
        time = time > 60? 60 : time

        state.minutes = time
        state.seconds = 0

        updateDisplay()
        el.minutes.removeAttribute('contenteditable')
    })
}

