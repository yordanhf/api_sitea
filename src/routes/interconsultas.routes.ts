import { Router } from 'express';
import InterconsultasController from '../controllers/interconsultas.controller';
import { authMiddleware, authorize } from '../middlewares/auth.middleware';

const router = Router();

/**
 * @swagger
 * components:
 *   schemas:
 *      Interconsultas:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           description: ID de la interconsulta
 *         nombre:
 *           type: string
 *           description: Nombre de la interconsulta
 *       required:
 *         - nombre
 */

/**
 * @swagger
 * /api/Interconsultas:
 *   get:
 *     summary: Obtener todas las interconsultas
 *     tags: [Interconsultas]
 *     responses:
 *       200:
 *         description: Lista de interconsultas
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Interconsultas'
 */
router.get('/', authMiddleware, InterconsultasController.getAllInterconsultas);

/**
 * @swagger
 * /api/Interconsultas/{id}:
 *   get:
 *     summary: Obtener una interconsulta por ID
 *     tags: [Interconsultas]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID de la Interconsulta
 *     responses:
 *       200:
 *         description: interconsulta encontrada
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Interconsultas'
 *       404:
 *         description: Interconsulta no encontrada
 */
router.get('/:id', authMiddleware, InterconsultasController.getInterconsultasById);

/**
 * @swagger
 * /api/Interconsultas:
 *   post:
 *     summary: Crear una nueva interconsulta
 *     tags: [Interconsultas]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Interconsultas'
 *     responses:
 *       201:
 *         description: interconsulta creada con éxito
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Interconsultas'
 */
router.post('/', authMiddleware, authorize(['admin_prov', 'admin_nac']), InterconsultasController.createInterconsultas);

/**
 * @swagger
 * /api/Interconsultas/{id}:
 *   put:
 *     summary: Actualizar una interconsulta por ID
 *     tags: [Interconsultas]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID de la interconsulta
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Interconsultas'
 *     responses:
 *       200:
 *         description: interconsulta actualizada con éxito
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Interconsultas'
 *       404:
 *         description: interconsulta no encontrada
 */
router.put('/:id', authMiddleware, authorize(['admin_prov', 'admin_nac']), InterconsultasController.updateInterconsultas);

/**
 * @swagger
 * /api/Interconsultas/{id}:
 *   delete:
 *     summary: Eliminar una interconsulta por ID
 *     tags: [Interconsultas]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID de la interconsulta a eliminar
 *     responses:
 *       200:
 *         description: interconsulta eliminada con éxito
 *       404:
 *         description: interconsulta no encontrada
 */
router.delete('/:id', authMiddleware, authorize(['admin_prov', 'admin_nac']), InterconsultasController.deleteInterconsultas);

export default router;