const express = require('express');
const router = express.Router();
const dividaController = require('../controllers/divida.controller');
const authMiddleware = require('../middlewares/auth.middleware');

router.get('/divida', authMiddleware, dividaController.divida);
router.get('/propostas', authMiddleware, dividaController.propostas);

module.exports = router;
