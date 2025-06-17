const DividaModel = require('../models/divida.model');

exports.divida = async (req, res) => {
    try {
      const {cpf} = req.query;
      const result = await DividaModel.getDividasByCpf(cpf);
      if (!result.length) {
        return res.status(404).json({ status: 404, msg: 'No debts found'});
      }
  
      res.json({ status: 200, dados: result });
    } catch (err) {
      res.status(500).json({ status: 500, msg: 'Error retrieving debts' });
    }
  };

  exports.propostas = async (req, res) => {
    try {
      const {iddivida} = req.query;
      const result = await DividaModel.getPropostasByDivida(iddivida);
      if (!result.length) {
        return res.status(404).json({ status: 404, msg: 'No proposal found'});
      }
  
      res.json({ status: 200, dados: result });
    } catch (err) {
      res.status(500).json({ status: 500, msg: 'Error retrieving proposal' });
    }
  };