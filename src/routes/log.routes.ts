import { Router } from 'express';
import LogController from '../controllers/log.controller';
import { authMiddleware, authorize } from '../middlewares/auth.middleware';

const router = Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     Log:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           description: ID del log
 *         usuarioId:
 *           type: string
 *           description: usuarioId del log
 *         entidad:
 *           type: string
 *           description: entidad del log
 *         operacion:
 *           type: string
 *           description: operacion del log
 *         detalle:
 *           type: string
 *           description: detalle del log
 *         fecha:
 *           type: string
 *           description: fecha del log
 *       required:
 *         - usuarioId
 *         - entidad
 *         - operacion
 *         - detalle
 *         - fecha
 * 
 */

/**
 * @swagger
 * /api/log/all:
 *   get:
 *     summary: Obtener todos los logs
 *     tags: [Log]
 *     responses:
 *       200:
 *         description: Lista de logs
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Log'
 */
router.get('/all', authMiddleware, authorize(['admin_nac']), LogController.getAllLogs);

/**
 * @swagger
 * /api/log/{id}:
 *   get:
 *     summary: Obtener un log por ID
 *     tags: [Log]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID del log
 *     responses:
 *       200:
 *         description: Log encontrado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Log'
 *       404:
 *         description: Log no encontrado
 */
router.get('/:id', authMiddleware, authorize(['admin_nac']), LogController.getLogById);

/**
 * @swagger
 * /api/log:
 *   get:
 *     summary: Filtrar logs según parámetros específicos
 *     tags: [Log]
 *     parameters:
 *       - in: query
 *         name: usuarioId
 *         schema:
 *           type: string
 *         description: Id del usuario
 *       - in: query
 *         name: entidad
 *         schema:
 *           type: string
 *         description: entidad del log
 *       - in: query
 *         name: fechaInicio
 *         schema:
 *           type: string
 *         description: Fecha de inicio para el rango de logs YYYY-MM-DD
 *       - in: query
 *         name: fechaFin
 *         schema:
 *           type: string
 *         description: Fecha de fin para el rango de logs YYYY-MM-DD
 *     responses:
 *       200:
 *         description: Lista de logs que coinciden con los filtros
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                   usuarioId:
 *                     type: string
 *                   entidad:
 *                     type: string
 *                   operacion:
 *                     type: string
 *                   detalle:
 *                     type: string
 *                   fecha:
 *                     type: string
 *       500:
 *         description: Error al filtrar logs
 */
router.get('/', authMiddleware, authorize(['admin_nac']), LogController.getLogsByParams);


export default router;