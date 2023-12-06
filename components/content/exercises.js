import {creEl} from "../data.js";

export function renderExercises(data){
    const exWrap = document.createElement(`div`)
    data.map(el=>{
        const exTitle = creEl(`h4`, `${el.ex.title}`,`exTitle`,exWrap)
        const exTextUlEl= creEl(`ul`,``,`exTextUlEl`,exWrap)
        const exImgUlEl = creEl(`ul`,``,`exImgUlEl`,exWrap)

        el.ex.text.map(t=>{
            const exTextLiEl = creEl(`li`,`${t.content}`,`exTextLiEl`, exTextUlEl)
        })
        el.ex.photo.map(img=>{
            const exImgLiEl = creEl(`img`,``,`exImgLiEl`, exImgUlEl)
            exImgLiEl.src =`${img.src}`
        })
    })

    return exWrap
}