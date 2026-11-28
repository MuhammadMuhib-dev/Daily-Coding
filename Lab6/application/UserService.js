const { validateUserInput } = require('./userValidator');

class UserService {
  constructor(userRepository) {
    this.userRepository = userRepository;
  }

  registerUser(name, email) {
    const result = validateUserInput({ name, email });
    if (!result.valid) {
      throw new Error(result.errors.join(', '));
    }

    if (this.userRepository.findByEmail(email)) {
      throw new Error('Email already registered');
    }

    return this.userRepository.create(name.trim(), email);
  }

  getUserById(id) {
    const user = this.userRepository.findById(id);
    if (!user) {
      throw new Error('User not found');
    }
    return user;
  }

  getAllUsers() {
    return this.userRepository.findAll();
  }
}

module.exports = UserService;
