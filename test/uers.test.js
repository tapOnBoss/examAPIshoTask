const request = require('supertest');
const app = require('../app');

describe('Users', () => {
    it('should register a user', (done) => {
    // test user registration
});

//login a user
it('should login a user', (done) => {
    request(app)
        .post('/users/login')
        .send({ email: 'johndoe@example.com', password: 'password' })
        .expect(200)
        .end((err, res) => {
            if (err) return done(err);
            assert.exists(res.body.token);
            done();
        });
});

//register a user
it('should register a user', (done) => {
    request(app)
        .post('/users/register')
        .send({ name: 'John', lastname: 'Doe', email: 'johndoe@example.com', password: 'password' })
        .expect(200)
        .end((err, res) => {
            if (err) return done(err);
            assert.exists(res.body.token);
            done();
        });
});

// Retrieve a task for a user
// test/users.test.js
it('should retrieve tasks for a user', (done) => {
    request(app)
    .get('/users/tasks')
    .set('x-access-token', token)
    .expect(200)
    .end((err, res) => {
        if (err) return done(err);
        assert.isArray(res.body.tasks);
        done();
    });
},)
})
