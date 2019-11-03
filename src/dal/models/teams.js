const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const teamSchema = new Schema({
    code: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    creation: {
        type: Date,
        default: Date.now
    }
});

module.exports = teams = mongoose.model("teams", teamSchema);
