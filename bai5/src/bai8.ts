//Product Class

class Product
{
    id: number;
    name: string;
    price: number;
    discount: number|null;

    public constructor(
        id:number,
        name: string,
        price: number,
        discount: number|null
    ) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.discount = discount;
    }

    public getFinalPrice(): number {
        if(this.discount !== null) {
            return this.price - (this.price * this.discount) / 100;
        } else {
            return this.price;
        }
    }
}

class ProductManager
{
    products: Product[];

    public constructor() {
        this.products = [];
    }

    public addProduct(product: Product): void {
        this.products.push(product);
    }

    public getAllProducts(): Product[] {
        return this.products;
    }

    public applyDiscount(): void {
        for (let i = 0; i < this.products.length; i++) {
            const product: Product = this.products[i];
            if(product.discount !== null) {
                const discountedPrice = product.getFinalPrice();
                console.log(
                    `Product ${product.name} with ID ${product.id} has a discounted price of ${discountedPrice}`
                );
                
            }
        }
    }
}

const product1: Product = new Product(1, "Laptop", 1000, 10);
const product2: Product = new Product(2, "Phone", 500, null);

const productManager: ProductManager = new ProductManager();
productManager.addProduct(product1);
productManager.addProduct(product2);

console.log("All Products:", productManager.getAllProducts());

productManager.applyDiscount();