require('dotenv').config();

const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;

const Users = require('../models/Users');
const Employee = require('../models/Employee');

const options = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.JWT,
};
const passportAdmin = (passport) => {
    passport.use(
        'passportAdmin',
        new JwtStrategy(options, async (payload, done) => {
            try {
                const user = await Employee.query()
                    .select('id', 'email')
                    .where('id', payload.userId)
                    .first();
                if (user && payload.role <= 0) {
                    done(null, user);
                } else {
                    done(null, false);
                }
            } catch (e) {
                console.log(e);
            }
        }),
    );
};
const passportDoctor = (passport) => {
    passport.use(
        'passportDoctor',
        new JwtStrategy(options, async (payload, done) => {
            try {
                const user = await Employee.query()
                    .select('id', 'email')
                    .where('id', payload.userId)
                    .first();
                if (user && payload.role <= 2) {
                    done(null, user);
                } else {
                    done(null, false);
                }
            } catch (e) {
                console.log(e);
            }
        }),
    );
};
const passportReception = (passport) => {
    passport.use(
        'passportReception',
        new JwtStrategy(options, async (payload, done) => {
            try {
                const user = await Employee.query()
                    .select('id', 'email')
                    .where('id', payload.userId)
                    .first();
                if (user && payload.role <= 1) {
                    done(null, user);
                } else {
                    done(null, false);
                }
            } catch (e) {
                console.log(e);
            }
        }),
    );
};

module.exports = {
    passportAdmin,
    passportDoctor,
    passportReception,
};
