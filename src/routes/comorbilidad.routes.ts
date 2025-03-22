import { Router } from 'express';
import ComorbilidadController from '../controllers/comorbilidad.controller';
import authMiddleware from '../middlewares/auth.middleware';

const router = Router();

/**
 * @swagger
 * components:
 *   schemas:
 *      Comorbilidades:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           description: ID de la  comorbilidad
 *         nombre:
 *           type: string
 *           description: Nombre de la comorbilidad
 *       required:
 *         - nombre
 */

/**
 * @swagger
 * /api/comorbilidades:
 *   get:
 *     summary: Obtener todas las comorbilidad
 *     tags: [Comorbilidades]
 *     responses:
 *       200:
 *         description: Lista de comorbilidad
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Comorbilidades'
 */
router.get('/', ComorbilidadController.getAllComorbilidad);

/**
 * @swagger
 * /api/comorbilidades/{id}:
 *   get:
 *     summary: Obtener una comorbilidad por ID
 *     tags: [Comorbilidades]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID de la comorbilidad
 *     responses:
 *       200:
 *         description: comorbilidad encontrada
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Comorbilidades'
 *       404:
 *         description: comorbilidad no encontrada
 */
router.get('/:id', ComorbilidadController.getComorbilidadById);

/**
 * @swagger
 * /api/comorbilidades:
 *   post:
 *     summary: Crear una nueva comorbilidad
 *     tags: [Comorbilidades]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Comorbilidades'
 *     responses:
 *       201:
 *         description: comorbilidad creada con éxito
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Comorbilidades'
 */
router.post('/', authMiddleware, ComorbilidadController.createComorbilidad);

/**
 * @swagger
 * /api/comorbilidades/{id}:
 *   put:
 *     summary: Actualizar una comorbilidad por ID
 *     tags: [Comorbilidades]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID de la comorbilidad
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Comorbilidades'
 *     responses:
 *       200:
 *         description: comorbilidad actualizada con éxito
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Comorbilidades'
 *       404:
 *         description: comorbilidad no encontrada
 */
router.put('/:id', authMiddleware, ComorbilidadController.updateComorbilidad);

/**
 * @swagger
 * /api/comorbilidades/{id}:
 *   delete:
 *     summary: Eliminar una comorbilidad por ID
 *     tags: [Comorbilidades]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID de la comorbilidad a eliminar
 *     responses:
 *       200:
 *         description: comorbilidad eliminada con éxito
 *       404:
 *         description: comorbilidad no encontrada
 */
router.delete('/:id', authMiddleware, ComorbilidadController.deleteComorbilidad);

export default router;