import { Request, Response } from 'express';
import DiagnosticoService from '../services/diagnostico.service';

class DiagnosticoController {
  public async createDiagnostico(req: Request, res: Response) {
    try {
      const { nombre } = req.body;
      const diagnostico = await DiagnosticoService.createDiagnostico(nombre);
      res.status(201).json(diagnostico);
    } catch (error) {
      res.status(500).send('Error al crear el diagnostico');
    }
  }

  public async getAllDiagnostico(req: Request, res: Response) {
    try {
      const diagnosticos = await DiagnosticoService.getAllDiagnostico();
      res.status(200).json(diagnosticos);
    } catch (error) {
      res.status(500).send('Error al obtener los diagnosticos');
    }
  }

  public async getDiagnosticoById(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const diagnostico = await DiagnosticoService.getDiagnosticoById(Number(id));
      res.status(200).json(diagnostico);
    } catch (error) {
      res.status(404).json((error as Error).message);
    }
  }

  public async updateDiagnostico(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const data = req.body;
      const updatedDiagnostico = await DiagnosticoService.updateDiagnostico(Number(id), data);
      res.status(200).json(updatedDiagnostico);
    } catch (error) {
      res.status(404).json((error as Error).message);
    }
  }

  public async deleteDiagnostico(req: Request, res: Response) {
    try {
      const { id } = req.params;
      await DiagnosticoService.deleteDiagnostico(Number(id));
      res.status(200).send('Diagnostico eliminado');
    } catch (error) {
      const errorMessage = (error as Error).message;
      res.status(404).send(errorMessage);
    }
  }
}

export default new DiagnosticoController();