// src/routes/medicamento.routes.ts
import { Router } from 'express';
import MedicamentoController from '../controllers/medicamento.controller';

const router = Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     Medicamento:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           description: ID auto-incremental del medicamento
 *         nombre:
 *           type: string
 *           description: Nombre del medicamento
 *       required:
 *         - nombre
 */

/**
 * @swagger
 * /api/medicamento:
 *   get:
 *     summary: Obtener todos los medicamentos
 *     tags: [Medicamento]
 *     responses:
 *       200:
 *         description: Lista de medicamentos
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Medicamento'
 */
router.get('/', MedicamentoController.getAllMedicamento);

/**
 * @swagger
 * /api/medicamento/{id}:
 *   get:
 *     summary: Obtener un medicamento por ID
 *     tags: [Medicamento]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del medicamento
 *     responses:
 *       200:
 *         description: medicamento encontrado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Medicamento'
 *       404:
 *         description: Medicamento no encontrado
 */
router.get('/:id', MedicamentoController.getMedicamentoById);

/**
 * @swagger
 * /api/medicamento:
 *   post:
 *     summary: Crear un nuevo medicamento
 *     tags: [Medicamento]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Medicamento'
 *     responses:
 *       201:
 *         description: Medicamento creado con éxito
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Medicamento'
 */
router.post('/', MedicamentoController.createMedicamento);

/**
 * @swagger
 * /api/medicamento/{id}:
 *   put:
 *     summary: Actualizar un medicamento por ID
 *     tags: [Medicamento]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del medicamento
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Medicamento'
 *     responses:
 *       200:
 *         description: Medicamento actualizado con éxito
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Medicamento'
 *       404:
 *         description: Medicamento no encontrado
 */
router.put('/:id',MedicamentoController.updateMedicamento);

/**
 * @swagger
 * /api/medicamento/{id}:
 *   delete:
 *     summary: Eliminar un medicamento por ID
 *     tags: [Medicamento]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del medicamento a eliminar
 *     responses:
 *       200:
 *         description: Medicamento eliminado con éxito
 *       404:
 *         description: Medicamento no encontrado
 */
router.delete('/:id', MedicamentoController.deleteMedicamento);

export default router;
