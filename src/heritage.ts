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

abstract class BasicData {
  constructor(
    public name: string,
    public description: string,
    protected created_at: Date, // las propiedades protected podran ser accedidas desde la misma clase y las heredadas. Si lo ponemos como private no
    protected created_by: number
  ) {}

  get fullYear() {
    return this.created_at.getFullYear();
  }

  get fullDesc() {
    return this.name + '  ' + this.description;
  }

  abstract save(): void; // con una clase abstracta podemos poner un método que haga necesaria su ejecución dentro de las heredadas
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

  override get fullDesc(): string {
    return 'Product: ' + super.fullDesc;
  }

  save() {
    console.log('saving product');
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

  override get fullDesc(): string {
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
//console.log(category);
