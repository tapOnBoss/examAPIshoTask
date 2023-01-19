const express = require('express');
const users = require('./routes/users');
const db = require('./config/db');
const app = express();

app.use('/users', users);

app.listen(3000, () => {
    console.log('Server listening on port 3000');
});

const router = express.Router();

router.post('/register', (req, res) => {
  // handle user registration
});

router.get('/tasks', (req, res) => {
  // handle task retrieval
});

// import middlewares
const authMiddleware = require('./middlewares/authMiddleware');
app.use(authMiddleware.requireAuth);

// security headers
const helmet = require('helmet');
app.use(helmet());
