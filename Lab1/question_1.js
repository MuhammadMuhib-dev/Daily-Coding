const studentId = 101;
const university = "NUML";
let score = 50;
let attempts = 1;

score = 75;
attempts += 1;
console.log(score, attempts);

const student = { name: "Ali", age: 21, course: "Web Engineering" };
const { name, age, course } = student;
console.log(name, age, course);

const friends = ["Ali", "Sara", "Ahmed"];
const [first, second] = friends;
console.log(first, second);

console.log(`Hello, my name is ${name} and I am ${age} years old.`);
console.log(`Next year ${name} will be ${age + 1}.`);
console.log(`ID: ${studentId}
University: ${university}
Course: ${course}
Score: ${score}`);