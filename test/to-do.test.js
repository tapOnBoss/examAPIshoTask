// tests/to-do.test.js
const request = require('supertest');
const app = require('../app');

describe('To-do routes', () => {
  it('should create a new to-do', async () => {
    const res = await request(app)
      .post('/to-do')
      .send({ title: 'Test to-do', description: 'Test description' });
    expect(res.status).toBe(201);
    expect(res.body).toHaveProperty('toDo');
  });
});
