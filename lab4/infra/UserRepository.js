class UserRepository {
  constructor() {
    this.users = [];
  }

  insert(user) {
    this.users.push(user);
    return user;
  }

  getAll() {
    return this.users;
  }

  getById(id) {
    return this.users.find((user) => user.id === id);
  }
}

module.exports = UserRepository;
