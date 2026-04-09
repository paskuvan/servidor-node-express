const router = require('express').Router();
const upload = require('../middlewares/upload.middleware');

router.post('/upload', upload.single('file'), (req, res) => {
  res.json({ file: req.file });
});

module.exports = router;