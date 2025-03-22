import { Router } from 'express';
import ExamenController from '../controllers/examen.controller';
import authMiddleware from '../middlewares/auth.middleware';

const router = Router();

/**
 * @swagger
 * components:
 *   schemas:
 *      examenes:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           description: ID del examen
 *         nombre:
 *           type: string
 *           description: Nombre del examen
 *       required:
 *         - nombre
 */

/**
 * @swagger
 * /api/examenes:
 *   get:
 *     summary: Obtener todos los examenes
 *     tags: [examenes]
 *     responses:
 *       200:
 *         description: Lista de examenes
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/examenes'
 */
router.get('/', ExamenController.getAllExamen);

/**
 * @swagger
 * /api/examenes/{id}:
 *   get:
 *     summary: Obtener un examen por ID
 *     tags: [examenes]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID del examen
 *     responses:
 *       200:
 *         description: examen encontrado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/examenes'
 *       404:
 *         description: examen no encontrado
 */
router.get('/:id', ExamenController.getExamenById);

/**
 * @swagger
 * /api/examenes:
 *   post:
 *     summary: Crear un nuevo examen
 *     tags: [examenes]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/examenes'
 *     responses:
 *       201:
 *         description: examen creado con éxito
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/examenes'
 */
router.post('/', authMiddleware, ExamenController.createExamen);

/**
 * @swagger
 * /api/examenes/{id}:
 *   put:
 *     summary: Actualizar un examen por ID
 *     tags: [examenes]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID del examen
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/examenes'
 *     responses:
 *       200:
 *         description: examen actualizado con éxito
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/examenes'
 *       404:
 *         description: examen no encontrado
 */
router.put('/:id', authMiddleware, ExamenController.updateExamen);

/**
 * @swagger
 * /api/examenes/{id}:
 *   delete:
 *     summary: Eliminar una examen por ID
 *     tags: [examenes]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID del examen a eliminar
 *     responses:
 *       200:
 *         description: Examen eliminado con éxito
 *       404:
 *         description: Examen no encontrado
 */
router.delete('/:id', authMiddleware, ExamenController.deleteExamen);

export default router;