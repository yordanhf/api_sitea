import { Router } from 'express';
import VinculoInstitucionalController from '../controllers/vinculo_institucional.controller';
import authMiddleware from '../middlewares/auth.middleware';

const router = Router();

/**
 * @swagger
 * components:
 *   schemas:
 *      Vinculo Institucional:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           description: ID auto-incremental del vinculo institucional
 *         nombre:
 *           type: string
 *           description: Nombre del vinculo institucional
 *       required:
 *         - nombre
 */

/**
 * @swagger
 * /api/vinculo_institucional:
 *   get:
 *     summary: Obtener todos los vinculos institucionales
 *     tags: [Vinculo Institucional]
 *     responses:
 *       200:
 *         description: Lista de vinculos institucionales
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Vinculo Institucional'
 */
router.get('/', VinculoInstitucionalController.getAllVinculoInstitucional);

/**
 * @swagger
 * /api/vinculo_institucional/{id}:
 *   get:
 *     summary: Obtener un vinculo institucional por ID
 *     tags: [Vinculo Institucional]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del vinculo institucional
 *     responses:
 *       200:
 *         description: Vinculo Institucional encontrado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Vinculo Institucional'
 *       404:
 *         description: Vinculo Institucional no encontrado
 */
router.get('/:id', VinculoInstitucionalController.getVinculoInstitucionalById);

/**
 * @swagger
 * /api/vinculo_institucional:
 *   post:
 *     summary: Crear un nuevo vinculo_institucional
 *     tags: [Vinculo Institucional]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Vinculo Institucional'
 *     responses:
 *       201:
 *         description: Vinculo Institucional creado con éxito
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Vinculo Institucional'
 */
router.post('/', authMiddleware, VinculoInstitucionalController.createVinculoInstitucional);

/**
 * @swagger
 * /api/vinculo_institucional/{id}:
 *   put:
 *     summary: Actualizar un vinculo institucional por ID
 *     tags: [Vinculo Institucional]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del vinculo institucional
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Vinculo Institucional'
 *     responses:
 *       200:
 *         description: VinculoInstitucional actualizado con éxito
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Vinculo Institucional'
 *       404:
 *         description: VinculoInstitucional no encontrado
 */
router.put('/:id', authMiddleware, VinculoInstitucionalController.updateVinculoInstitucional);

/**
 * @swagger
 * /api/vinculo_institucional/{id}:
 *   delete:
 *     summary: Eliminar una Vinculo Institucional por ID
 *     tags: [Vinculo Institucional]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del vinculo institucional a eliminar
 *     responses:
 *       200:
 *         description: Vinculo Institucional eliminado con éxito
 *       404:
 *         description: Vinculo Institucional no encontrado
 */
router.delete('/:id', authMiddleware, VinculoInstitucionalController.deleteVinculoInstitucional);

export default router;