const bcrypt = require("bcryptjs");
const httpStatus = require('http-status-codes');
const validateSignUpInput = require("../validation/signup");
const userModel = require("../dal/models/users");
const teamModel = require("../dal/models/teams");

exports.signup = (req, res) => {
    const { errors, isValid } = validateSignUpInput(req.body);
    
    if (!isValid) {
        return res.status(httpStatus.BAD_REQUEST).json(errors);
    }
    
    userModel.findOne({ email: req.body.email })
        .then(user => {
            if (user) {
                errors.email = "User with this email already exists";
                return res.status(httpStatus.BAD_REQUEST).json(errors);
            } else {
                teamModel.findOne({ code: req.body.team })
                    .then(team => {
                        if(!team){
                            errors.team = "Team not found";
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
                                    .then(user => res.json(user))
                                    .catch(err => console.log(err));
                            });
                        });
                    });
            }
        })
        .catch(err => console.log(err));
};
