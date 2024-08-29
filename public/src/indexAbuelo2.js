import * as components from './components/indexPadre.js';
import { dataCards } from './data/charactersData.js';
class AppContainer extends HTMLElement { // Let the HTML cont
    constructor() {
        super(); // always call super() first in the constructor. Allow you to access the parent class's methods and properties.
        this.attachShadow({ mode: 'open' });
    };
    connectedCallback() {
        this.render();
    };
    render(){
        //this.shadowRoot.innerHTML = ``;

        dataCards.forEach((element) => {
            this.shadowRoot.innerHTML += `
            <character-card
             name="${element.name}"
             gender="${element.gender}"
             image="${element.image}">
            </character-card>
            <counter-button></counter-button>
            <message-button></message-button>
            `;
        })

        this.shadowRoot.innerHTML += `<counter-button></counter-button>`;
    }
    };
customElements.define('app-container', AppContainer);