// import "./components/index.js"
class AppContainer extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode:'open'});
    }

    connectedCallback(){
        this.shadowRoot.innerHTML =`
        <link rel="stylesheet" href="./styles.css">
        <section>
        <ul class="icons-right">

        <a class="gmail" href="https://accounts.google.com/v3/signin/identifier?dsh=S-1676835161%3A1679056178144165&continue=https%3A%2F%2Fwww.google.com%2Fsearch%3Fclient%3Dopera-gx%26q%3Dgmail%26sourceid%3Dopera%26ie%3DUTF-8%26oe%3DUTF-8&ec=GAZAAQ&hl=es&ifkv=AWnogHdk5tNWdQ6KEcxCxm-ZreGMJxoD10D2fdWGP_sSnB-2e6C6pqDZpQ8CH2F7lxeqxPJ9j2Q7&passive=true&flowName=GlifWebSignIn&flowEntry=ServiceLogin">Gmail</a>
        <b class="img" href="https://images.google.com">Images</b>

        </ul>
        </section>

        <body>
        <li>
        <c class="yt">Youtube</c>
        <d class="tw">Twitter</d>
        <e class="fk">Facebook</e>
        </li>
        </body>

        `;
    }

    // render(){
    //     const section = document.createElement('section');
    //     const title = document.createElement('h3')
    //     const btn = document.createElement('app-button')

    //     title.textContent ='Gmail'

    //     section.appendChild(title)
    //     section.appendChild(btn)

    //     this.shadowRoot.appendChild(section)
    // }
}
customElements.define('app-container',AppContainer)

