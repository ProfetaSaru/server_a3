const pool = require('../config/db');

async function findByCpfAndPassword(cpf, password) {
  const [rows] = await pool.query('SELECT * FROM clientes WHERE identif = ? AND password = ?', [cpf, password]);
  return rows;
}

async function insertCliente(cliente) {
  const { cpf, name, password, birth, mother, father } = cliente;
  await pool.query(
    'INSERT INTO clientes (identif, name, password, birth, mother, father) VALUES (?, ?, ?, ?, ?, ?)',
    [cpf, name, password, birth, mother, father]
  );
}

async function insertTelefone(cliente) {
    const { cpf, ddd, fone, type } = cliente;
    await pool.query(
      'INSERT INTO phone (identif, ddd, fone, type) VALUES (?, ?, ?, ?)',
      [cpf, ddd, fone, type]
    );
  }

async function insertEndereco(cliente) {
    const { cpf, endereco, tipo } = cliente;
    await pool.query(
      'INSERT INTO address (identif, address, type) VALUES(?, ?, ?)',
      [cpf, endereco, tipo]
    );
  }

async function updatePassword(cpf, newPassword) {
  await pool.query('UPDATE clientes SET password = ? WHERE identif = ?', [newPassword, cpf]);
}

module.exports = { findByCpfAndPassword, insertCliente, updatePassword, insertTelefone, insertEndereco};
