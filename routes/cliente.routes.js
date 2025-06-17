const express = require('express');
const router = express.Router();
const clienteController = require('../controllers/cliente.controller');
const authMiddleware = require('../middlewares/auth.middleware');
const { cadastro, trocarSenha } = require('../controllers/cliente.controller');

router.post('/cadastro', cadastro);
router.put('/trocarsenha', authMiddleware, trocarSenha);

module.exports = router;
