const express = require('express');
const passport = require('passport');
const cors = require('cors');

const authRoutes = require('./routes/auth');
const customerRoutes = require('./routes/customer');
const employeeRoutes = require('./routes/employee');
const departmentsRoutes = require('./routes/departments');
const appointmentRoutes = require('./routes/appointment');
const {
    passportAdmin,
    passportDoctor,
    passportReception,
} = require('./middleware/passport');

const app = express();
app.use(express.json());
app.use(cors());
app.use(passport.initialize());
passportAdmin(passport);
passportDoctor(passport);
passportReception(passport);

app.use('/api/auth', authRoutes);
app.use('/api/customer', customerRoutes);
app.use('/api/employee', employeeRoutes);
app.use('/api/departments', departmentsRoutes);
app.use('/api/appointment', appointmentRoutes);

module.exports = app;
