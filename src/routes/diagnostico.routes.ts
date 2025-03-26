import { Router } from 'express';
import DiagnosticoController from '../controllers/diagnostico.controller';
import { authMiddleware, authorize } from '../middlewares/auth.middleware';

const router = Router();

/**
 * @swagger
 * components:
 *   schemas:
 *      Diagnosticos:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           description: ID del diagnostico
 *         nombre:
 *           type: string
 *           description: Nombre del diagnostico
 *       required:
 *         - nombre
 */

/**
 * @swagger
 * /api/Diagnosticos:
 *   get:
 *     summary: Obtener todos los diagnosticos
 *     tags: [Diagnosticos]
 *     responses:
 *       200:
 *         description: Lista de diagnosticos
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Diagnosticos'
 */
router.get('/', authMiddleware, DiagnosticoController.getAllDiagnostico);

/**
 * @swagger
 * /api/Diagnosticos/{id}:
 *   get:
 *     summary: Obtener un diagnostico por ID
 *     tags: [Diagnosticos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID del diagnostico
 *     responses:
 *       200:
 *         description: Diagnostico encontrado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Diagnosticos'
 *       404:
 *         description: Diagnostico no encontrado
 */
router.get('/:id', authMiddleware, DiagnosticoController.getDiagnosticoById);

/**
 * @swagger
 * /api/Diagnosticos:
 *   post:
 *     summary: Crear un nuevo diagnostico
 *     tags: [Diagnosticos]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Diagnosticos'
 *     responses:
 *       201:
 *         description: Diagnostico creado con éxito
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Diagnosticos'
 */
router.post('/', authMiddleware, authorize(['admin_prov', 'admin_nac']), DiagnosticoController.createDiagnostico);

/**
 * @swagger
 * /api/Diagnosticos/{id}:
 *   put:
 *     summary: Actualizar un diagnostico por ID
 *     tags: [Diagnosticos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID del diagnostico
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Diagnosticos'
 *     responses:
 *       200:
 *         description: Diagnostico actualizado con éxito
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Diagnosticos'
 *       404:
 *         description: Diagnostico no encontrado
 */
router.put('/:id', authMiddleware, authorize(['admin_prov', 'admin_nac']), DiagnosticoController.updateDiagnostico);

/**
 * @swagger
 * /api/Diagnosticos/{id}:
 *   delete:
 *     summary: Eliminar una Diagnostico por ID
 *     tags: [Diagnosticos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID del diagnostico a eliminar
 *     responses:
 *       200:
 *         description: Diagnostico eliminado con éxito
 *       404:
 *         description: Diagnostico no encontrado
 */
router.delete('/:id', authMiddleware, authorize(['admin_prov', 'admin_nac']), DiagnosticoController.deleteDiagnostico);

export default router;