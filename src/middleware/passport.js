const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const mongoose = require('mongoose');
const users = mongoose.model('users');

const strategyOptions = {};
strategyOptions.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
strategyOptions.secretOrKey = process.env.JWT_SECRET_OR_PRIVATE_KEY;

const verify = (paylod, done) => {
    users.findById(paylod.id)
        .then((user) => {
            return user ? done(null, user): done(null, false);
        })
        .catch((err) => {
            console.error(err);
        });
};

module.exports = (passport) => {
    passport.use(new JwtStrategy(strategyOptions, verify));
};
