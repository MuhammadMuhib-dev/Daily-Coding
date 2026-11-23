function greet(name, role) {
  return `Hello ${name}, you are a ${role}`;
}
console.log(greet("Ali", "student"));

const greetArrow = (name = "Guest", role = "visitor") =>
  `Hello ${name}, you are a ${role}`;

console.log(greetArrow("Ahmed", "developer"));
console.log(greetArrow("Zain"));
console.log(greetArrow());