import { Router } from 'express';
import AntecedentesPPPController from '../controllers/antecedentesPPP.controller';
import authMiddleware from '../middlewares/auth.middleware';

const router = Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     AntecedentesPPP:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           description: ID del antecedente
 *         nombre:
 *           type: string
 *           description: Nombre del antecedente
 *       required:
 *         - nombre
 */

/**
 * @swagger
 * /api/antecedentesPPP:
 *   get:
 *     summary: Obtener todos los antecedentes
 *     tags: [AntecedentesPPP]
 *     responses:
 *       200:
 *         description: Lista de antecedentes
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/AntecedentesPPP'
 */
router.get('/', AntecedentesPPPController.getAllAntecedentesPPP);

/**
 * @swagger
 * /api/antecedentesPPP/{id}:
 *   get:
 *     summary: Obtener un antecedente por ID
 *     tags: [AntecedentesPPP]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID del antecedente
 *     responses:
 *       200:
 *         description: antecedente encontrado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/AntecedentesPPP'
 *       404:
 *         description: antecedente no encontrado
 */
router.get('/:id', AntecedentesPPPController.getAntecedentesPPPById);

/**
 * @swagger
 * /api/antecedentesPPP:
 *   post:
 *     summary: Crear un nuevo antecedente
 *     tags: [AntecedentesPPP]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/AntecedentesPPP'
 *     responses:
 *       201:
 *         description: antecedente creado con éxito
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/AntecedentesPPP'
 */
router.post('/', authMiddleware, AntecedentesPPPController.createAntecedentesPPP);

/**
 * @swagger
 * /api/antecedentesPPP/{id}:
 *   put:
 *     summary: Actualizar un antecedente por ID
 *     tags: [AntecedentesPPP]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID del antecedente
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/AntecedentesPPP'
 *     responses:
 *       200:
 *         description: antecedente actualizado con éxito
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/AntecedentesPPP'
 *       404:
 *         description: antecedente no encontrado
 */
router.put('/:id', authMiddleware, AntecedentesPPPController.updateAntecedentesPPP);

/**
 * @swagger
 * /api/antecedentesPPP/{id}:
 *   delete:
 *     summary: Eliminar un antecedente por ID
 *     tags: [AntecedentesPPP]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID del antecedente a eliminar
 *     responses:
 *       200:
 *         description: antecedente eliminado con éxito
 *       404:
 *         description: antecedente no encontrado
 */
router.delete('/:id', authMiddleware, AntecedentesPPPController.deleteAntecedentesPPP);

export default router;
