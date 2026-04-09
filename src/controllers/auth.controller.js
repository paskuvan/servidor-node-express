const User = require('../models/user.model');
const jwt = require('jsonwebtoken');

// Registro
exports.register = async (req, res) => {
  const user = await User.create(req.body);

  res.json({
    status: 'success',
    message: 'Usuario creado',
    data: user
  });
};

// Login
exports.login = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (!user || user.password !== password) {
    return res.status(401).json({ message: 'Credenciales inválidas' });
  }

  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
    expiresIn: '1h'
  });

  res.json({
    status: 'success',
    token
  });
};