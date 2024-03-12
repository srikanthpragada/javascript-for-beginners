class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    static taxRate = 12.50;   // static field
    getSellingPrice() {
        return this.price + this.price * Product.taxRate / 100;
    }
    // static method
    static setTaxRate(newRate) {
        Product.taxRate = newRate 
    }
}

let p = new Product("Bose Headphones", 30000)
console.log(p.getSellingPrice())
console.log(Product.taxRate)
Product.setTaxRate(15)
console.log(p.getSellingPrice())
console.log(Product)
