// src/routes/medicamento.routes.ts
import { Router } from 'express';
import MedicamentosController from '../controllers/medicamentos.controller';

const router = Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     Medicamentos:
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
 * /api/medicamentos:
 *   get:
 *     summary: Obtener todos los medicamentos
 *     tags: [Medicamentos]
 *     responses:
 *       200:
 *         description: Lista de medicamentos
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Medicamentos'
 */
router.get('/', MedicamentosController.getAllMedicamentos);

/**
 * @swagger
 * /api/medicamentos/{id}:
 *   get:
 *     summary: Obtener un medicamento por ID
 *     tags: [Medicamentos]
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
 *               $ref: '#/components/schemas/Medicamentos'
 *       404:
 *         description: Medicamento no encontrado
 */
router.get('/:id', MedicamentosController.getMedicamentosById);

/**
 * @swagger
 * /api/medicamentos:
 *   post:
 *     summary: Crear un nuevo medicamento
 *     tags: [Medicamentos]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Medicamentos'
 *     responses:
 *       201:
 *         description: Medicamento creado con éxito
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Medicamentos'
 */
router.post('/', MedicamentosController.createMedicamentos);

/**
 * @swagger
 * /api/medicamentos/{id}:
 *   put:
 *     summary: Actualizar un medicamento por ID
 *     tags: [Medicamentos]
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
 *             $ref: '#/components/schemas/Medicamentos'
 *     responses:
 *       200:
 *         description: Medicamento actualizado con éxito
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Medicamentos'
 *       404:
 *         description: Medicamento no encontrado
 */
router.put('/:id',MedicamentosController.updateMedicamentos);

/**
 * @swagger
 * /api/medicamentos/{id}:
 *   delete:
 *     summary: Eliminar un medicamento por ID
 *     tags: [Medicamentos]
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
router.delete('/:id', MedicamentosController.deleteMedicamentos);

export default router;
