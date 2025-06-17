/**
 * @swagger
 * /login:
 *   post:
 *     summary: Autenticação do cliente
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               cpf:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Login bem-sucedido com bearer token
 *       404:
 *         description: Usuário não encontrado
 */
