class Nav extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode: "open"})
    }

    connectedCallback(){
        this.render();
    }

    render(){
        this.shadowRoot.innerHTML =  `
        <link rel="stylesheet" href="./src/components/nav/nav.css">
        <div class="card">
        <img src="https://logodownload.org/wp-content/uploads/2014/09/google-logo-1.png">
        <input type="" placeholder="Search ....">
        </div>
        `
    }
}

customElements.define("my-nav", Nav);
export default Nav;