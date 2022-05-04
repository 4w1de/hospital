const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const Users = require('../models/Users');
const Employee = require('../models/Employee');

module.exports.login = async (req, res) => {
    const email = req.body.email;
    const employee = await Employee.query().where('email',email).first();
    if(employee) {
        const user = await Users.query().where('employeeId', employee.id).first();
        if(user) {
            const passwordResult = bcrypt.compareSync(req.body.password, user.password);
            if(passwordResult) {
                const token = jwt.sign({
                    email: employee.email,
                    userId: employee.id,
                    user: employee.name,
                }, process.env.JWT, {expiresIn: 60 * 20});

                res.status(200).json({
                    token: `Bearer ${token}`
                })
            } else {
                res.status(404).json({
                    message: "Doesn't correct password"
                })
            }
        } else {
            res.status(404).json({
                message: "Doesn't exists user"
            })
        }
    }
    else {
        res.status(404).json({
            message: "Doesn't exists email"
        })
    }
    //const users = await Users.query().where({email: req.body.email}).withGraphFetched('employee');
}