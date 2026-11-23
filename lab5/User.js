class User {
  constructor(id, name, email, password) {
    if (!name || name.trim() === "") {
      throw new Error("Name is required");
    }
    if (!email || !email.includes("@")) {
      throw new Error("Valid email is required");
    }
    if (!password || password.length < 6) {
      throw new Error("Password must be at least 6 characters");
    }
    this.id = id;
    this.name = name;
    this.email = email;
    this.password = password;
  }
}

module.exports = User;
