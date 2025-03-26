import { Router } from 'express';
import AlergiaController from '../controllers/alergias.controller';
import { authMiddleware, authorize } from '../middlewares/auth.middleware';

const router = Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     Alergia:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           description: ID de la alergia
 *         pacienteId:
 *           type: string
 *           description: ID del paciente asociado
 *         medicamentoId:
 *           type: string
 *           description: ID del medicamento asociado
 *       required:
 *         - pacienteId
 *         - medicamentoId
 */

/**
 * @swagger
 * /api/alergias:
 *   get:
 *     summary: Obtener todas las alergias
 *     tags: [Alergias]
 *     responses:
 *       200:
 *         description: Lista de todas las alergias
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Alergia'
 */
router.get('/', authMiddleware, AlergiaController.getAllAlergias);

/**
 * @swagger
 * /api/alergias/{id}:
 *   get:
 *     summary: Obtener una alergia por ID
 *     tags: [Alergias]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID de la alergia
 *     responses:
 *       200:
 *         description: Alergia encontrada
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Alergia'
 *       404:
 *         description: Alergia no encontrada
 */
router.get('/:id', authMiddleware, AlergiaController.getAlergiaById);

/**
 * @swagger
 * /api/alergias/paciente/{pacienteId}:
 *   get:
 *     summary: Obtener todas las alergias de un paciente
 *     tags: [Alergias]
 *     parameters:
 *       - in: path
 *         name: pacienteId
 *         required: true
 *         schema:
 *           type: string
 *         description: ID del paciente
 *     responses:
 *       200:
 *         description: Lista de alergias del paciente
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Alergia'
 *       404:
 *         description: Paciente no encontrado
 */
router.get('/paciente/:pacienteId', authMiddleware, AlergiaController.getAlergiasByPacienteId);

/**
 * @swagger
 * /api/alergias:
 *   post:
 *     summary: Crear una nueva alergia
 *     tags: [Alergias]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Alergia'
 *     responses:
 *       201:
 *         description: Alergia creada con éxito
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Alergia'
 */
router.post('/', authMiddleware, authorize(['admin_prov', 'admin_nac']), AlergiaController.createAlergia);

/**
 * @swagger
 * /api/alergias/{id}:
 *   put:
 *     summary: Actualizar una alergia por ID
 *     tags: [Alergias]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID de la alergia
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Alergia'
 *     responses:
 *       200:
 *         description: Alergia actualizada con éxito
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Alergia'
 *       404:
 *         description: Alergia no encontrada
 */
router.put('/:id', authMiddleware, authorize(['admin_prov', 'admin_nac']), AlergiaController.updateAlergia);

/**
 * @swagger
 * /api/alergias/{id}:
 *   delete:
 *     summary: Eliminar una alergia por ID
 *     tags: [Alergias]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID de la alergia
 *     responses:
 *       200:
 *         description: Alergia eliminada con éxito
 *       404:
 *         description: Alergia no encontrada
 */
router.delete('/:id', authMiddleware, authorize(['admin_prov', 'admin_nac']), AlergiaController.deleteAlergia);

export default router;



