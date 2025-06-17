const md5 = require('md5');
const jwt = require('jsonwebtoken');
const ClienteModel = require('../models/cliente.model');

exports.login = async (req, res) => {
  try {
    const { cpf, password } = req.body;
    const result = await ClienteModel.findByCpfAndPassword(cpf, md5(password));

    if (!result.length) {
      return res.status(404).json({ status: 404, msg: 'User not found' });
    }

    const token = jwt.sign({ cpf }, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.json({ status: 200, msg: 'Login successful', token });
  } catch (error) {
    res.status(500).json({ status: 500, msg: error.message });
  }
};
