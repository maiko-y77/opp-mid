class Shop {
    constructor() {
        this.productList = new ProductList();
        this.shoppingCart = new ShoppingCart();
    }

    render() {
        this.productList.fetchProducts();
        this.shoppingCart.render();
    }
}

