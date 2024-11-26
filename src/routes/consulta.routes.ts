import { Router } from 'express';
import ConsultaController from '../controllers/consulta.controller';

const router = Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     Consulta:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           description: ID auto-incremental de la consulta
 *         pacienteId:
 *           type: integer
 *           description: ID del paciente consultado
 *         fecha:
 *           type: string
 *           description: fecha de la consulta
 *         peso:
 *           type: string
 *           description: peso del paciente consultado
 *         talla:
 *           type: string
 *           description: talla del paciente consultado
 *         examenFisicoPositivo:
 *           type: string
 *           description: examen fisico positivo del paciente consultado
 *         observaciones:
 *           type: string
 *           description: observaciones de la consulta
 *         indicaciones:
 *           type: string
 *           description: indicaciones de la consulta
 *         
 *       required:
 *         - pacienteId
 *         - fecha
 */

/**
 * @swagger
 * /api/consultas:
 *   get:
 *     summary: Obtener todas las consultas
 *     tags: [Consultas]
 *     responses:
 *       200:
 *         description: Lista de consultas
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Consulta'
 */
router.get('/', ConsultaController.getAllConsultas);

/**
 * @swagger
 * /api/Consultas/{id}:
 *   get:
 *     summary: Obtener una Consulta por ID
 *     tags: [Consultas]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID de la Consulta
 *     responses:
 *       200:
 *         description: Consulta encontrada
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Consulta'
 *       404:
 *         description: Consulta no encontrada
 */
router.get('/:id', ConsultaController.getConsultaById);

/**
 * @swagger
 * /api/Consultas:
 *   post:
 *     summary: Crear una nueva Consulta
 *     tags: [Consultas]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Consulta'
 *     responses:
 *       201:
 *         description: Consulta creada con éxito
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Consulta'
 */
router.post('/', ConsultaController.createConsulta);

/**
 * @swagger
 * /api/Consultas/paciente/{pacienteId}:
 *   get:
 *     summary: Obtener todas las Consultas de un paciente
 *     tags: [Consultas]
 *     parameters:
 *       - in: path
 *         name: pacienteId
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del paciente
 *     responses:
 *       200:
 *         description: Lista de Consultas del paciente
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Consulta'
 *       404:
 *         description: Paciente no existe
 */
router.get('/paciente/:pacienteId', ConsultaController.getConsultaByPacienteId);

/**
 * @swagger
 * /api/Consultas/{id}:
 *   put:
 *     summary: Actualizar una Consulta por ID
 *     tags: [Consultas]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID de la Consulta
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Consulta'
 *     responses:
 *       200:
 *         description: Consulta actualizada con éxito
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Consulta'
 *       404:
 *         description: Consulta no encontrada
 */
router.put('/:id',ConsultaController.updateConsulta);

/**
 * @swagger
 * /api/Consultas/{id}:
 *   delete:
 *     summary: Eliminar una Consulta por ID
 *     tags: [Consultas]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID de la Consulta a eliminar
 *     responses:
 *       200:
 *         description: Consulta eliminada con éxito
 *       404:
 *         description: Consulta no encontrada
 */
router.delete('/:id', ConsultaController.deleteConsulta);

export default router;