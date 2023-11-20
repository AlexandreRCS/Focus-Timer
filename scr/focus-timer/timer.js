import  state from "./state.js";
import * as ele from "./elements.js"


export function countdown(){
    if(!state.isRunning){
        return
    }

    console.log('iniciou')
    setTimeout(()=> countdown(), 1000)
}


export function updateScreen(minutes, seconds){
    minutes = minutes ?? state.minutes
    seconds = seconds ?? state.seconds

    ele.minutes.textContent = String(minutes).padStart(2, "0")
    ele.seconds.textContent = String(seconds).padStart(2, "0")

}