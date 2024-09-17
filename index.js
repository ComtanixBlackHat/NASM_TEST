
// index.js
const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 4089;

// Set the view engine to EJS
app.set('view engine', 'ejs');

// Set the directory for EJS templates
app.set('views', path.join(__dirname, 'views'));

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));
app.get('/', (req, res) => {
    res.render('auth/main-login', { title: 'Welcome to My EJS App' });
});
app.get('/login-list', (req, res) => {
    res.render('auth/login-list', { title: 'Welcome to My EJS App' });
});
app.get('/dashboard', (req, res) => {
    res.render('dashboard/dashboard', { title: 'Welcome to My EJS App' });
});

// Import the Hr/auth routes
const HRauthRoutes = require('./servers/routes/Hr/auth');
app.use('/hr', HRauthRoutes); 



const financeauthRoutes = require('./servers/routes/finance/auth');
app.use('/finance', financeauthRoutes); 


const OperationsauthRoutes = require('./servers/routes/operations/auth');
app.use('/operations', OperationsauthRoutes); 


const ProcurementauthRoutes = require('./servers/routes/Procurments/auth');
app.use('/procurments', ProcurementauthRoutes); 


const AdminRoutes = require('./servers/routes/admin/auth');
app.use('/admin', AdminRoutes); 


const QrRoutes = require('./servers/routes/qa/auth');
app.use('/qr', QrRoutes); 



const IrRoutes = require('./servers/routes/ia/auth');
app.use('/ir', IrRoutes); 


const IctRoutes = require('./servers/routes/ict/auth');
app.use('/ict', IctRoutes); 
{/* <li class="nav-item">
        <a class="nav-link" href="/admin/login">
          <i class="fas fa-users fa-3x my-3"></i>
          <span>Admin</span>
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link collapsed" href="/qr/login">
          <i class="fas fa-users fa-3x my-3"></i>
          <span>Quality Assurance</span>
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link collapsed" href="/ir/login">
          <i class="fas fa-users fa-3x my-3"></i>
          <span>Internal Audit </span>
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link collapsed" href="/ict/login">
          <i class="fas fa-users fa-3x my-3"></i>
          <span>ICT Department </span>
        </a>
      </li> */}
app.listen(port, () => {
    console.log(`Server is running on http://0.0.0.0:${port}`);
});

