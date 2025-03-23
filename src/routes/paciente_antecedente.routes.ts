// src/routes/Paciente_cclinica.routes.ts
import { Router } from 'express';
import Paciente_AntecedenteController from '../controllers/paciente_antecedente.controller';
import authMiddleware from '../middlewares/auth.middleware';

const router = Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     Paciente_Antecedente:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           description: ID del paciente_antecedente
 *         pacienteId:
 *           type: string
 *           description: ID del paciente
 *         antecedenteId:
 *           type: string
 *           description: ID del antecedente
 *       required:
 *         - pacienteId
 *         - antecedenteId
 */

/**
 * @swagger
 * /api/Paciente_Antecedente:
 *   get:
 *     summary: Obtener todos los Paciente_Antecedente
 *     tags: [Paciente_Antecedente]
 *     responses:
 *       200:
 *         description: Lista de Paciente_Antecedente
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Paciente_Antecedente'
 */
router.get('/', Paciente_AntecedenteController.getAllPaciente_Antecedente);

/**
 * @swagger
 * /api/Paciente_Antecedente/{id}:
 *   get:
 *     summary: Obtener un Paciente_antecedente por ID
 *     tags: [Paciente_Antecedente]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID del Paciente_antecedente
 *     responses:
 *       200:
 *         description: Paciente_antecedente encontrado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Paciente_Antecedente'
 *       404:
 *         description: Paciente_antecedente no encontrado
 */
router.get('/:id', Paciente_AntecedenteController.getPaciente_AntecedenteById);

/**
 * @swagger
 * /api/Paciente_Antecedente/paciente/{pacienteId}:
 *   get:
 *     summary: Obtener todos los antecedentes de un paciente
 *     tags: [Paciente_Antecedente]
 *     parameters:
 *       - in: path
 *         name: pacienteId
 *         required: true
 *         schema:
 *           type: string
 *         description: ID del paciente
 *     responses:
 *       200:
 *         description: Lista de antecedentes del paciente
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Paciente_Antecedente'
 *       404:
 *         description: Paciente no encontrado
 */
router.get('/paciente/:pacienteId', Paciente_AntecedenteController.getPaciente_AntecedenteByPacienteId);

/**
 * @swagger
 * /api/Paciente_Antecedente:
 *   post:
 *     summary: Crear un nuevo Paciente_antecedente
 *     tags: [Paciente_Antecedente]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Paciente_Antecedente'
 *     responses:
 *       201:
 *         description: Paciente_antecedente creado con éxito
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Paciente_Antecedente'
 */
router.post('/', authMiddleware, Paciente_AntecedenteController.createPaciente_Antecedente);

/**
 * @swagger
 * /api/Paciente_Antecedente/{id}:
 *   put:
 *     summary: Actualizar un Paciente_antecedente por ID
 *     tags: [Paciente_Antecedente]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID del Paciente_antecedente
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Paciente_Antecedente'
 *     responses:
 *       200:
 *         description: Paciente_antecedente actualizado con éxito
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Paciente_Antecedente'
 *       404:
 *         description: Paciente_antecedente no encontrado
 */
router.put('/:id', authMiddleware, Paciente_AntecedenteController.updatePaciente_Antecedente);

/**
 * @swagger
 * /api/Paciente_Antecedente/{id}:
 *   delete:
 *     summary: Eliminar un Paciente_antecedente por ID
 *     tags: [Paciente_Antecedente]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID del Paciente_antecedente a eliminar
 *     responses:
 *       200:
 *         description: Paciente_antecedente eliminado con éxito
 *       404:
 *         description: Paciente_antecedente no encontrado
 */
router.delete('/:id', authMiddleware, Paciente_AntecedenteController.deletePaciente_Antecedente);

export default router;
