import state from "./state.js";
import { controls } from "./elements.js";
import * as actions from "./actions.js"
import * as ele from "./elements.js"
import { updateScreen } from "./timer.js";

export function registerControls(){
    controls.addEventListener('click', (event) => {
        const action = event.target.dataset.action
        if(actions[action] === ! "function"){
            return
        }

        actions[action]()
    })
}


export function setMinutes(){
    ele.minutes.addEventListener('focus', () =>{
        ele.minutes.textContent = ""
    })

    ele.minutes.onkeypress = (event) => /\d/.test(event.key)

    ele.minutes.addEventListener('blur', (event) =>{
        let timer = ele.minutes.textContent
        timer = timer > 60 ? 60 : timer

        state.minutes = timer
        state.seconds = 0

        updateScreen()

        ele.minutes.removeAttribute('contenteditable')

    })
}