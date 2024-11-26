import { Router } from 'express';
import ListaFortalezasController from '../controllers/lista_fortalezas.controller';

const router = Router();

/**
 * @swagger
 * components:
 *   schemas:
 *      Lista_Fortalezas:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           description: ID auto-incremental de la fortaleza
 *         nombre:
 *           type: string
 *           description: Nombre de la fortaleza
 *       required:
 *         - nombre
 */

/**
 * @swagger
 * /api/lista_fortaleza:
 *   get:
 *     summary: Obtener todas las fortalezas
 *     tags: [lista_fortalezas]
 *     responses:
 *       200:
 *         description: Lista de fortalezas
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Lista_Fortalezas'
 */
router.get('/', ListaFortalezasController.getAllListaFortalezas);

/**
 * @swagger
 * /api/lista_fortaleza/{id}:
 *   get:
 *     summary: Obtener una fortaleza por ID
 *     tags: [lista_fortalezas]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID de la fortaleza
 *     responses:
 *       200:
 *         description: fortaleza encontrada
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Lista_Fortalezas'
 *       404:
 *         description: fortaleza no encontrada
 */
router.get('/:id', ListaFortalezasController.getListaFortalezasById);

/**
 * @swagger
 * /api/lista_fortaleza:
 *   post:
 *     summary: Crear una nueva fortaleza
 *     tags: [lista_fortalezas]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Lista_Fortalezas'
 *     responses:
 *       201:
 *         description: fortaleza creada con éxito
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Lista_Fortalezas'
 */
router.post('/', ListaFortalezasController.createListaFortalezas);

/**
 * @swagger
 * /api/lista_fortaleza/{id}:
 *   put:
 *     summary: Actualizar una fortaleza por ID
 *     tags: [lista_fortalezas]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID de la fortaleza
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Lista_Fortalezas'
 *     responses:
 *       200:
 *         description: fortaleza actualizada con éxito
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Lista_Fortalezas'
 *       404:
 *         description: fortaleza no encontrada
 */
router.put('/:id',ListaFortalezasController.updateListaFortalezas);

/**
 * @swagger
 * /api/lista_fortaleza/{id}:
 *   delete:
 *     summary: Eliminar una fortalezas por ID
 *     tags: [lista_fortalezas]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID de la fortaleza a eliminar
 *     responses:
 *       200:
 *         description: Fortaleza eliminada con éxito
 *       404:
 *         description: Fortaleza no encontrada
 */
router.delete('/:id', ListaFortalezasController.deleteListaFortalezas);

export default router;