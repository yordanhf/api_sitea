import { Request, Response } from 'express';
import LogService from '../services/log.service';

class LogController {

    public async getAllLogs(req: Request, res: Response) {
        try {
          const logs = await LogService.getAllLogs();
          res.status(200).json(logs);
        } catch (error) {
          res.status(500).json({ error: (error as Error).message });
        }
      }

      public async getLogById(req: Request, res: Response) {
        try {
          const { id } = req.params;
          const log = await LogService.getlogById(String(id));
          res.status(200).json(log);
        } catch (error) {
          res.status(500).json({ error: (error as Error).message });
        }
      }

  public async getLogsByParams(req: Request, res: Response) {
    try {
      const { usuarioId, entidad, operacion, fechaInicio, fechaFin } = req.query;
      const params: any = {};

      if (usuarioId) params.usuarioId = usuarioId;
      if (entidad) params.entidad = entidad;
      if (operacion) params.operacion = operacion;
      if (fechaInicio) params.fechaInicio = new Date(fechaInicio as string);
      if (fechaFin) params.fechaFin = new Date(fechaFin as string);

      const logs = await LogService.getLogs(params);
      res.status(200).json(logs);
    } catch (error) {
      res.status(500).json({ error: (error as Error).message });
    }
  }
}

export default new LogController();