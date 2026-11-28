const User = require('../domain/User');

class UserRepository {
  constructor() {
    this.users = []; // in-memory data store
  }

  insert(id, name, email) {
    if (this.users.some((u) => u.id === id)) {
      throw new Error(`User with id ${id} already exists`);
    }
    if (this.users.some((u) => u.email === String(email).toLowerCase())) {
      throw new Error(`Email ${email} is already registered`);
    }
    const user = new User(id, name, email); // entity validates the data
    this.users.push(user);
    return user;
  }

  getAll() {
    return [...this.users];
  }

  getById(id) {
    return this.users.find((u) => u.id === id) || null;
  }
}

module.exports = UserRepository;
