// routes.js
const express = require('express');
const router = express.Router();

// Route to render the home page
router.get('/', (req, res) => {
    res.render('index', { title: 'Welcome to My EJS App' });
});

// Route to render the login page
router.get('/login', (req, res) => {
    res.render('auth/login-admin', { title: 'Login Page' });
});

// Route to render the dashboard
router.get('/dashboard', (req, res) => {
    res.render('dashboard/procurment-dashboard', { title: 'Dashboard' });
});
router.get('/dashboard/spd1', (req, res) => {
    res.render('procurment/spd1', { title: 'Dashboard' });
});

router.get('/dashboard/memo', (req, res) => {
  res.render('procurment/memo', { title: 'Dashboard' });
});

router.get('/dashboard/lpo', (req, res) => {
  res.render('procurment/lpo', { title: 'Dashboard' });
});

router.get('/dashboard/eva', (req, res) => {
  res.render('procurment/eva', { title: 'Dashboard' });
});
module.exports = router;
