const httpStatus = require('http-status-codes');
const teamDto = require('../dtos/teamDto');
const validateRegisterInput = require('../validation/teams/register');
const teamsRepositoryFactory = require('../dal/teamsRepositoryFactory');

exports.all = (_, res) => {
    const teamRepoFactory = new teamsRepositoryFactory();
    const teamsRepo = teamRepoFactory.create({strategy: process.env.PERSISTENCE_STRATEGY});
    teamsRepo.findAll()
        .then((teams) => res.json(teams))
        .catch((_) => res.status(httpStatus.NOT_FOUND).json({message: 'No team found'}));
};

exports.register = (req, res) => {
    const {errors, isValid} = validateRegisterInput(req.body);

    if (!isValid) {
        return res.status(httpStatus.BAD_REQUEST).json(errors);
    }

    const teamRepoFactory = new teamsRepositoryFactory();
    const teamsRepo = teamRepoFactory.create({strategy: process.env.PERSISTENCE_STRATEGY});
    teamsRepo.findByCode({code: req.body.code})
        .then((team) => {
            if (team) {
                errors.code = 'Team with this code already exists';
                return res.status(httpStatus.CONFLICT).json(errors);
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
