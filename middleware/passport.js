require('dotenv').config();

const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;

const Users = require('../models/Users');
const Employee = require('../models/Employee');

const options = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.JWT,
}

module.exports = (passport) => {
    passport.use(
        new JwtStrategy(options, async (payload, done) => {
            try {
                const user = await Employee.query().select('id', 'email').where('id', payload.userId).first();
                if(user) {
                    done(null, user);
                } else {
                    done(null, false);
                }
            } catch(e) {
                console.log(e);
            }
        })
    )
}