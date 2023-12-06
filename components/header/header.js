import {creEl} from "../data.js";

export function renderHeader() {
    let headerEl = document.createElement('header')
    let headerSpanEl = creEl('span', 'IN-FITNESS', `headerSpanEl`, headerEl)
    let headerH1El = creEl('h1', 'Online Fitness', `headerH1El`, headerEl)
    let headerImg = creEl(`img`,``,`headerImg`, headerEl)
    headerImg.src = './img/headerimg.png';
    let headerPEl = creEl('p', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', `headerPEl`, headerEl)
    let headerBtnEl = creEl('button', 'Get Started', `headerBtnEl`, headerEl)

    return headerEl
}