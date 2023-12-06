import {renderHeader} from "./header/header.js";
import {renderContent} from "./content/content.js";

let root = document.querySelector('#root');

function renderApp(){
    root.innerHTML =``
    const header = renderHeader()
    root.appendChild(header)

    const content =renderContent()
    root.appendChild(content)
}
renderApp()