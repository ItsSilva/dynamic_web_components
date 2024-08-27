import * as components from './components/indexPadre.js';
import { dataCards } from './data/charactersData.js';
class AppContainer extends HTMLElement { // Let the HTML cont
    cards = [];
    
    constructor() {
        super(); // always call super() first in the constructor. Allow you to access the parent class's methods and properties.
        this.attachShadow({ mode: 'open' });

        dataCards.forEach(element => {
            const card = this.ownerDocument.createElement('character-card'); // In this document, create a new element called character-card

            if(element.name){
                card.setAttribute('name', element.name);
            }

            card.setAttribute('name', element.name);
            card.setAttribute('gender', element.gender);
            card.setAttribute('image', element.image);

            this.cards.push(card); // Add the card to the cards array
        }
        )
    };
    connectedCallback() {
        this.render();
    };
    render(){
        this.shadowRoot.innerHTML = `
        `;
        this.cards.forEach((CharacterCard) => {
            this.shadowRoot.appendChild(CharacterCard); // Add (save) the card to the shadowRoot
        });
    };
};
customElements.define('app-container', AppContainer);