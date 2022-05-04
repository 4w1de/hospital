const express = require('express');
const passport = require('passport');

const authRoutes = require('./routes/auth');
const customerRoutes = require('./routes/customer');
const employeeRoutes = require('./routes/employee');
const departmentsRoutes = require('./routes/departments');
const appointmentRoutes = require('./routes/appointment');

const app = express();
app.use(express.json());
app.use(passport.initialize())
require('./middleware/passport')(passport);

app.use('/api/auth', authRoutes);
app.use('/api/customer', customerRoutes);
app.use('/api/employee', employeeRoutes);
app.use('/api/departments', departmentsRoutes);
app.use('/api/appointment', appointmentRoutes);

module.exports = app;