import { Router } from 'express';
import BackupController from '../controllers/backup.controller';
import { authMiddleware, authorize } from '../middlewares/auth.middleware';

const router = Router();

/**
 * @swagger
 * /api/backup:
 *   post:
 *     summary: Crear una copia de seguridad de la base de datos SQLite
 *     tags: [Backup]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               rutaDestino:
 *                 type: string
 *                 description: Ruta donde se almacenará la copia de seguridad
 *     responses:
 *       200:
 *         description: Copia de seguridad creada correctamente
 *       500:
 *         description: Error al crear la copia de seguridad
 */
router.post('/', authMiddleware, authorize(['admin_prov', 'admin_nac']), BackupController.createBackup);

export default router;
