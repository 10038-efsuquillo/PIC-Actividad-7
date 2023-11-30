class CounterComponent extends HTMLElement {
    constructor() {
      super();
      this._counter = 0;
      this.incrementButton = null;
      this.decrementButton = null;
    }
  
    connectedCallback() {
      this.render();
      this.attachListeners();
    }
  
    render() {
      this.innerHTML = `
        <div class="card text-center">
          <div class="card-header">
            Contador
          </div>
          <div class="card-body">
            <h5 class="card-title">Cuenta: ${this._counter}</h5>
            <button id="increment" class="btn btn-primary mr-2">+</button>
            <button id="decrement" class="btn btn-secondary">-</button>
          </div>
          <div class="card-footer text-muted">
            Componente de Contador
          </div>
        </div>
      `;
      this.incrementButton = this.querySelector('#increment');
      this.decrementButton = this.querySelector('#decrement');
    }
  
    attachListeners() {
      this.incrementButton.addEventListener('click', this.increment.bind(this));
      this.decrementButton.addEventListener('click', this.decrement.bind(this));
    }

    increment() {
      this._counter++;
      this.update();
    }

    decrement() {
      this._counter--;
      this.update();
    }

    update() {
      this.incrementButton.removeEventListener('click', this.increment.bind(this));
      this.decrementButton.removeEventListener('click', this.decrement.bind(this));
      this.render();
      this.attachListeners();
    }
  }
  
  customElements.define('counter-component', CounterComponent);