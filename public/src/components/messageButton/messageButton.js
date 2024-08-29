class MessageButton extends HTMLElement {
    // static get observedAttributes() {}

    constructor(){
        super();
        this.attachShadow({mode: 'open'});
        this.isSelected = false;
    }

    // attributeChangedCallback(propName, oldValue, newValue){}
    // Connected to the DOM.
    connectedCallback(){
        this.render();
    }

    changeMessage(){
        this.isSelected = !this.isSelected;
        this.render();
    }

    render(){

        //if(this.isSelected === true){
        // message = 'Fav';
        //} else {
        //    message = 'Add to fav';
        //}

        this.shadowRoot.innerHTML = `
        <button>Counter: ${this.isSelected ? 'Fav': 'Add to fav'}</button>
        `;
        this.shadowRoot.querySelector('button').addEventListener('click',() => this.changeMessage());
    }
}
customElements.define('message-button', MessageButton);
export default MessageButton;