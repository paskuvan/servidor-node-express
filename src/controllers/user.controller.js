const User = require('../models/user.model');

exports.getUsers = async (req, res) => {
  const users = await User.find();
  res.json({ status: 'success', data: users });
};

exports.createUser = async (req, res) => {
  const user = await User.create(req.body);
  res.json({ status: 'success', data: user });
};

exports.updateUser = async (req, res) => {
  const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json({ status: 'success', data: user });
};

exports.deleteUser = async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  res.json({ status: 'success', message: 'Eliminado' });
};