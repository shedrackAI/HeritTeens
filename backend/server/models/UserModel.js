const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "please add a username"],
        unique: true,
    },
    fullname: {
        type: String,
        required: true,
    },
    gender: {
        type: String,
        required: true,
    },
    department: {
        type: String,
        required: true,
    },
    branch: {
        type: String,
        required: true,
    },
    member: {
        type: String,
        default: "Yes"
    },
    password: {
        type: String,
        required: [true, "please add a password"],
        min: 6,
    },
    number: {
        type: String,
        default: "No number"
    },
    bio: {
        type: String,
        default: "from"
    },
    profilePicture: {
        type: String,
        default: ""
    },
    frends: {
        type: Array,
        default: []
    },
    meet: {
        type: Array,
        default: []
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
},{timestamps: true});

module.exports = mongoose.model('User', UserSchema);