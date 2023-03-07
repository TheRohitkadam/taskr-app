const mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');
var crypto = require('crypto');
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId;

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        // lowercase: true,
        // unique: true,
        required: [true, "Username not found. Please add username."],
        // match: [/^[a-zA-Z0-9]+$/, 'is invalid'],
        // index: true
    },
    email: {
        type: String,
        lowercase: true,
        unique: true,
        required: [true, "Email not found. Please add email."],
        match: [/\S+@\S+\.\S+/, 'is invalid'],
        index: true
    },
    first_name: {
        type: String,
        required: [true, `User firstname not found. Please add firstname.`]
    },
    last_name: {
        type: String,
        required: [true, `User lastname not found. Please add lastname.`]
    },
    password: {
        type: String,
        required: [true, `Please provide password.`]
    },
    status: {
        type: String,
        required: [true, `Status not found.`]
    },
    img_url: {
        type: String,
        // required: [false, `img_url not found.`]
    },
    location: {
        type: String,
        required: [true, `Please add location.`]
    },
    roles: {
        type: [String],
        required: [true, `Please select roles.`]
    }
}, { timestamps: {} })

UserSchema.plugin(uniqueValidator, { message: 'This user is already exist.' });

UserSchema.methods.setPassword = function (password) {
    this.salt = crypto.randomBytes(16).toString('hex');
    this.hash = crypto.pbkdf2Sync(password, this.salt, 10000, 512, 'sha512').toString('hex');
}

UserSchema.methods.validPassword = function (password) {
    var hash = crypto.pbkdf2Sync(password, this.salt, 10000, 512, 'sha512').toString('hex');
    return this.hash === hash;
};

UserSchema.methods.generateJWT = function () {
    var today = new Date();
    var exp = new Date(today);
    exp.setDate(today.getDate() + 60);

    return jwt.sign({
        id: this._id,
        username: this.username,
        exp: parseInt(exp.getTime() / 1000),
    }, secret);
};

UserSchema.methods.toAuthJSON = function () {
    return {
        username: this.username,
        email: this.email,
        token: this.generateJWT(),
        bio: this.bio,
        image: this.image
    };
};


module.exports = UserSchema;