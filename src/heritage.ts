/**
 * Product
 * name
 * description
 * created_at
 * created_by
 * stock
 * sku
 *
 * Category
 * name
 * description
 * created_at
 * created_by
 */

class BasicData {
  constructor(
    public name: string,
    public description: string,
    public created_at: Date,
    public created_by: number
  ) {}

  get fullYear() {
    return this.created_at.getFullYear();
  }
}

class Product extends BasicData {
  constructor(
    public stock: number,
    public sku: number,
    name: string,
    description: string,
    created_at: Date,
    created_by: number
  ) {
    super(name, description, created_at, created_by);
  }
}

class Category extends BasicData {
  public products: Product[] = [];
  constructor(
    name: string,
    description: string,
    created_at: Date,
    created_by: number
  ) {
    super(name, description, created_at, created_by);
  }

  addProduct(product: Product) {
    this.products.push(product);
  }
}

let product1 = new Product(100, 1, 'iPhone', 'smartphone', new Date(), 1);

let category = new Category('Phones', '', new Date(), 1);

category.addProduct(product1);
console.log(product1);
console.log(category);
