const mongoose = require('mongoose');
const UserSchema = require('../schema/UserSchema')

const User = mongoose.model('user', UserSchema);

module.exports = User;