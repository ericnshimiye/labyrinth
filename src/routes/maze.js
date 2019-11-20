const httpStatus = require('http-status-codes');
const maze = require('../maze');

exports.level = (req, res) => {
    const isValidLevel = req.params.level != null &&
        [maze.level.advanced, maze.level.beginner].includes(req.params.level);
    if (!isValidLevel) {
        return res.status(httpStatus.BAD_REQUEST).json({message: 'unknown level.'});
    }
    const level = maze.getByLevel(req.params.level);
    return res.status(httpStatus.OK).json(level);
};
