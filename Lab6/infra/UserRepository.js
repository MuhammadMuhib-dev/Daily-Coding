const User = require('../domain/User');

class UserRepository {
  constructor() {
    this.users = [];
    this.nextId = 1;
  }

  create(name, email) {
    const user = new User(this.nextId++, name, email.toLowerCase());
    this.users.push(user);
    return user;
  }

  findAll() {
    return [...this.users];
  }

  findById(id) {
    return this.users.find((u) => u.id === id) || null;
  }

  findByEmail(email) {
    return this.users.find((u) => u.email === email.toLowerCase()) || null;
  }
}

module.exports = UserRepository;
