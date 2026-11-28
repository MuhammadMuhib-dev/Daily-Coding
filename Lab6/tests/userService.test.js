const UserService = require('../application/UserService');

describe('UserService with mocked repository', () => {
  let mockRepo;
  let service;

  beforeEach(() => {
    mockRepo = {
      create: jest.fn(),
      findAll: jest.fn(),
      findById: jest.fn(),
      findByEmail: jest.fn(),
    };
    service = new UserService(mockRepo);
  });

  test('registerUser creates a user when email is not taken', () => {
    mockRepo.findByEmail.mockReturnValue(null);
    mockRepo.create.mockReturnValue({ id: 1, name: 'Ali Khan', email: 'ali@example.com' });

    const user = service.registerUser('Ali Khan', 'ali@example.com');

    expect(mockRepo.findByEmail).toHaveBeenCalledWith('ali@example.com');
    expect(mockRepo.create).toHaveBeenCalledWith('Ali Khan', 'ali@example.com');
    expect(mockRepo.create).toHaveBeenCalledTimes(1);
    expect(user).toEqual({ id: 1, name: 'Ali Khan', email: 'ali@example.com' });
  });

  test('registerUser throws and does not save when email already exists', () => {
    mockRepo.findByEmail.mockReturnValue({ id: 1, name: 'Ali Khan', email: 'ali@example.com' });

    expect(() => service.registerUser('Ali Khan', 'ali@example.com')).toThrow(
      'Email already registered'
    );
    expect(mockRepo.create).not.toHaveBeenCalled();
  });

  test('registerUser throws on invalid input without touching the repository', () => {
    expect(() => service.registerUser('Al', 'bad-email')).toThrow();
    expect(mockRepo.findByEmail).not.toHaveBeenCalled();
    expect(mockRepo.create).not.toHaveBeenCalled();
  });

  test('getUserById returns user from the repository', () => {
    mockRepo.findById.mockReturnValue({ id: 5, name: 'Sara Ahmed', email: 'sara@example.com' });

    const user = service.getUserById(5);

    expect(mockRepo.findById).toHaveBeenCalledWith(5);
    expect(user.name).toBe('Sara Ahmed');
  });

  test('getUserById throws when user does not exist', () => {
    mockRepo.findById.mockReturnValue(null);

    expect(() => service.getUserById(99)).toThrow('User not found');
    expect(mockRepo.findById).toHaveBeenCalledWith(99);
  });

  test('getAllUsers returns the list from the repository', () => {
    mockRepo.findAll.mockReturnValue([{ id: 1 }, { id: 2 }]);

    expect(service.getAllUsers()).toHaveLength(2);
    expect(mockRepo.findAll).toHaveBeenCalledTimes(1);
  });
});
