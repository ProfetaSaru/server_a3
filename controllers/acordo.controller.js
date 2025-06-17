const AcordoModel = require('../models/acordo.model');

exports.gravarAcordo = async (req, res) => {
  try {
    const {idproposta, iddivida} = req.body;
    await AcordoModel.GravarAcordo(idproposta, iddivida);
    res.json({ status: 200, msg: 'Acordo Gravado com Sucesso' });
  } catch (err) {
    res.status(err.status || 500).json({ status: err.status || 500, msg: err.msg || 'Erro ao gravar acordo' });
  }
};
  