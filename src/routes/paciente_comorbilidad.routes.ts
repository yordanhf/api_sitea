// src/routes/Paciente_cclinica.routes.ts
import { Router } from 'express';
import Paciente_ComorbilidadController from '../controllers/paciente_comorbilidad.controller';
import { authMiddleware, authorize } from '../middlewares/auth.middleware';

const router = Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     Paciente_Comorbilidad:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           description: ID del paciente_comorbilidad
 *         pacienteId:
 *           type: string
 *           description: ID del paciente
 *         comorbilidadId:
 *           type: string
 *           description: ID de la comorbilidad
 *       required:
 *         - pacienteId
 *         - comorbilidadId
 */

/**
 * @swagger
 * /api/Paciente_Comorbilidad:
 *   get:
 *     summary: Obtener todos los Paciente_Comorbilidad
 *     tags: [Paciente_Comorbilidad]
 *     responses:
 *       200:
 *         description: Lista de Paciente_Comorbilidad
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Paciente_Comorbilidad'
 */
router.get('/', authMiddleware, Paciente_ComorbilidadController.getAllPaciente_Comorbilidad);

/**
 * @swagger
 * /api/Paciente_Comorbilidad/{id}:
 *   get:
 *     summary: Obtener un Paciente_comorbilidad por ID
 *     tags: [Paciente_Comorbilidad]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID del Paciente_comorbilidad
 *     responses:
 *       200:
 *         description: Paciente_comorbilidad encontrado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Paciente_Comorbilidad'
 *       404:
 *         description: Paciente_comorbilidad no encontrado
 */
router.get('/:id', authMiddleware, Paciente_ComorbilidadController.getPaciente_ComorbilidadById);

/**
 * @swagger
 * /api/Paciente_Comorbilidad/paciente/{pacienteId}:
 *   get:
 *     summary: Obtener todas las comorbilidads de un paciente
 *     tags: [Paciente_Comorbilidad]
 *     parameters:
 *       - in: path
 *         name: pacienteId
 *         required: true
 *         schema:
 *           type: string
 *         description: ID del paciente
 *     responses:
 *       200:
 *         description: Lista de comorbilidads del paciente
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Paciente_Comorbilidad'
 *       404:
 *         description: Paciente no encontrado
 */
router.get('/paciente/:pacienteId', authMiddleware, Paciente_ComorbilidadController.getPaciente_ComorbilidadByPacienteId);

/**
 * @swagger
 * /api/Paciente_Comorbilidad:
 *   post:
 *     summary: Crear un nuevo Paciente_comorbilidad
 *     tags: [Paciente_Comorbilidad]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Paciente_Comorbilidad'
 *     responses:
 *       201:
 *         description: Paciente_comorbilidad creado con éxito
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Paciente_Comorbilidad'
 */
router.post('/', authMiddleware, authorize(['admin_prov', 'admin_nac']), Paciente_ComorbilidadController.createPaciente_Comorbilidad);

/**
 * @swagger
 * /api/Paciente_Comorbilidad/{id}:
 *   put:
 *     summary: Actualizar un Paciente_comorbilidad por ID
 *     tags: [Paciente_Comorbilidad]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID del Paciente_comorbilidad
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Paciente_Comorbilidad'
 *     responses:
 *       200:
 *         description: Paciente_comorbilidad actualizado con éxito
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Paciente_Comorbilidad'
 *       404:
 *         description: Paciente_comorbilidad no encontrado
 */
router.put('/:id', authMiddleware, authorize(['admin_prov', 'admin_nac']), Paciente_ComorbilidadController.updatePaciente_Comorbilidad);

/**
 * @swagger
 * /api/Paciente_Comorbilidad/{id}:
 *   delete:
 *     summary: Eliminar un Paciente_comorbilidad por ID
 *     tags: [Paciente_Comorbilidad]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID del Paciente_comorbilidad a eliminar
 *     responses:
 *       200:
 *         description: Paciente_comorbilidad eliminado con éxito
 *       404:
 *         description: Paciente_comorbilidad no encontrado
 */
router.delete('/:id', authMiddleware, authorize(['admin_prov', 'admin_nac']), Paciente_ComorbilidadController.deletePaciente_Comorbilidad);

export default router;
