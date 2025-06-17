/**
 * @swagger
 * /divida:
 *   get:
 *     summary: Consulta as dívidas pelo CPF
 *     tags: [Dívida]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: cpf
 *         in: query
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: JSON com a lista de dividas
 *       404:
 *         description: No debts found
 */

/**
 * @swagger
 * /propostas:
 *   get:
 *     summary: Consulta propostas associadas a uma dívida
 *     tags: [Dívida]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: iddivida
 *         in: query
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: JSON com a lista de propostas
 *       404:
 *         description: No proposal found
 */