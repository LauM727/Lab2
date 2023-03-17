class CardI extends HTMLElement{

    //intagram

    constructor(){
        super();
        this.attachShadow({mode:'open'});
    }

    connectedCallback(){
        this.render();
    }

    render(){

        const ig = document.createElement('cardI');
        this.shadowRoot.appendChild(ig)
    }



}


customElements.define('app-ig',CardI);

export default CardI;