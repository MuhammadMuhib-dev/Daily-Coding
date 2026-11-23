const User = require("./domain/User");
const UserRepository = require("./infra/UserRepository");

const repo = new UserRepository();

repo.insert(new User(1, "Ali", "ali@example.com"));
repo.insert(new User(2, "Sara", "sara@example.com"));
repo.insert(new User(3, "Ahmed", "ahmed@example.com"));

console.log(repo.getAll());
console.log(repo.getById(2));
console.log(repo.getById(10));

try {
  new User(4, "", "wrong-email");
} catch (err) {
  console.log(err.message);
}
