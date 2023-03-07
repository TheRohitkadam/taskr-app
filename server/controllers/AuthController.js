const bcrypt = require("bcrypt");
const { createToken } = require('../config/createToken');
const User = require('../models/user');
const { maxAge } = require('../utils/helpers/maxAge');
const handleErrors = require('../utils/helpers/handleErrors')

module.exports.signup = async (req, res) => {
  const { username, password, email } = req.body;

  try {
    const user = await User.create({ username, password, email });
    // const user = await User.create(req.body);
    const token = createToken(user.id);
    res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000 });
    res.status(201).json({ user: user.id });
  }
  catch (err) {
    const errors = handleErrors(err);
    res.status(400).json({ errors });
  }
}

module.exports.login = async (req, res) => {
  try {
    const { username, password } = req.body;
    // validate
    if (!username || !password) return res.status(400).json({ msg: "Not all fields have been entered." });

    const user = await User.findOne({ username });

    // console.log('user', password, user.password);

    if (!user) return res.status(400).json({ msg: "No account with this username has been registered." });

    // const isMatch = await bcrypt.compare(password, user.password); // NEED TO ENCRYPT PASSWORD
    const isMatch = await password === user.password;

    // console.log('isMatch', isMatch);

    if (!isMatch) return res.status(400).json({ msg: "Invalid credentials." });

    const accessToken = createToken(user.id);

    return res.json({
      id: user.id,
      displayName: user.first_name + ' ' + user.last_name,
      email: user.email,
      accessToken
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

module.exports.logout = (req, res) => {
  res.cookie('jwt', '', { maxAge: 1 });
  res.redirect('/');
}