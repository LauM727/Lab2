import data from "./data.js"
import * as components from "./components/index.js";

class AppContainer extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: "open"})
    }

    connectedCallback(){
        this.render();
    }

    render(){
        data.forEach((item) => {
            this.shadowRoot.innerHTML +=  `
            <each-item named=${item.named} image=${item.image} link=${item.link}></each-item>
            `
        }
        )
    }
}

customElements.define("app-container", AppContainer);