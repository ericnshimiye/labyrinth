const httpStatus = require('http-status-codes');
const teamModel = require('../dal/models/teams');
const validateRegisterInput = require('../validation/teams/register');

exports.register = (req, res) => {
    const {errors, isValid} = validateRegisterInput(req.body);

    if (!isValid) {
        return res.status(httpStatus.BAD_REQUEST).json(errors);
    }

    teamModel.findOne({code: req.body.code})
        .then((team) => {
            if (team) {
                errors.code = 'Team with this code already exists';
                return res.status(httpStatus.BAD_REQUEST).json(errors);
            } else {
                const newTeam = new teamModel({
                    code: req.body.code,
                    name: req.body.name
                });

                newTeam.save()
                    .then((team) => res.json(team))
                    .catch((err) => console.error(err));
            }
        });
};
