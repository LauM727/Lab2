class Boton extends HTMLElement{

    constructor(){
        super();
        this.attachShadow({mode: "open"})
    }

    connectedCallback(){
        this.render();
    }

    render(){
        this.shadowRoot.innerHTML =  `
        <link rel="stylesheet" href="./src/components/boton/boton.css">
        <div class="card">
        <p>Gmail</p>
        <p>Imagenes</p>
        <img src="https://cdn-icons-png.flaticon.com/512/61/61140.png">
        </div>
        `
    }
}

customElements.define("my-boton", Boton);
export default Boton;