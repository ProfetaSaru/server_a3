/**
 * @swagger
 * /cadastro:
 *   post:
 *     summary: Cadastra um novo cliente
 *     tags: [Cliente]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [cpf, password, name, birth, mother, fones, address]
 *             properties:
 *               cpf:
 *                 type: string
 *               password:
 *                 type: string
 *               name:
 *                 type: string
 *               birth:
 *                 type: string
 *                 format: date
 *               mother:
 *                 type: string
 *               father:
 *                 type: string
 *               fones:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     ddd: { type: string }
 *                     fone: { type: string }
 *                     type: { type: string }
 *               address:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     address: { type: string }
 *                     type: { type: string }
 *     responses:
 *       200:
 *         description: Registration successful
 *       500:
 *         description: Registration error
 */

/**
 * @swagger
 * /trocarsenha:
 *   put:
 *     summary: Troca a senha do cliente
 *     tags: [Cliente]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [cpf, password]
 *             properties:
 *               cpf:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Password updated
 *       500:
 *         description: Error updating password
 */