const mongodbRepository = require('../dal/mongodb/teamsRepository');
const pouchdbRepository = require('../dal/pouchdb/teamsRepository');

/** Class representing a teams repository factory. */
class teamsRepositoryFactory {
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

module.exports = teamsRepositoryFactory;
