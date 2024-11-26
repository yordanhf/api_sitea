import { Request, Response } from 'express';
import Examenes_complementariosService from '../services/examenes_complementarios.service';

class Examenes_complementariosController {
  public async createExamenes_complementarios(req: Request, res: Response) {
    try {
      const data  = req.body;      
      const examen = await Examenes_complementariosService.createExamenes_complementarios(data);
      res.status(201).json(examen);
    } catch (error) {
      res.status(500).json({ error: (error as Error).message });
    }
  }

  public async getAllExamenes_complementarios(req: Request, res: Response) {
    try {
      const examenes_complementarios = await Examenes_complementariosService.getAllExamenes_complementarios();
      res.status(200).json(examenes_complementarios);
    } catch (error) {
      res.status(500).json({ error: (error as Error).message });
    }
  }

  public async getExamenes_complementariosById(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const examen_complementario = await Examenes_complementariosService.getExamenes_complementariosById(Number(id));
      res.status(200).json(examen_complementario);
    } catch (error) {
      res.status(404).json((error as Error).message);
    }
  }

  public async getExamenes_complementariosByPacienteId(req: Request, res: Response) {
    try {
      const { pacienteId } = req.params;
      const examen_complementario = await Examenes_complementariosService.getExamenes_complementariosByPacienteId(Number(pacienteId));
      res.status(200).json(examen_complementario);
    } catch (error) {
      res.status(404).json((error as Error).message);
    }
  }

  public async updateExamenes_complementarios(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const data = req.body;
      const updatedExamenes_complementarios = await Examenes_complementariosService.updateExamen(Number(id), data);
      res.status(200).json(updatedExamenes_complementarios);
    } catch (error) {
      res.status(404).json((error as Error).message);
    }
  }

  public async deleteExamenes_complementarios(req: Request, res: Response) {
    try {
      const { id } = req.params;
      await Examenes_complementariosService.deleteExamenes_complementarios(Number(id));
      res.status(200).send('Examen complementario eliminado');
    } catch (error) {
      const errorMessage = (error as Error).message;
      res.status(404).send(errorMessage);
    }
  }
}

export default new Examenes_complementariosController();