class ProductItem {
    constructor(product, shoppingCart) {
        this.product = product;
        this.shoppingCart = shoppingCart;
    }

    addToCart() {
        this.shoppingCart.addProduct(this.product);
    }

    render() {
        const li = document.createElement('li');
        const img = document.createElement('img');
        img.src = this.product.image;
        img.alt = this.product.title;
        li.appendChild(img);

        const h3 = document.createElement('h3');
        h3.textContent = this.product.title;
        li.appendChild(h3);

        const price = document.createElement('p');
        price.textContent = `$${this.product.price.toFixed(2)}`;
        li.appendChild(price);

        const description = document.createElement('p');
        description.textContent = this.product.description;
        li.appendChild(description);

        const button = document.createElement('button');
        button.textContent = 'Add to Cart';
        button.addEventListener('click', () => this.addToCart());
        li.appendChild(button);

        return li;
    }
}


