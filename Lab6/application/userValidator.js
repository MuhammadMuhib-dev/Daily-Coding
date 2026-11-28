// Standalone business logic function (no dependencies)
function validateUserInput({ name, email } = {}) {
  const errors = [];

  if (typeof name !== 'string' || name.trim().length < 3) {
    errors.push('Name must be at least 3 characters');
  }
  if (typeof email !== 'string' || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.push('Email format is invalid');
  }

  return { valid: errors.length === 0, errors };
}

module.exports = { validateUserInput };
