const validator = require('validator');
const isEmpty = require('../is-empty');

module.exports = function validateRegisterInput(data) {
    const errors = {};

    data.code = !isEmpty(data.code) ? data.code : '';
    data.name = !isEmpty(data.name) ? data.name : '';

    if (!validator.isLength(data.code, {min: 6})) {
        errors.code = 'Code must be at least 6 characters';
    }

    if (validator.isEmpty(data.code)) {
        errors.code = 'Code field is required';
    }

    if (validator.isEmpty(data.name)) {
        errors.name = 'Name field is required';
    }

    return {
        errors,
        isValid: isEmpty(errors)
    };
};
