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
    get fullDesc() {
        return this.name + '  ' + this.description;
    }
}
class Product extends BasicData {
    constructor(stock, sku, name, description, created_at, created_by) {
        super(name, description, created_at, created_by);
        this.stock = stock;
        this.sku = sku;
    }
    get fullDesc() {
        return 'Product: ' + super.fullDesc;
    }
    save() {
        console.log('saving product');
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
    get fullDesc() {
        return 'Category: ' + super.fullDesc;
    }
    save() {
        console.log('saving category');
    }
}
let product1 = new Product(100, 1, 'iPhone', 'smartphone', new Date(), 1);
let category = new Category('Phones', '', new Date(), 1);
category.addProduct(product1);
console.log(product1.fullDesc);
console.log(category.fullDesc);
//# sourceMappingURL=heritage.js.map