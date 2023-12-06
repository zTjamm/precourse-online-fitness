import {creEl, getData} from "../data.js";
import {renderExercises} from "./exercises.js";

export function renderDay(){
    const dayEl = creEl(`div`,``,`dayEl`,``)
    const data = getData();
    data.map(e=>{
        const dayTitle = creEl(`h3`, `${e.dayOfWeek}`,`dayTitle`,dayEl)
        const exercises = renderExercises(e.exercises)
        dayEl.appendChild(exercises)
    })

    return dayEl
}