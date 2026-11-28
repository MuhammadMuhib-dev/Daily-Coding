const User = require('../domain/User');

class UserRepository {
  constructor() {
    this.users = [];
    this.nextId = 1;
  }

  insert(name, email, passwordHash) {
    const user = new User(this.nextId++, name, email.toLowerCase(), passwordHash);
    this.users.push(user);
    return user;
  }

  getAll() {
    return [...this.users];
  }

  getById(id) {
    return this.users.find((u) => u.id === id) || null;
  }

  getByEmail(email) {
    return this.users.find((u) => u.email === String(email).toLowerCase()) || null;
  }
}

module.exports = new UserRepository();
