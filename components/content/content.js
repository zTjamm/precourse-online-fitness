import {renderContetntTitle} from "./contentTitle.js";
import {renderDay} from "./day.js";

export function renderContent(){
    const contentWrapper = document.createElement(`div`)
    const contentTitle = renderContetntTitle()
    contentWrapper.appendChild(contentTitle)

    const day = renderDay()
    contentWrapper.appendChild(day)

    return contentWrapper
}