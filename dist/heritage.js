"use strict";
class BasicData {
    constructor(name, description, created_at, created_by) {
        this.name = name;
        this.description = description;
        this.created_at = created_at;
        this.created_by = created_by;
    }
    get fullYear() {
        return this.created_at.getFullYear();
    }
}
class Product extends BasicData {
    constructor(stock, sku, name, description, created_at, created_by) {
        super(name, description, created_at, created_by);
        this.stock = stock;
        this.sku = sku;
    }
}
class Category extends BasicData {
    constructor(name, description, created_at, created_by) {
        super(name, description, created_at, created_by);
        this.products = [];
    }
    addProduct(product) {
        this.products.push(product);
    }
}
let product1 = new Product(100, 1, 'iPhone', 'smartphone', new Date(), 1);
let category = new Category('Phones', '', new Date(), 1);
category.addProduct(product1);
console.log(product1);
console.log(category);
//# sourceMappingURL=heritage.js.map