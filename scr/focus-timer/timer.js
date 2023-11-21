import  state from "./state.js";
import * as ele from "./elements.js"
import { reset } from "./actions.js";


export function countdown(){
    if(!state.isRunning){
        return
    }

    let minutes = Number(ele.minutes.textContent)
    let seconds = Number(ele.seconds.textContent)

    if(seconds > 59){
        seconds = 59
    }

    seconds--
    if(seconds < 0){
        seconds = 59
        minutes--
    }

    if(minutes < 0 ){
        reset()
        return
    }
    updateScreen(minutes, seconds)
    setTimeout(()=> countdown(), 1000)
}


export function updateScreen(minutes, seconds){
    minutes = minutes ?? state.minutes
    seconds = seconds ?? state.seconds

    ele.minutes.textContent = String(minutes).padStart(2, "0")
    ele.seconds.textContent = String(seconds).padStart(2, "0")

}