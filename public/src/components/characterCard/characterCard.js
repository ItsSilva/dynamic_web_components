class CharacterCard extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: 'open'});
    }
    static get observedAttributes() {
        return ['name', 'gender', 'image'];
    }
    attributeChangedCallback(propName, oldValue, newValue) {
        if(oldValue !== newValue) {
            this[propName] = newValue;
            this.render();
        }
    }
    connectedCallback(){
        this.render();
    }
    render(){
        this.shadowRoot.innerHTML = `
        <h1>${this.name}</h1>
        <p>${this.gender}</p>
        <img src="${this.image}" alt="${this.name}">
        `;
    }
}
customElements.define('character-card', CharacterCard);
export default CharacterCard; // Export the class to be used in other files