const User = require('../models/user');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const register = (req, res) => {
  const { username, email, password } = req.body;
  const hashedPassword = bcrypt.hashSync(password, 8);

  User.create(username, email, hashedPassword, (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.status(201).json({ message: 'User registered successfully' });
  });
};

const login = (req, res) => {
  const { username, password } = req.body;

  User.findByUsername(username, (err, users) => {
    if (err || users.length === 0) return res.status(404).json({ error: 'User not found' });

    const user = users[0];
    const passwordIsValid = bcrypt.compareSync(password, user.password);

    if (!passwordIsValid) return res.status(401).json({ error: 'Invalid password' });

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: 86400 });
    res.status(200).json({ auth: true, token });
  });
};

const getProfile = (req, res) => {
  User.findById(req.user.id, (err, users) => {
    if (err || users.length === 0) return res.status(404).json({ error: 'User not found' });
    res.status(200).json(users[0]);
  });
};

module.exports = { register, login, getProfile };
