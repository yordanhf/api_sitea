// Definir las Rutas (interconsulta.routes.ts)
import { Router } from 'express';
import InterconsultaController from '../controllers/interconsulta.controller';
import { authMiddleware, authorize } from '../middlewares/auth.middleware';

const router = Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     Interconsulta:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           description: ID de la interconsulta
 *         pacienteId:
 *           type: string
 *           description: ID del paciente asociado a la interconsulta
 *         interconsultaId:
 *           type: string
 *           description: ID de la interconsulta asociada
 *         diagnostico:
 *           type: string
 *           description: Diagnóstico de la interconsulta
 *       required:
 *         - pacienteId
 *         - interconsultaId
 *         
 */

/**
 * @swagger
 * /api/interconsulta:
 *   get:
 *     summary: Obtener todas las interconsultas
 *     tags: [Interconsulta]
 *     responses:
 *       200:
 *         description: Lista de interconsultas
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Interconsulta'
 */
router.get('/', authMiddleware, InterconsultaController.getAllInterconsultas);

/**
 * @swagger
 * /api/interconsulta/{id}:
 *   get:
 *     summary: Obtener una interconsulta por ID
 *     tags: [Interconsulta]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID de la interconsulta
 *     responses:
 *       200:
 *         description: Interconsulta encontrada
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Interconsulta'
 *       404:
 *         description: Interconsulta no encontrada
 */
router.get('/:id', authMiddleware, InterconsultaController.getInterconsultaById);

/**
 * @swagger
 * /api/interconsulta:
 *   post:
 *     summary: Crear una nueva interconsulta
 *     tags: [Interconsulta]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Interconsulta'
 *     responses:
 *       201:
 *         description: Interconsulta creada con éxito
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Interconsulta'
 */
router.post('/', authMiddleware, authorize(['admin_prov', 'admin_nac']), InterconsultaController.createInterconsulta);

/**
 * @swagger
 * /api/interconsulta/{id}:
 *   put:
 *     summary: Actualizar una interconsulta por ID
 *     tags: [Interconsulta]
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
 *             $ref: '#/components/schemas/Interconsulta'
 *     responses:
 *       200:
 *         description: Interconsulta actualizada con éxito
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Interconsulta'
 *       404:
 *         description: Interconsulta no encontrada
 */
router.put('/:id', authMiddleware, authorize(['admin_prov', 'admin_nac']), InterconsultaController.updateInterconsulta);

/**
 * @swagger
 * /api/interconsulta/{id}:
 *   delete:
 *     summary: Eliminar una interconsulta por ID
 *     tags: [Interconsulta]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID de la interconsulta
 *     responses:
 *       200:
 *         description: Interconsulta eliminada con éxito
 *       404:
 *         description: Interconsulta no encontrada
 */
router.delete('/:id', authMiddleware, authorize(['admin_prov', 'admin_nac']), InterconsultaController.deleteInterconsulta);

//Otras rutas

/**
 * @swagger
 * /api/interconsulta/paciente/{pacienteId}:
 *   get:
 *     summary: Obtener todas las interconsultas de un paciente
 *     tags: [Interconsulta]
 *     parameters:
 *       - in: path
 *         name: pacienteId
 *         required: true
 *         schema:
 *           type: string
 *         description: ID del paciente
 *     responses:
 *       200:
 *         description: Lista de interconsultas del paciente
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Interconsulta'
 */
router.get('/paciente/:pacienteId', authMiddleware, InterconsultaController.getInterconsultasByPacienteId);


export default router;