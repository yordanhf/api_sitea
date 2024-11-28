import { Router } from 'express';
import FortalezaController from '../controllers/fortaleza.controller';
import authMiddleware from '../middlewares/auth.middleware';

const router = Router();

/**
 * @swagger
 * components:
 *   schemas:
 *      Fortaleza:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           description: ID auto-incremental de la fortaleza
 *         nombre:
 *           type: string
 *           description: Nombre de la fortaleza
 *       required:
 *         - nombre
 */

/**
 * @swagger
 * /api/fortaleza:
 *   get:
 *     summary: Obtener todas las fortalezas
 *     tags: [fortaleza]
 *     responses:
 *       200:
 *         description: Lista de fortalezas
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Fortaleza'
 */
router.get('/', FortalezaController.getAllFortaleza);

/**
 * @swagger
 * /api/fortaleza/{id}:
 *   get:
 *     summary: Obtener una fortaleza por ID
 *     tags: [fortaleza]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID de la fortaleza
 *     responses:
 *       200:
 *         description: fortaleza encontrada
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Fortaleza'
 *       404:
 *         description: fortaleza no encontrada
 */
router.get('/:id', FortalezaController.getFortalezaById);

/**
 * @swagger
 * /api/fortaleza:
 *   post:
 *     summary: Crear una nueva fortaleza
 *     tags: [fortaleza]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Fortaleza'
 *     responses:
 *       201:
 *         description: fortaleza creada con éxito
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Fortaleza'
 */
router.post('/', authMiddleware, FortalezaController.createFortaleza);

/**
 * @swagger
 * /api/fortaleza/{id}:
 *   put:
 *     summary: Actualizar una fortaleza por ID
 *     tags: [fortaleza]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID de la fortaleza
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Fortaleza'
 *     responses:
 *       200:
 *         description: fortaleza actualizada con éxito
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Fortaleza'
 *       404:
 *         description: fortaleza no encontrada
 */
router.put('/:id', authMiddleware,  FortalezaController.updateFortaleza);

/**
 * @swagger
 * /api/fortaleza/{id}:
 *   delete:
 *     summary: Eliminar una fortaleza por ID
 *     tags: [fortaleza]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID de la fortaleza a eliminar
 *     responses:
 *       200:
 *         description: Fortaleza eliminada con éxito
 *       404:
 *         description: Fortaleza no encontrada
 */
router.delete('/:id', authMiddleware, FortalezaController.deleteFortaleza);

export default router;