// routes.js
const express = require('express');
const router = express.Router();

// Route to render the home page
router.get('/', (req, res) => {
    res.render('index', { title: 'Welcome to My EJS App' });
});

// Route to render the login page
router.get('/login', (req, res) => {
    res.render('auth/login-HR', { title: 'Login Page' });
});

// Route to render the dashboard
router.get('/dashboard', (req, res) => {
    res.render('dashboard/hr-dashboard', { title: 'Dashboard' });
});

router.get('/dashboard/memo', (req, res) => {
  res.render('hr/memo', { title: 'Dashboard' });
});

module.exports = router;
