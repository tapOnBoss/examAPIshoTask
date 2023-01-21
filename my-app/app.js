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

//  middlewave
const toDoR = '' ;
const express = require('express');
const toDoRoutes = require('./routes/to-do');

app.use('/', toDoRoutes);

app.listen(3000, () => {
  console.log('Server started on port 3000');
});

const express = require('express');
const toDoRoutes = require('./routes/to-do');
const checkAuth = require('./middleware/authentication');

app.use('/', toDoRoutes);
app.use('/to-do', checkAuth);

app.listen(3000, () => {
  console.log('Server started on port 3000');
});

// error handling + logging
const errorHandler = require('./middleware/error-handler');
const logging = require('./middleware/logging');

app.use(errorHandler);
app.use(logging);

// app.js
const i18n = require('./i18n');

app.use(i18n.init);

// app.js
const a11y = require('@react-aria/a11y');

app.use(a11y);

// app.js
const performance = require('./middleware/performance');

app.use(performance);

// app.js
const monitoring = require('./monitoring');

app.use('/monitoring', monitoring);
