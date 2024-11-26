// Interconsulta Controller (interconsulta.controller.ts)
import { Request, Response } from 'express';
import InterconsultaService from '../services/interconsulta.service';

class InterconsultaController {
  public async createInterconsulta(req: Request, res: Response) {
    try {
      const data = req.body;      
      const interconsulta = await InterconsultaService.createInterconsulta(data);
      res.status(201).json(interconsulta);
    } catch (error) {
      res.status(500).json({ error: (error as Error).message });
    }
  }

  public async getAllInterconsultas(req: Request, res: Response) {
    try {
      const interconsultas = await InterconsultaService.getAllInterconsultas();
      res.status(200).json(interconsultas);
    } catch (error) {
      res.status(500).json({ error: (error as Error).message });
    }
  }

  public async getInterconsultaById(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const interconsulta = await InterconsultaService.getInterconsultaById(Number(id));
      res.status(200).json(interconsulta);
    } catch (error) {
      res.status(404).json({ error: (error as Error).message });
    }
  }

  public async updateInterconsulta(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const data = req.body;
      const updatedInterconsulta = await InterconsultaService.updateInterconsulta(Number(id), data);
      res.status(200).json(updatedInterconsulta);
    } catch (error) {
      res.status(404).json({ error: (error as Error).message });
    }
  }

  public async deleteInterconsulta(req: Request, res: Response) {
    try {
      const { id } = req.params;
      await InterconsultaService.deleteInterconsulta(Number(id));
      res.status(200).json({ message: 'Interconsulta eliminada con éxito' });
    } catch (error) {
      res.status(404).json({ error: (error as Error).message });
    }
  }

  //
  public async getInterconsultasByPacienteId(req: Request, res: Response) {
    try {
      const { pacienteId } = req.params;
      const interconsultas = await InterconsultaService.getInterconsultasByPacienteId(Number(pacienteId));
      res.status(200).json(interconsultas);
    } catch (error) {     
      res.status(404).json({ error: (error as Error).message });
      
    }
  }
}

export default new InterconsultaController();