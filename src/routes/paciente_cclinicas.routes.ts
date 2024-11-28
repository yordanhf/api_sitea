// src/routes/Paciente_cclinica.routes.ts
import { Router } from 'express';
import Paciente_CClinicasController from '../controllers/paciente_cclinicas.controller';
import authMiddleware from '../middlewares/auth.middleware';

const router = Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     Paciente_CClinicas:
 *       type: object
 *       properties:
 *         id:
 *          type: integer
 *          description: ID autoincremental del paciente_cclinica
 *         pacienteId:
 *           type: integer
 *           description: ID del paciente
 *         cClinicaId:     
 *           type: integer
 *           description: ID de la caracteristica clinica
 *       required:
 *         - pacienteId
 *         - cClinicaId
 */

/**
 * @swagger
 * /api/Paciente_cclinicas:
 *   get:
 *     summary: Obtener todos los Paciente_cclinicas
 *     tags: [Paciente_cclinicas]
 *     responses:
 *       200:
 *         description: Lista de Paciente_cclinicas
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Paciente_CClinicas'
 */
router.get('/', Paciente_CClinicasController.getAllPaciente_CClinicas);

/**
 * @swagger
 * /api/Paciente_cclinicas/{id}:
 *   get:
 *     summary: Obtener un Paciente_cclinica por ID
 *     tags: [Paciente_cclinicas]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del Paciente_cclinica
 *     responses:
 *       200:
 *         description: Paciente_cclinica encontrado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Paciente_CClinicas'
 *       404:
 *         description: Paciente_cclinica no encontrado
 */
router.get('/:id', Paciente_CClinicasController.getPaciente_CClinicasById);

/**
 * @swagger
 * /api/Paciente_cclinicas/paciente/{pacienteId}:
 *   get:
 *     summary: Obtener todas las caracteristicas clinicas de un paciente
 *     tags: [Paciente_cclinicas]
 *     parameters:
 *       - in: path
 *         name: pacienteId
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del paciente
 *     responses:
 *       200:
 *         description: Lista de caracteristicas clinicas del paciente
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Paciente_CClinicas'
 *       404:
 *         description: Paciente no encontrado
 */
router.get('/paciente/:pacienteId', Paciente_CClinicasController.getPaciente_CClinicasByPacienteId);

/**
 * @swagger
 * /api/Paciente_cclinicas:
 *   post:
 *     summary: Crear un nuevo Paciente_cclinica
 *     tags: [Paciente_cclinicas]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Paciente_CClinicas'
 *     responses:
 *       201:
 *         description: Paciente_cclinica creado con éxito
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Paciente_CClinicas'
 */
router.post('/', authMiddleware, Paciente_CClinicasController.createPaciente_CClinicas);

/**
 * @swagger
 * /api/Paciente_cclinicas/{id}:
 *   put:
 *     summary: Actualizar un Paciente_cclinica por ID
 *     tags: [Paciente_cclinicas]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del Paciente_cclinica
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Paciente_CClinicas'
 *     responses:
 *       200:
 *         description: Paciente_cclinica actualizado con éxito
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Paciente_CClinicas'
 *       404:
 *         description: Paciente_cclinica no encontrado
 */
router.put('/:id', authMiddleware, Paciente_CClinicasController.updatePaciente_CClinicas);

/**
 * @swagger
 * /api/Paciente_cclinicas/{id}:
 *   delete:
 *     summary: Eliminar un Paciente_cclinica por ID
 *     tags: [Paciente_cclinicas]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del Paciente_cclinica a eliminar
 *     responses:
 *       200:
 *         description: Paciente_cclinica eliminado con éxito
 *       404:
 *         description: Paciente_cclinica no encontrado
 */
router.delete('/:id', authMiddleware, Paciente_CClinicasController.deletePaciente_CClinicas);

export default router;
