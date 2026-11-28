const request = require('supertest');
const app = require('../app');

describe('GET /ping', () => {
  test('returns 200 and pong', async () => {
    const res = await request(app).get('/ping');

    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual({ message: 'pong' });
  });
});

describe('POST /users', () => {
  test('creates a user and returns 201 with user data', async () => {
    const res = await request(app)
      .post('/users')
      .send({ name: 'Ali Khan', email: 'ali@example.com' });

    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty('message', 'User created');
    expect(res.body.user).toEqual(
      expect.objectContaining({ id: expect.any(Number), name: 'Ali Khan', email: 'ali@example.com' })
    );
  });

  test('returns 400 for invalid input', async () => {
    const res = await request(app).post('/users').send({ name: 'Al', email: 'bad' });

    expect(res.statusCode).toBe(400);
    expect(res.body).toHaveProperty('error');
  });

  test('returns 409 for duplicate email', async () => {
    await request(app).post('/users').send({ name: 'Sara Ahmed', email: 'sara@example.com' });
    const res = await request(app)
      .post('/users')
      .send({ name: 'Sara Ahmed', email: 'sara@example.com' });

    expect(res.statusCode).toBe(409);
    expect(res.body.error).toBe('Email already registered');
  });
});

describe('GET /users', () => {
  test('returns 200 and an array of users', async () => {
    const res = await request(app).get('/users');

    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body.users)).toBe(true);
    expect(res.body.users.length).toBeGreaterThan(0);
  });
});

describe('GET /users/:id', () => {
  test('returns 200 for an existing user', async () => {
    const res = await request(app).get('/users/1');

    expect(res.statusCode).toBe(200);
    expect(res.body.user).toHaveProperty('id', 1);
  });

  test('returns 404 for a user that does not exist', async () => {
    const res = await request(app).get('/users/9999');

    expect(res.statusCode).toBe(404);
    expect(res.body).toEqual({ error: 'User not found' });
  });
});
