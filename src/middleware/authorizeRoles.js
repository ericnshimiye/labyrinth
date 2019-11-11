const httpStatus = require('http-status-codes');
const usersRepositoryFactory = require('../dal/usersRepositoryFactory');

const authorizeRoles = (roles) => {
    const m = (req, res, next) => {
        const userRepoFactory = new usersRepositoryFactory();
        const userRepo = userRepoFactory.create({strategy: process.env.PERSISTENCE_STRATEGY});
        userRepo.findById({id: req.user.id})
            .then((user) => {
                const role = user.role;
                if (role && roles && roles.includes(role)) {
                    return next();
                } else {
                    return res.status(httpStatus.UNAUTHORIZED)
                        .json({message: 'Unauthorized'});
                }
            })
            .catch((err) => {
                console.error(err);
                return res.status(httpStatus.UNPROCESSABLE_ENTITY);
            });
    };
    return m;
};

module.exports = authorizeRoles;
