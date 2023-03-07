const jwt = require('jsonwebtoken');
const { maxAge } = require('../utils/helpers/maxAge');

module.exports.createToken = (id) => {
    return jwt.sign({ id }, 'swifthub', {
        expiresIn: maxAge
    });
};