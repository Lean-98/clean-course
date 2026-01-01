type Size = '' | 'S' | 'M' | 'L' | 'XL';

class Product {
  constructor(
    public name: string = '',
    public price: number = 0,
    public size: Size = '',
  ) {}

  isProductValid(): boolean {
    for (const key in this) {
      switch (typeof this[key]) {
        case 'string':
          if (this[key].length <= 0) throw new Error(`The ${key} is empty`);
          break;
        case 'number':
          if (this[key] <= 0) throw new Error(`The ${key} is zero or negative`);
          break;

        default:
          throw new Error(`${typeof this[key]} is not supported`);
      }
    }
    return true;
  }

  toString() {
    // No DRY - Don't Repeat Yourself
    // if (this.name.length <= 0) throw new Error('The name is required');
    // if (this.price <= 0) throw new Error('The price is zero or negative');
    // if (this.size.length <= 0) throw new Error('The Size is required');
    if (!this.isProductValid) return;

    return `${this.name} (${this.size}) - $${this.price}`;
  }
}

(() => {
  const bluePants = new Product('Blue Pants', 10, 'S');
  console.log(bluePants.toString());
})();
