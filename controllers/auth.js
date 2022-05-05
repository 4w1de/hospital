const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const Users = require('../models/Users');
const Employee = require('../models/Employee');

const login = async (req, res) => {
    const email = req.body.email;
    const employee = await Employee.query().where('email', email).first();
    if (employee) {
        const user = await Users.query()
            .where('employeeId', employee.id)
            .first();
        if (user) {
            const passwordResult = bcrypt.compareSync(
                req.body.password,
                user.password,
            );
            console.log(user.password);
            if (passwordResult) {
                const token = jwt.sign(
                    {
                        email: employee.email,
                        userId: employee.id,
                        user: employee.name,
                        role: user.role,
                    },
                    process.env.JWT,
                    { expiresIn: 60 * 20 },
                );

                res.status(200).json({
                    token: `Bearer ${token}`,
                    user: {
                        name: employee.name,
                        email: employee.email,
                        userId: employee.id,
                        role: user.role,
                    },
                });
            } else {
                res.status(404).json({
                    message: "Doesn't correct password",
                });
            }
        } else {
            res.status(404).json({
                message: "Doesn't exists user",
            });
        }
    } else {
        res.status(404).json({
            message: "Doesn't exists email",
        });
    }
};

const authorizate = async (req, res) => {
    try {
        const employee = await Employee.query()
            .where('id', req.user.userId)
            .first();
        const user = await Users.query()
            .where('employeeId', req.user.userId)
            .first();
        const token = jwt.sign(
            {
                email: employee.email,
                userId: employee.id,
                user: employee.name,
                role: user.role,
            },
            process.env.JWT,
            { expiresIn: 60 * 20 },
        );
        res.status(200).json({
            token: `Bearer ${token}`,
            user: {
                name: employee.name,
                email: employee.email,
                userId: employee.id,
                role: user.role,
            },
        });
    } catch {
        res.status(401).json({ message: 'Server error' });
    }
};

module.exports = { login, authorizate };
