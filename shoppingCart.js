class ShoppingCart {
    constructor() {
        this.items = [];
    }

    addProduct(product) {
        this.items.push(product);
        this.render();
    }

    getTotal() {
        return this.items.reduce((total, item) => total + item.price, 0);
    }

    render() {
        const cartContainer = document.getElementById('shopping-cart');
        cartContainer.innerHTML = '';

        const section = document.createElement('section');
        section.innerHTML = `
        <h2>Shopping Cart</h2>
        <ul>
          ${this.items
                .map(
                    (item) => `
              <li>
                <span>${item.title}</span>
                <span>$${item.price.toFixed(2)}</span>
              </li>
            `
                )
                .join('')}
        </ul>
        <p>Total: $<span id="total">${this.getTotal().toFixed(2)}</span></p>
        <button>Order Now</button>
      `;
        cartContainer.appendChild(section);
    }
}

