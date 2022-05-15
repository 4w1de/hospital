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

    socket.on('appoint', async () => {
        const page = 1;
        const { results: appointment, total } = await Appointment.query()
            .withGraphFetched('[customer, employee]')
            .orderBy('last_update_timestamp', 'desc')
            .page(page - 1, 5);
        io.sockets.emit('appointList', { appointment, total });
    });
    socket.on('cust', async () => {
        const page = 1;
        const size = 5;
        const { results: customer, total } = await Customer.query()
            .orderBy('last_update_timestamp', 'desc')
            .page(page - 1, size);
        io.sockets.emit('custList', { customer, total });
    });
    socket.on('depart', async () => {
        const departments = await Departments.query();
        io.sockets.emit('departList', departments);
    });
    socket.on('empl', async () => {
        const employee = await Employee.query()
            .orderBy('last_update_timestamp', 'desc')
            .withGraphFetched('departments');
        io.sockets.emit('emplList', employee);
    });
});

server.listen(PORT, () => console.log(`Listening on port ${PORT}`));
