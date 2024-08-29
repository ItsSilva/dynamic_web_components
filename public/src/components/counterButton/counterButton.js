class CounterButton extends HTMLElement {
    // static get observedAttributes() {}

    constructor(){
        super();
        this.attachShadow({mode: 'open'});
        this.count = 0;
    }

    // attributeChangedCallback(propName, oldValue, newValue){}
    // Connected to the DOM.
    connectedCallback(){
        this.render();
    }

    incrementCount(){
        this.count++;
        this.render();
    }

    render(){
        this.shadowRoot.innerHTML = `
        <button>Counter: ${this.count}</button>
        `;
        this.shadowRoot.querySelector('button').addEventListener('click',() => this.incrementCount());
    }
}
customElements.define('counter-button', CounterButton);
export default CounterButton;