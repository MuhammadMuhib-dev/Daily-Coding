class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  getInfo() {
    return `${this.name} costs ${this.price}`;
  }

  applyDiscount(percent) {
    return this.price - (this.price * percent) / 100;
  }
}

class DigitalProduct extends Product {
  constructor(name, price, fileSize) {
    super(name, price);
    this.fileSize = fileSize;
  }

  getInfo() {
    return `${this.name} costs ${this.price} (${this.fileSize} MB)`;
  }
}

const book = new Product("Book", 500);
const ebook = new DigitalProduct("E-Book", 300, 5);

console.log(book.getInfo());
console.log(book.applyDiscount(10));
console.log(ebook.getInfo());
console.log(ebook.applyDiscount(20));