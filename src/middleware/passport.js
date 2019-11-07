const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const usersRepository = require('../dal/mongodb/usersRepository');

const strategyOptions = {};
strategyOptions.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
strategyOptions.secretOrKey = process.env.JWT_SECRET_OR_PRIVATE_KEY;

const verify = (paylod, done) => {
    const userRepo = new usersRepository();
    userRepo.findById({id: paylod.id})
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
