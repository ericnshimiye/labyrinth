const bcrypt = require('bcryptjs');
const httpStatus = require('http-status-codes');
const jwt = require('jsonwebtoken');
const validateSignUpInput = require('../validation/users/signup');
const validateSignInInput = require('../validation/users/signin');
const userModel = require('../dal/models/users');
const teamModel = require('../dal/models/teams');

exports.signup = (req, res) => {
    const {errors, isValid} = validateSignUpInput(req.body);

    if (!isValid) {
        return res.status(httpStatus.BAD_REQUEST).json(errors);
    }

    userModel.findOne({email: req.body.email})
        .then((user) => {
            if (user) {
                errors.email = 'User with this email already exists';
                return res.status(httpStatus.BAD_REQUEST).json(errors);
            } else {
                teamModel.findOne({code: req.body.team})
                    .then((team) => {
                        if (!team) {
                            errors.team = 'Invalid team';
                            return res.status(httpStatus.BAD_REQUEST).json(errors);
                        }

                        const newUser = new userModel({
                            firstName: req.body.firstName,
                            lastName: req.body.lastName,
                            email: req.body.email,
                            password: req.body.password,
                            team: team.id
                        });

                        bcrypt.genSalt(10, (err, salt) => {
                            bcrypt.hash(newUser.password, salt, (err, hash) => {
                                if (err) throw err;
                                newUser.password = hash;
                                newUser
                                    .save()
                                    .then((user) => res.json(user))
                                    .catch((err) => console.log(err));
                            });
                        });
                    });
            }
        })
        .catch((err) => console.log(err));
};

exports.signin = (req, res) => {
    const {errors, isValid} = validateSignInInput(req.body);

    if (!isValid) {
        return res.status(400).json(errors);
    }

    const {email, password} = req.body;

    userModel.findOne({email}).then((user) => {
        if (!user) {
            errors.message = 'Wrong email or password';
            return res.status(404).json(errors);
        }

        bcrypt.compare(password, user.password).then((isMatch) => {
            if (isMatch) {
                const {id, firstName, lastName, team} = user;
                const payload = {id, firstName, lastName, team};
                const secretOrPrivateKey = process.env.JWT_SECRET_OR_PRIVATE_KEY;

                jwt.sign(payload, secretOrPrivateKey, {expiresIn: '1d'}, (err, token) => {
                    res.json({
                        success: true,
                        token: 'Bearer ' + token
                    });
                });
            } else {
                errors.message = 'Wrong email or password';
                return res.status(404).json(errors);
            }
        });
    });
};

exports.current = (req, res) => res.json({
    id: req.user.id,
    firstName: req.user.firstName,
    lastName: req.user.lastName,
    email: req.user.email
});
