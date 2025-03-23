import { Router } from 'express';
import Examenes_complementariosController from '../controllers/examenes_complementarios.controller';
import authMiddleware from '../middlewares/auth.middleware';

const router = Router();

/**
 * @swagger
 * components:
 *   schemas:
 *      examenes_complementarios:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           description: ID del paciente
 *         pacienteId:
 *           type: string
 *           description: ID del paciente asociado al examen
 *         examenId:
 *           type: string
 *           description: ID del examen complementario asociado
 *         fecha:
 *           type: string
 *           format: date
 *           description: Fecha del examen en formato YYYY-MM-DD
 *         resultado:
 *           type: string
 *           description: resultado del examen
 *       required:
 *         - pacienteId
 *         - examenId
 *         - fecha
 *         
 */

/**
 * @swagger
 * /api/examenes_complementarios:
 *   get:
 *     summary: Obtener todos los examenes complementarios
 *     tags: [examenes_complementarios]
 *     responses:
 *       200:
 *         description: Lista de examenes complementarios
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/examenes_complementarios'
 */
router.get('/', Examenes_complementariosController.getAllExamenes_complementarios);

/**
 * @swagger
 * /api/examenes_complementarios/{id}:
 *   get:
 *     summary: Obtener un examen complementario por ID
 *     tags: [examenes_complementarios]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID del examen
 *     responses:
 *       200:
 *         description: examen complementario encontrado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/examenes_complementarios'
 *       404:
 *         description: examen complementario no encontrado
 */
router.get('/:id', Examenes_complementariosController.getExamenes_complementariosById);

/**
 * @swagger
 * /api/examenes_complementarios/paciente/{pacienteId}:
 *   get:
 *     summary: Obtener todos los examenes complementarios de un paciente
 *     tags: [examenes_complementarios]
 *     parameters:
 *       - in: path
 *         name: pacienteId
 *         required: true
 *         schema:
 *           type: string
 *         description: ID del paciente
 *     responses:
 *       200:
 *         description: Lista de examenes complementarios del paciente
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/examenes_complementarios'
 *       404:
 *         description: Paciente no existe
 */
router.get('/paciente/:pacienteId', Examenes_complementariosController.getExamenes_complementariosByPacienteId);

/**
 * @swagger
 * /api/examenes_complementarios:
 *   post:
 *     summary: Crear un nuevo examen complementario
 *     tags: [examenes_complementarios]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/examenes_complementarios'
 *     responses:
 *       201:
 *         description: examen complementario creado con éxito
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/examenes_complementarios'
 */
router.post('/', authMiddleware, Examenes_complementariosController.createExamenes_complementarios);

/**
 * @swagger
 * /api/examenes_complementarios/{id}:
 *   put:
 *     summary: Actualizar un examen complementario por ID
 *     tags: [examenes_complementarios]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID del examen complementario
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/examenes_complementarios'
 *     responses:
 *       200:
 *         description: examen complementario actualizado con éxito
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/examenes_complementarios'
 *       404:
 *         description: examen complementario no encontrado
 */
router.put('/:id', authMiddleware, Examenes_complementariosController.updateExamenes_complementarios);

/**
 * @swagger
 * /api/examenes_complementarios/{id}:
 *   delete:
 *     summary: Eliminar una examen complementario por ID
 *     tags: [examenes_complementarios]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID del examen complementario a eliminar
 *     responses:
 *       200:
 *         description: Examen complementario eliminado con éxito
 *       404:
 *         description: Examen complementario no encontrado
 */
router.delete('/:id', authMiddleware, Examenes_complementariosController.deleteExamenes_complementarios);

export default router;