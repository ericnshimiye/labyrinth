const advancedMaze = require('./advancedMaze');
const beginnerMaze = require('./beginnerMaze');

const level = {
    beginner: 'beginner',
    advanced: 'advanced'
};

const getByLevel = (mazeLevel) => {
    switch (mazeLevel) {
    case level.advanced:
        return advancedMaze;
    case level.beginner:
        return beginnerMaze;
    default:
        return null;
    }
};

exports.level = level;
exports.getByLevel = getByLevel;
