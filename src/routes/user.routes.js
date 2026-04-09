const router = require('express').Router();
const auth = require('../middlewares/auth.middleware');
const controller = require('../controllers/user.controller');

router.get('/users', (req, res) => {
  res.json({ msg: 'funciona 🎉' });
});

router.get('/users', auth, controller.getUsers);
router.post('/users', controller.createUser);
router.put('/users/:id', auth, controller.updateUser);
router.delete('/users/:id', auth, controller.deleteUser);

module.exports = router;