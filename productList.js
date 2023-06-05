class ProductList {
    constructor() {
        this.products = [];
        this.shoppingCart = new ShoppingCart();
    }

    fetchProducts() {
        fetch('https://fakestoreapi.com/products')
            .then((response) => response.json())
            .then((data) => {
                this.products = data.map(
                    (product) =>
                        new Product(
                            product.id,
                            product.title,
                            product.price,
                            product.description,
                            product.image
                        )
                );
                this.render();
            })
            .catch((error) => console.log(error));
    }

    render() {
        const ul = document.createElement('ul');
        this.products.forEach((product) => {
            const productItem = new ProductItem(product, this.shoppingCart); // Pass the shoppingCart instance
            ul.appendChild(productItem.render());
        });
        document.getElementById('product-list').appendChild(ul);
    }
}

