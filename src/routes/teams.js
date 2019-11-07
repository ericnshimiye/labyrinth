const httpStatus = require('http-status-codes');
const teamDto = require('../dtos/teamDto');
const validateRegisterInput = require('../validation/teams/register');
const teamsRepository = require('../dal/mongodb/teamsRepository');

exports.all = (_, res) => {
    const teamsRepo = new teamsRepository();
    teamsRepo.findAll()
        .then((teams) => res.json(teams))
        .catch((_) => res.status(404).json({message: 'No team found'}));
};

exports.register = (req, res) => {
    const {errors, isValid} = validateRegisterInput(req.body);

    if (!isValid) {
        return res.status(httpStatus.BAD_REQUEST).json(errors);
    }

    const teamsRepo = new teamsRepository();
    teamsRepo.findByCode({code: req.body.code})
        .then((team) => {
            if (team) {
                errors.code = 'Team with this code already exists';
                return res.status(httpStatus.BAD_REQUEST).json(errors);
            } else {
                const newTeam = new teamDto({
                    code: req.body.code,
                    name: req.body.name
                });
                teamsRepo.insert(newTeam)
                    .then((team) => res.status(httpStatus.CREATED).json(team))
                    .catch((err) => console.error(err));
            }
        });
};
