const products = [
  { id: 1, name: "Laptop", price: 900 },
  { id: 2, name: "Mouse", price: 20 },
  { id: 3, name: "Keyboard", price: 60 },
  { id: 4, name: "Monitor", price: 250 },
];

const names = products.map((p) => p.name);
console.log(names);

const expensive = products.filter((p) => p.price > 50);
console.log(expensive);

const total = products.reduce((sum, p) => sum + p.price, 0);
console.log(total);