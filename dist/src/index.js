import data from "./data.js"
import * as components from "./components/index.js"

class AppContainer extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: "open"});
    }

    connectedCallback(){
        this.render();
    }

    render(){
        this.shadowRoot.innerHTML += `
        <my-boton></my-boton>
        `
        this.shadowRoot.innerHTML += `
        <my-nav></my-nav>
        `
            data.forEach((item) => {
            this.shadowRoot.innerHTML +=  `
            <div>
                <each-item name=${item.name} image=${item.image} link=${item.link}></each-item>
            </div>

            `
        }
        );

    }
}

customElements.define("app-container", AppContainer);