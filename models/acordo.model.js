const pool = require('../config/db');

async function GravarAcordo(idproposta, iddivida) {
  await pool.query('UPDATE dividas SET IND_STATUS = 2, ID_PROPOSTA_ACEITA= ?  WHERE cod_divida = ?', [idproposta, iddivida]);
}

module.exports = {GravarAcordo};






