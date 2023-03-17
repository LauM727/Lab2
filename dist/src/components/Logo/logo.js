class Logo extends HTMLElement{

    constructor(){
        super();
        this.attachShadow({mode:'open'});
    }

    connectedCallback(){
        this.render();
    }

    render(){

        const lg = document.createElement('logo');
        this.shadowRoot.appendChild(lg)
    }



}


customElements.define('app-logo',Logo);

export default Logo;