//Product Class
var Product = /** @class */ (function () {
    function Product(id, name, price, discount) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.discount = discount;
    }
    Product.prototype.getFinalPrice = function () {
        if (this.discount !== null) {
            return this.price - (this.price * this.discount) / 100;
        }
        else {
            return this.price;
        }
    };
    return Product;
}());
var ProductManager = /** @class */ (function () {
    function ProductManager() {
        this.products = [];
    }
    ProductManager.prototype.addProduct = function (product) {
        this.products.push(product);
    };
    ProductManager.prototype.getAllProducts = function () {
        return this.products;
    };
    ProductManager.prototype.applyDiscount = function () {
        for (var i = 0; i < this.products.length; i++) {
            var product = this.products[i];
            if (product.discount !== null) {
                var discountedPrice = product.getFinalPrice();
                console.log("Product ".concat(product.name, " with ID ").concat(product.id, " has a discounted price of ").concat(discountedPrice));
            }
        }
    };
    return ProductManager;
}());
var product1 = new Product(1, "Laptop", 1000, 10);
var product2 = new Product(2, "Phone", 500, null);
var productManager = new ProductManager();
productManager.addProduct(product1);
productManager.addProduct(product2);
console.log("All Products:", productManager.getAllProducts());
productManager.applyDiscount();
