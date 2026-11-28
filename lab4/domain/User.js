class User {
  constructor(id, name, email) {
    if (!Number.isInteger(id) || id <= 0) {
      throw new Error('Invalid id: must be a positive integer');
    }
    if (typeof name !== 'string' || name.trim().length < 3) {
      throw new Error('Invalid name: minimum 3 characters required');
    }
    if (typeof email !== 'string' || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      throw new Error('Invalid email format');
    }

    this.id = id;
    this.name = name.trim();
    this.email = email.toLowerCase();
  }
}

module.exports = User;
