const express = require('express');
const router = express.Router();
const gravarAcordoController = require('../controllers/acordo.controller');
const authMiddleware = require('../middlewares/auth.middleware');

router.post('/gravaracordo', authMiddleware, gravarAcordoController.gravarAcordo);

module.exports = router;
