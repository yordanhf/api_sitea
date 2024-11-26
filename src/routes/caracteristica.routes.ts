import { Router } from 'express';
import CaracteristicaController from '../controllers/caracteristica.controller';

const router = Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     Caracteristicas:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           description: ID auto-incremental de la caracteristica
 *         nombre:
 *           type: string
 *           description: Nombre de la caracteristica
 *       required:
 *         - nombre
 */

/**
 * @swagger
 * /api/caracteristicas:
 *   get:
 *     summary: Obtener todas las caracteristicas
 *     tags: [Caracteristicas]
 *     responses:
 *       200:
 *         description: Lista de caracteristicas
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Caracteristicas'
 */
router.get('/', CaracteristicaController.getAllCaracteristica);

/**
 * @swagger
 * /api/caracteristicas/{id}:
 *   get:
 *     summary: Obtener una caracteristica por ID
 *     tags: [Caracteristicas]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID de la caracteristica
 *     responses:
 *       200:
 *         description: caracteristica encontrada
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Caracteristicas'
 *       404:
 *         description: Caracteristica no encontrada
 */
router.get('/:id', CaracteristicaController.getCaracteristicaById);

/**
 * @swagger
 * /api/caracteristicas:
 *   post:
 *     summary: Crear una nueva caracteristica
 *     tags: [Caracteristicas]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Caracteristicas'
 *     responses:
 *       201:
 *         description: Caracteristica creada con éxito
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Caracteristicas'
 */
router.post('/', CaracteristicaController.createCaracteristica);

/**
 * @swagger
 * /api/caracteristicas/{id}:
 *   put:
 *     summary: Actualizar una caracteristica por ID
 *     tags: [Caracteristicas]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID de la caracteristica
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Caracteristicas'
 *     responses:
 *       200:
 *         description: Caracteristica actualizada con éxito
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Caracteristicas'
 *       404:
 *         description: caracteristica no encontrada
 */
router.put('/:id',CaracteristicaController.updateCaracteristica);

/**
 * @swagger
 * /api/caracteristicas/{id}:
 *   delete:
 *     summary: Eliminar una caracteristica por ID
 *     tags: [Caracteristicas]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID de la caracteristica a eliminar
 *     responses:
 *       200:
 *         description: caracteristica eliminada con éxito
 *       404:
 *         description: caracteristica no encontrada
 */
router.delete('/:id', CaracteristicaController.deleteCaracteristica);

export default router;
