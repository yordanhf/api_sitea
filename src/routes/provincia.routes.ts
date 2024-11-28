import { Router } from 'express';
import ProvinciaController from '../controllers/provincia.controller';
import authMiddleware from '../middlewares/auth.middleware';

const router = Router();

/**
 * @swagger
 * components:
 *   schemas:
 *      Provincia:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           description: ID auto-incremental de la provincia
 *         nombre:
 *           type: string
 *           description: Nombre de la provincia
 *       required:
 *         - nombre
 */

/**
 * @swagger
 * /api/provincia:
 *   get:
 *     summary: Obtener todas las provincias
 *     tags: [provincia]
 *     responses:
 *       200:
 *         description: Lista de provincias
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Provincia'
 */
router.get('/', ProvinciaController.getAllProvincia);

/**
 * @swagger
 * /api/provincia/{id}:
 *   get:
 *     summary: Obtener una provincia por ID
 *     tags: [provincia]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID de la provincia
 *     responses:
 *       200:
 *         description: provincia encontrada
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Provincia'
 *       404:
 *         description: provincia no encontrada
 */
router.get('/:id', ProvinciaController.getProvinciaById);

/**
 * @swagger
 * /api/provincia:
 *   post:
 *     summary: Crear una nueva provincia
 *     tags: [provincia]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Provincia'
 *     responses:
 *       201:
 *         description: provincia creada con éxito
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Provincia'
 */
router.post('/', authMiddleware, ProvinciaController.createProvincia);

/**
 * @swagger
 * /api/provincia/{id}:
 *   put:
 *     summary: Actualizar una provincia por ID
 *     tags: [provincia]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID de la provincia
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Provincia'
 *     responses:
 *       200:
 *         description: provincia actualizada con éxito
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Provincia'
 *       404:
 *         description: provincia no encontrada
 */
router.put('/:id', authMiddleware, ProvinciaController.updateProvincia);

/**
 * @swagger
 * /api/provincia/{id}:
 *   delete:
 *     summary: Eliminar una provincia por ID
 *     tags: [provincia]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID de la provincia a eliminar
 *     responses:
 *       200:
 *         description: Provincia eliminada con éxito
 *       404:
 *         description: Provincia no encontrada
 */
router.delete('/:id', authMiddleware, ProvinciaController.deleteProvincia);

export default router;