class User {
  constructor(id, name, email, passwordHash) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.passwordHash = passwordHash;
  }

  // Safe representation without sensitive information
  toPublic() {
    return { id: this.id, name: this.name, email: this.email };
  }
}

module.exports = User;
