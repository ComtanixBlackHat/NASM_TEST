// routes.js
const express = require('express');
const router = express.Router();

// Route to render the home page
router.get('/', (req, res) => {
    res.render('index', { title: 'Welcome to My EJS App' });
});

// Route to render the login page
router.get('/login', (req, res) => {
    res.render('auth/login-Operations', { title: 'Login Page' });
});

// Route to render the dashboard
router.get('/dashboard', (req, res) => {
    res.render('dashboard/operations-dashboard', { title: 'Dashboard' });
});
router.get('/dashboard/memo', (req, res) => {
    res.render('operations/memo', { title: 'Dashboard' });
});
module.exports = router;
