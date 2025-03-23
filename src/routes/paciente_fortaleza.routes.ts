// src/routes/Paciente_cclinica.routes.ts
import { Router } from 'express';
import Paciente_FortalezaController from '../controllers/paciente_fortaleza.controller';
import authMiddleware from '../middlewares/auth.middleware';

const router = Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     Paciente_Fortaleza:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           description: ID del paciente_fortaleza
 *         pacienteId:
 *           type: string
 *           description: ID del paciente
 *         fortalezaId:
 *           type: string
 *           description: ID de la fortaleza
 *       required:
 *         - pacienteId
 *         - fortalezaId
 */

/**
 * @swagger
 * /api/Paciente_Fortaleza:
 *   get:
 *     summary: Obtener todos los Paciente_Fortaleza
 *     tags: [Paciente_Fortaleza]
 *     responses:
 *       200:
 *         description: Lista de Paciente_Fortaleza
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Paciente_Fortaleza'
 */
router.get('/', Paciente_FortalezaController.getAllPaciente_Fortaleza);

/**
 * @swagger
 * /api/Paciente_Fortaleza/{id}:
 *   get:
 *     summary: Obtener un Paciente_fortaleza por ID
 *     tags: [Paciente_Fortaleza]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID del Paciente_fortaleza
 *     responses:
 *       200:
 *         description: Paciente_fortaleza encontrado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Paciente_Fortaleza'
 *       404:
 *         description: Paciente_fortaleza no encontrado
 */
router.get('/:id', Paciente_FortalezaController.getPaciente_FortalezaById);

/**
 * @swagger
 * /api/Paciente_Fortaleza/paciente/{pacienteId}:
 *   get:
 *     summary: Obtener todas las fortalezas de un paciente
 *     tags: [Paciente_Fortaleza]
 *     parameters:
 *       - in: path
 *         name: pacienteId
 *         required: true
 *         schema:
 *           type: string
 *         description: ID del paciente
 *     responses:
 *       200:
 *         description: Lista de fortalezas del paciente
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Paciente_Fortaleza'
 *       404:
 *         description: Paciente no encontrado
 */
router.get('/paciente/:pacienteId', Paciente_FortalezaController.getPaciente_FortalezaByPacienteId);

/**
 * @swagger
 * /api/Paciente_Fortaleza:
 *   post:
 *     summary: Crear un nuevo Paciente_fortaleza
 *     tags: [Paciente_Fortaleza]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Paciente_Fortaleza'
 *     responses:
 *       201:
 *         description: Paciente_fortaleza creado con éxito
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Paciente_Fortaleza'
 */
router.post('/', authMiddleware, Paciente_FortalezaController.createPaciente_Fortaleza);

/**
 * @swagger
 * /api/Paciente_Fortaleza/{id}:
 *   put:
 *     summary: Actualizar un Paciente_fortaleza por ID
 *     tags: [Paciente_Fortaleza]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID del Paciente_fortaleza
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Paciente_Fortaleza'
 *     responses:
 *       200:
 *         description: Paciente_fortaleza actualizado con éxito
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Paciente_Fortaleza'
 *       404:
 *         description: Paciente_fortaleza no encontrado
 */
router.put('/:id', authMiddleware, Paciente_FortalezaController.updatePaciente_Fortaleza);

/**
 * @swagger
 * /api/Paciente_Fortaleza/{id}:
 *   delete:
 *     summary: Eliminar un Paciente_fortaleza por ID
 *     tags: [Paciente_Fortaleza]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID del Paciente_fortaleza a eliminar
 *     responses:
 *       200:
 *         description: Paciente_fortaleza eliminado con éxito
 *       404:
 *         description: Paciente_fortaleza no encontrado
 */
router.delete('/:id', authMiddleware, Paciente_FortalezaController.deletePaciente_Fortaleza);

export default router;
