import { Request, Response } from 'express';
import BackupService from '../services/backup.service';

class BackupController {
  public async createBackup(req: Request, res: Response) {
    try {
      const { rutaDestino } = req.body;
      if (!rutaDestino) {
        res.status(400).json({ error: 'La ruta de destino es requerida.' });
        return;
      }

      await BackupService.createBackup(rutaDestino);
      res.status(200).json({ message: 'Copia de seguridad creada correctamente.' });
      return;
    } catch (error) {
      res.status(500).json({ error: (error as Error).message });
      return;
    }
  }
}

export default new BackupController();
