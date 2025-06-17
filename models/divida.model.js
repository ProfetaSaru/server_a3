const pool = require('../config/db');

async function getDividasByCpf(cpf) {
  const [rows] = await pool.query('SELECT * FROM dividas WHERE DSC_CPF = ? AND IND_STATUS = 1', [cpf]);
  return rows;
}

async function getPropostasByDivida(iddivida) {
    const [rows] = await pool.query('SELECT * FROM propostas WHERE id_divida = ?', [iddivida]);
    return rows;
  }

module.exports = {getDividasByCpf, getPropostasByDivida};






