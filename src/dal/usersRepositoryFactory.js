const mongodbRepository = require('../dal/mongodb/usersRepository');
const pouchdbRepository = require('../dal/pouchdb/usersRepository');

/** Class representing a users repository factory. */
class usersRepositoryFactory {
    /**
     * @param {string} strategy
     * @return {Object} repository
     */
    create({strategy}) {
        switch (strategy) {
        case 'mongodb':
            return new mongodbRepository();
        case 'pouchdb':
            return new pouchdbRepository();
        default:
            throw new Error('missing or unknown persistence strategy');
        }
    };
};

module.exports = usersRepositoryFactory;
