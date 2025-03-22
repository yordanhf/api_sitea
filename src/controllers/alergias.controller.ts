import { Request, Response } from 'express';
import AlergiaService from '../services/alergias.service';

class AlergiaController {
  public async createAlergia(req: Request, res: Response) {
    try {
      const data = req.body;
      const alergia = await AlergiaService.createAlergia(data);
      res.status(201).json(alergia);
    } catch (error) {
      res.status(500).json((error as Error).message);
    }
  }

  public async getAllAlergias(req: Request, res: Response) {
    try {
      const alergias = await AlergiaService.getAllAlergias();
      res.status(200).json(alergias);
    } catch (error) {
      res.status(500).json((error as Error).message);
    }
  }

  public async getAlergiaById(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const alergia = await AlergiaService.getAlergiaById(String(id));
      res.status(200).json(alergia);
    } catch (error) {
      res.status(404).json((error as Error).message);
    }
  }

  public async getAlergiasByPacienteId(req: Request, res: Response) {
    try {
      const { pacienteId } = req.params;
      const alergias = await AlergiaService.getAlergiasByPacienteId(String(pacienteId));
      res.status(200).json(alergias);
    } catch (error) {
      res.status(404).json((error as Error).message);
    }
  }

  public async updateAlergia(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const data = req.body;
      const updatedAlergia = await AlergiaService.updateAlergia(String(id), data);
      res.status(200).json(updatedAlergia);
    } catch (error) {
      res.status(404).json((error as Error).message);
    }
  }

  public async deleteAlergia(req: Request, res: Response) {
    try {
      const { id } = req.params;
      await AlergiaService.deleteAlergia(String(id));
      res.status(200).json({ message: 'Alergia eliminada con éxito' });
    } catch (error) {
      res.status(404).json((error as Error).message);
    }
  }
}

export default new AlergiaController();