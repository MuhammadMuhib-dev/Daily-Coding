const UserRepository = require('./infra/UserRepository');

const repo = new UserRepository();

// Insert dummy data
repo.insert(1, 'Ali Khan', 'ali@example.com');
repo.insert(2, 'Sara Ahmed', 'sara@example.com');
repo.insert(3, 'Usman Raza', 'usman@example.com');

// Fetch all users
console.log('All users:');
console.log(repo.getAll());

// Fetch single user by id
console.log('User with id 2:');
console.log(repo.getById(2));
console.log('User with id 99:');
console.log(repo.getById(99));

// Validation tests
try {
  repo.insert(4, 'Al', 'wrong-email');
} catch (err) {
  console.log('Validation error:', err.message);
}

try {
  repo.insert(1, 'Duplicate User', 'dup@example.com');
} catch (err) {
  console.log('Validation error:', err.message);
}
