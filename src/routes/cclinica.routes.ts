import { Router } from 'express';
import CClinicaController from '../controllers/cclinica.controller';
import { authMiddleware, authorize } from '../middlewares/auth.middleware';

const router = Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     CClinicas:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           description: ID de la cclinica
 *         nombre:
 *           type: string
 *           description: Nombre de la cclinica
 *       required:
 *         - nombre
 */

/**
 * @swagger
 * /api/cclinicas:
 *   get:
 *     summary: Obtener todas las cclinica
 *     tags: [CClinicas]
 *     responses:
 *       200:
 *         description: Lista de cclinicas
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/CClinicas'
 */
router.get('/', authMiddleware, CClinicaController.getAllCClinica);

/**
 * @swagger
 * /api/cclinicas/{id}:
 *   get:
 *     summary: Obtener una cclinica por ID
 *     tags: [CClinicas]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID de la cclinica
 *     responses:
 *       200:
 *         description: cclinica encontrada
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/CClinicas'
 *       404:
 *         description: cclinica no encontrada
 */
router.get('/:id', authMiddleware, CClinicaController.getCClinicaById);

/**
 * @swagger
 * /api/cclinicas:
 *   post:
 *     summary: Crear una nueva cclinica
 *     tags: [CClinicas]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CClinicas'
 *     responses:
 *       201:
 *         description: CClinica creada con éxito
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/CClinicas'
 */
router.post('/', authMiddleware, authorize(['admin_prov', 'admin_nac']), CClinicaController.createCClinica);

/**
 * @swagger
 * /api/cclinicas/{id}:
 *   put:
 *     summary: Actualizar una cclinica por ID
 *     tags: [CClinicas]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID de la cclinica
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CClinicas'
 *     responses:
 *       200:
 *         description: CClinica actualizada con éxito
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/CClinicas'
 *       404:
 *         description: CClinica no encontrada
 */
router.put('/:id', authMiddleware, authorize(['admin_prov', 'admin_nac']), CClinicaController.updateCClinica);

/**
 * @swagger
 * /api/cclinicas/{id}:
 *   delete:
 *     summary: Eliminar una cclinica por ID
 *     tags: [CClinicas]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID de la cclinica a eliminar
 *     responses:
 *       200:
 *         description: CClinica eliminada con éxito
 *       404:
 *         description: CClinica no encontrada
 */
router.delete('/:id', authMiddleware, authorize(['admin_prov', 'admin_nac']), CClinicaController.deleteCClinica);

export default router;