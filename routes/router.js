const { Router } = require('express');

const router = Router();

router.get('/', homeController.getHome);
router.get('/status', statusController.getStatus);

module.exports = router;