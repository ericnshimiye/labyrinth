/** Class representing a user dto. */
class userDto {
    /**
     * @param {string} firstName
     * @param {string} lastName
     * @param {string} email
     * @param {string} password
     * @param {string} team
     */
    constructor({firstName, lastName, email, password, team}) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
        this.team = team;
    }
};

module.exports = userDto;
