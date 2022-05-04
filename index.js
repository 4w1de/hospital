require('dotenv').config();
const setupDB = require('./db');
const app = require('./app');

const PORT = process.env.PORT || 4000;

setupDB();

// app.get('/appointment', async (req,res,next) => {
//     try {
//         const appointment = await Appointment.query().withGraphFetched('[customer, employee]');
//         res.json(appointment);
//     } catch(e) {
//         console.error(e);
//         res.status(500).json(e)
//     }
// })

app.listen(PORT, () => console.log(`server running on port ${PORT}`))


