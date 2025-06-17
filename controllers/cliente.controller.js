const md5 = require('md5');
const ClienteModel = require('../models/cliente.model');
const pool = require('../config/db');
const {checkPassword, validateDate} = require('../utils/validation');

exports.cadastro = async (req, res) => {
  const conn = await pool.getConnection();
  try {
    const { cpf, password, name, birth, mother, father, fones, address } = req.body;

    if (!fones?.length) throw { status: 400, msg: 'No phone provided' };
    if (!address?.length) throw { status: 400, msg: 'No address provided' };

    checkPassword(password);
    validateDate(birth);

    await conn.beginTransaction();

    await ClienteModel.insertCliente({ cpf, name, password: md5(password), birth, mother, father });

    for (const tel of fones) {
        ddd = tel.ddd;
        fone = tel.fone;
        type = tel.type;

    await ClienteModel.insertTelefone({cpf, ddd, fone, type});
    }

    for (const addr of address) {
        endereco = addr.address;
        tipo = addr.type;

    await ClienteModel.insertEndereco({cpf, endereco, tipo});  
    }

    await conn.commit();
    res.json({ status: 200, msg: 'Registration successful' });
  } catch (err) {
    await conn.rollback();
    res.status(err.status || 500).json({ status: err.status || 500, msg: err.msg || 'Registration error', msg: err.msg || err});
  } finally {
    conn.release();
  }
};

exports.trocarSenha = async (req, res) => {
  try {
    const { cpf, password } = req.body;
    checkPassword(password);
    await ClienteModel.updatePassword(cpf, md5(password));
    res.json({ status: 200, msg: 'Password updated' });
  } catch (err) {
    res.status(err.status || 500).json({ status: err.status || 500, msg: err.msg || 'Error updating password' });
  }
};
