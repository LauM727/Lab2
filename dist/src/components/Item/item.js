class Item extends HTMLElement{
    static get observedAttributes(){
        return ["name", "link", "image"];
    }

    constructor(){
        super();
        this.attachShadow({mode: "open"})
    }

    connectedCallback(){
        this.render();
    }

    render(){
        this.shadowRoot.innerHTML =  `
        <link rel="stylesheet" href="./src/components/Item/item.css">
        <div class="card">
        <img src="${this.image}">
        <url href="${this.link}">${this.name}</url>
        </div>
        `
    }
}

customElements.define("each-item", Item);
export default Item;