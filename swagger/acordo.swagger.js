/**
 * @swagger
 * /gravaracordo:
 *   post:
 *     summary: Grava um novo acordo
 *     tags: [Acordo]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [idproposta, iddivida]
 *             properties:
 *               idproposta:
 *                 type: string
 *               iddivida:
 *                 type: string
 *     responses:
 *       200:
 *         description: Acordo gravado com sucesso
 *       500:
 *         description: Erro ao gravar acordo
 */