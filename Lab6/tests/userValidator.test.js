const { validateUserInput } = require('../application/userValidator');

describe('validateUserInput (unit test)', () => {
  test('returns valid for correct name and email', () => {
    const result = validateUserInput({ name: 'Ali Khan', email: 'ali@example.com' });
    expect(result.valid).toBe(true);
    expect(result.errors).toHaveLength(0);
  });

  test('fails when name is too short', () => {
    const result = validateUserInput({ name: 'Al', email: 'ali@example.com' });
    expect(result.valid).toBe(false);
    expect(result.errors).toContain('Name must be at least 3 characters');
  });

  test('fails when email format is invalid', () => {
    const result = validateUserInput({ name: 'Ali Khan', email: 'wrong-email' });
    expect(result.valid).toBe(false);
    expect(result.errors).toContain('Email format is invalid');
  });

  test('fails with two errors when both fields are invalid', () => {
    const result = validateUserInput({ name: '', email: '' });
    expect(result.valid).toBe(false);
    expect(result.errors).toHaveLength(2);
  });

  test('fails when no input is given', () => {
    const result = validateUserInput();
    expect(result.valid).toBe(false);
  });
});
