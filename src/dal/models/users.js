const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    creation: {
        type: Date,
        default: Date.now
    },
    team: {
        type: Schema.Types.ObjectId,
        ref: "teams"
    },
});

module.exports = users = mongoose.model("users", userSchema);
