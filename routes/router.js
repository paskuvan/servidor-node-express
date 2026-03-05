const { Router } = require('express');

const homeController = require('../controllers/homeController');
const statusController = require('../controllers/statusController');
const router = Router();

router.get('/', homeController.getHome);
router.get('/status', statusController.getStatus);

module.exports = router;