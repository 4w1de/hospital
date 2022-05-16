require('dotenv').config();

const express = require('express');
const passport = require('passport');
const cors = require('cors');
const useSocket = require('socket.io');

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
const setupDB = require('./db');

const Departments = require('./models/Departments');
const Appointment = require('./models/Appointment');
const Customer = require('./models/Customer');
const Employee = require('./models/Employee');

const PORT = process.env.PORT || 4000;

setupDB();

const app = express();
const server = require('http').Server(app);

const io = useSocket(server, {
    cors: {
        cors: {
            origin: 'http://localhost:3000',
        },
    },
});

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

io.on('connection', (socket) => {
    console.log('user connected ', socket.id);

    socket.on('disconnect', () => {
        console.log(`socket ${socket.id} disconnected`);
    });

    socket.on('appoint', () => {
        io.sockets.emit('appointList');
    });
    socket.on('cust', () => {
        io.sockets.emit('custList');
    });
    socket.on('depart', () => {
        io.sockets.emit('departList');
    });
    socket.on('empl', () => {
        io.sockets.emit('emplList');
    });
});

server.listen(PORT, () => console.log(`Listening on port ${PORT}`));
