import { controls } from "./elements.js";
import * as actions from "./actions.js"
import * as ele from "./elements.js"

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
}