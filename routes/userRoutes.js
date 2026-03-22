const { Router } = require('express');
const router = Router();
const { getUsers, createUser, updateUser, deleteUser, getUserWithOrders } = require('../controllers/userController');

router.get('/', getUsers);
router.post('/', createUser);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);
router.get('/:id/pedidos', getUserWithOrders);

module.exports = router;