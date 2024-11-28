// src/routes/municipio.routes.ts
import { Router } from 'express';
import MunicipioController from '../controllers/municipio.controller';
import authMiddleware from '../middlewares/auth.middleware';

const router = Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     Municipio:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           description: ID auto-incremental del municipio
 *         provinciaId:
 *           type: integer
 *           description: ID de la provincia a la que pertenece el municipio
 *         nombre:
 *           type: string
 *           description: Nombre del municipio
 *       required:
 *         - provinciaId
 *         - nombre
 */

/**
 * @swagger
 * /api/municipio:
 *   get:
 *     summary: Obtener todos los municipios
 *     tags: [Municipio]
 *     responses:
 *       200:
 *         description: Lista de municipios
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Municipio'
 */
router.get('/', MunicipioController.getAllMunicipio);

/**
 * @swagger
 * /api/municipio/{id}:
 *   get:
 *     summary: Obtener un municipio por ID
 *     tags: [Municipio]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del municipio
 *     responses:
 *       200:
 *         description: municipio encontrado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Municipio'
 *       404:
 *         description: Municipio no encontrado
 */
router.get('/:id', MunicipioController.getMunicipioById);

/**
 * @swagger
 * /api/municipio/provincia/{provinciaId}:
 *   get:
 *     summary: Obtener todos los municipios de un provincia
 *     tags: [Municipio]
 *     parameters:
 *       - in: path
 *         name: provinciaId
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID de la provincia
 *     responses:
 *       200:
 *         description: Lista des municipio de la provincia
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Municipio'
 *       404:
 *         description: Provincia no encontrada
 */
router.get('/provincia/:provinciaId', MunicipioController.getMunicipioByProvinciaId);

/**
 * @swagger
 * /api/municipio:
 *   post:
 *     summary: Crear un nuevo municipio
 *     tags: [Municipio]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Municipio'
 *     responses:
 *       201:
 *         description: Municipio creado con éxito
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Municipio'
 */
router.post('/', authMiddleware, MunicipioController.createMunicipio);

/**
 * @swagger
 * /api/municipio/{id}:
 *   put:
 *     summary: Actualizar un municipio por ID
 *     tags: [Municipio]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del municipio
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Municipio'
 *     responses:
 *       200:
 *         description: Municipio actualizado con éxito
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Municipio'
 *       404:
 *         description: Municipio no encontrado
 */
router.put('/:id', authMiddleware, MunicipioController.updateMunicipio);

/**
 * @swagger
 * /api/municipio/{id}:
 *   delete:
 *     summary: Eliminar un municipio por ID
 *     tags: [Municipio]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del municipio a eliminar
 *     responses:
 *       200:
 *         description: Municipio eliminado con éxito
 *       404:
 *         description: Municipio no encontrado
 */
router.delete('/:id', authMiddleware, MunicipioController.deleteMunicipio);

export default router;
