const User = require('../models/User');
const jwt = require("jsonwebtoken");
const bcrypt = require('bcrypt');

const register = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
      throw new Error("Fill all fields!");
    }

    const isExistingUsername = await User.findOne({ username });
    if (isExistingUsername) {
      throw new Error("Username is already taken");
    }

    const isExistingEmail = await User.findOne({ email });
    if (isExistingEmail) {
      throw new Error("Email is already registered");
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({ username, email, password: hashedPassword });

    const payload = { id: user._id, username: user.username };
    const { password: userPassword, ...others } = user.toObject();

    const token = jwt.sign(payload, process.env.JWT_SECRET);

    return res.status(201).json({ token, ...others });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      throw new Error("Fill all fields!");
    }

    const user = await User.findOne({ email });
    if (!user) {
      throw new Error("Wrong credentials");
    }

    const comparePass = await bcrypt.compare(password, user.password);
    if (!comparePass) {
      throw new Error("Wrong credentials");
    }

    const payload = { id: user._id, username: user.username };
    const { password: userPassword, ...others } = user.toObject();

    const token = jwt.sign(payload, process.env.JWT_SECRET);

    return res.status(200).json({ token, ...others });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = {
  register,
  login
};
