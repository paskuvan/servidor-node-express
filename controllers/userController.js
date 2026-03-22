const { User, Order } = require('../models');
const { sequelize } = require('../config/database');
const bcrypt = require('bcrypt');

const getUsers = async (req, res) => {
  try {
    const { nombre } = req.query;
    const where = nombre ? { nombre } : {};
    const users = await User.findAll({ where, attributes: { exclude: ['password'] } });
    res.json({ status: 'success', data: users });
  } catch (error) {
    res.status(500).json({ status: 'error', message: error.message });
  }
};

const createUser = async (req, res) => {
  const t = await sequelize.transaction();
  try {
    const { nombre, email, password } = req.body;
    const hash = await bcrypt.hash(password, 10);
    const user = await User.create({ nombre, email, password: hash }, { transaction: t });
    await Order.create({ detalle: 'Registro inicial', userId: user.id }, { transaction: t });
    await t.commit();
    const { password: _, ...data } = user.toJSON();
    res.status(201).json({ status: 'success', data });
  } catch (error) {
    await t.rollback();
    console.error('❌ Rollback ejecutado:', error.message);
    res.status(400).json({ status: 'error', message: error.message });
  }
};

const updateUser = async (req, res) => {
  try {
    const [updated] = await User.update(req.body, { where: { id: req.params.id } });
    if (!updated) return res.status(404).json({ status: 'error', message: 'Usuario no encontrado' });
    const user = await User.findByPk(req.params.id, { attributes: { exclude: ['password'] } });
    res.json({ status: 'success', data: user });
  } catch (error) {
    res.status(400).json({ status: 'error', message: error.message });
  }
};

const deleteUser = async (req, res) => {
  try {
    const deleted = await User.destroy({ where: { id: req.params.id } });
    if (!deleted) return res.status(404).json({ status: 'error', message: 'Usuario no encontrado' });
    res.json({ status: 'success', message: 'Usuario eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ status: 'error', message: error.message });
  }
};

const getUserWithOrders = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Order }],
    });
    if (!user) return res.status(404).json({ status: 'error', message: 'No encontrado' });
    res.json({ status: 'success', data: user });
  } catch (error) {
    res.status(500).json({ status: 'error', message: error.message });
  }
};

module.exports = { getUsers, createUser, updateUser, deleteUser, getUserWithOrders };