const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const usersRepositoryFactory = require('../dal/usersRepositoryFactory');

const strategyOptions = {};
strategyOptions.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
strategyOptions.secretOrKey = process.env.JWT_SECRET_OR_PRIVATE_KEY;

const verify = (payload, done) => {
    const userRepoFactory = new usersRepositoryFactory();
    const userRepo = userRepoFactory.create({strategy: process.env.PERSISTENCE_STRATEGY});
    userRepo.findById({id: payload.id})
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
