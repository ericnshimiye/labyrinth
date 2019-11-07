const userModel = require('./models/users');

/** Class representing a mongo db repository. */
class usersRepository {
    /**
     * @param {string} email
     * @return {Promise} promise
     */
    findByEmail({email}) {
        return userModel.findOne({email: email});
    }

    /**
     * @param {userDto} userDto
     * @return {Promise} promise
     */
    update(userDto) {
        const model = new userModel({
            firstName: userDto.firstName,
            lastName: userDto.lastName,
            email: userDto.email,
            password: userDto.password,
            team: userDto.team
        });
        return model.save();
    }
};

module.exports = usersRepository;
