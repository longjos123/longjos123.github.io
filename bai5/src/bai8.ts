// Product Class
class Product {
    id: number;
    name: string;
    price: number;
    discount: number | null;
  
    constructor(id: number, name: string, price: number, discount: number | null) {
      this.id = id;
      this.name = name;
      this.price = price;
      this.discount = discount;
    }
  
    // Method to get final price after applying discount
    getFinalPrice(): number {
      if (this.discount !== null) {
        return this.price - (this.price * this.discount) / 100;
      } else {
        return this.price;
      }
    }
  }
  
  // ProductManager Class
  class ProductManager {
    products: Product[];
  
    constructor() {
      this.products = [];
    }
  
    // Method to add a new product to the list
    addProduct(product: Product): void {
      this.products.push(product);
    }
  
    // Method to get all products
    getAllProducts(): Product[] {
      return this.products;
    }
  
    // Method to apply discount to all products in the list
    applyDiscount(): void {
      for (let i = 0; i < this.products.length; i++) {
        const product = this.products[i];
        if (product.discount !== null) {
          const discountedPrice = product.getFinalPrice();
          console.log(
            `Product ${product.name} with ID ${product.id} has a discounted price of ${discountedPrice}`
          );
        }
      }
    }
  }
  
  // Usage
  const product1 = new Product(1, "Laptop", 1000, 10);
  const product2 = new Product(2, "Phone", 500, null);
  
  const productManager = new ProductManager();
  productManager.addProduct(product1);
  productManager.addProduct(product2);
  
  console.log("All Products:", productManager.getAllProducts());
  
  productManager.applyDiscount();
  