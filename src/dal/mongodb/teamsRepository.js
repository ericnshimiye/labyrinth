const teamModel = require('./models/teams');

/** Class representing a mongo db repository. */
class usersRepository {
    /**
     * @param {string} code
     * @return {Promise} promise
     */
    findByCode({code}) {
        return teamModel.findOne({code: code});
    }

    /**
     * @return {Promise} promise
     */
    findAll() {
        return teamModel.find().sort({name: 'asc'});
    }

    /**
     * @param {teamDto} teamDto
     * @return {Promise} promise
     */
    insert(teamDto) {
        const model = new teamModel({
            code: teamDto.code,
            name: teamDto.name
        });
        return model.save();
    }
};

module.exports = usersRepository;
