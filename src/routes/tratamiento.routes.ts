import { Router } from 'express';
import TratamientoController from '../controllers/tratamiento.controller';
import { authMiddleware, authorize } from '../middlewares/auth.middleware';

const router = Router();

/**
 * @swagger
 * components:
 *   schemas:
 *      Tratamiento:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           description: ID del tratamiento
 *         pacienteId:
 *           type: string
 *           description: ID del paciente
 *         medicamentoId:
 *           type: string
 *           description: ID del medicamento
 *       required:
 *         - pacienteId
 *         - medicamentoId
*/
/**
 * @swagger
 * /api/Tratamiento:
 *   get:
 *     summary: Obtener todos los tratamientos
 *     tags: [Tratamiento]
 *     responses:
 *       200:
 *         description: Lista de tratamientos
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Tratamiento'
 */
router.get('/', authMiddleware, TratamientoController.getAllTratamiento);

/**
 * @swagger
 * /api/Tratamiento/{id}:
 *   get:
 *     summary: Obtener un tratamiento por ID
 *     tags: [Tratamiento]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID del tratamiento
 *     responses:
 *       200:
 *         description: tratamiento encontrado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Tratamiento'
 *       404:
 *         description: tratamiento no encontrado
 */
router.get('/:id', authMiddleware, TratamientoController.getTratamientoById);

/**
 * @swagger
 * /api/Tratamiento/paciente/{pacienteId}:
 *   get:
 *     summary: Obtener todos los tratamientos de un paciente
 *     tags: [Tratamiento]
 *     parameters:
 *       - in: path
 *         name: pacienteId
 *         required: true
 *         schema:
 *           type: string
 *         description: ID del paciente
 *     responses:
 *       200:
 *         description: Lista de tratamientos del paciente
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Tratamiento'
 *       404:
 *         description: Paciente no encontrado
 */
router.get('/paciente/:pacienteId', authMiddleware, TratamientoController.getTratamientoByPacienteId);

/**
 * @swagger
 * /api/Tratamiento:
 *   post:
 *     summary: Crear un nuevo tratamiento
 *     tags: [Tratamiento]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Tratamiento'
 *     responses:
 *       201:
 *         description: tratamiento creado con éxito
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Tratamiento'
 */
router.post('/', authMiddleware, authorize(['admin_prov', 'admin_nac']), TratamientoController.createTratamiento);

/**
 * @swagger
 * /api/Tratamiento/{id}:
 *   put:
 *     summary: Actualizar un tratamiento por ID
 *     tags: [Tratamiento]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID del tratamiento
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Tratamiento'
 *     responses:
 *       200:
 *         description: tratamiento actualizado con éxito
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Tratamiento'
 *       404:
 *         description: tratamiento no encontrado
 */
router.put('/:id', authMiddleware, authorize(['admin_prov', 'admin_nac']), TratamientoController.updateTratamiento);

/**
 * @swagger
 * /api/Tratamiento/{id}:
 *   delete:
 *     summary: Eliminar un tratamiento por ID
 *     tags: [Tratamiento]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID del tratamiento a eliminar
 *     responses:
 *       200:
 *         description: tratamiento eliminado con éxito
 *       404:
 *         description: tratamiento no encontrado
 */
router.delete('/:id', authMiddleware, authorize(['admin_prov', 'admin_nac']), TratamientoController.deleteTratamiento);

export default router;