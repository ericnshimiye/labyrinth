const httpStatus = require('http-status-codes');
const maze = require('../maze');

exports.one = (_, res) => {
    return res.status(httpStatus.OK).json(maze);
};
