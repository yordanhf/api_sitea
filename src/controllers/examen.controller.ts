import { Request, Response } from 'express';
import ExamenService from '../services/examen.service';

class ExamenController {
  public async createExamen(req: Request, res: Response) {
    try {
      const { nombre } = req.body;
      const examen = await ExamenService.createExamen(nombre);
      res.status(201).json(examen);
    } catch (error) {
      res.status(500).send('Error al crear el examen');
    }
  }

  public async getAllExamen(req: Request, res: Response) {
    try {
      const examenes = await ExamenService.getAllExamen();
      res.status(200).json(examenes);
    } catch (error) {
      res.status(500).send('Error al obtener los examenes');
    }
  }

  public async getExamenById(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const examen = await ExamenService.getExamenById(String(id));
      res.status(200).json(examen);
    } catch (error) {
      res.status(404).json((error as Error).message);
    }
  }

  public async updateExamen(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const data = req.body;
      const updatedExamen = await ExamenService.updateExamen(String(id), data);
      res.status(200).json(updatedExamen);
    } catch (error) {
      res.status(404).json((error as Error).message);
    }
  }

  public async deleteExamen(req: Request, res: Response) {
    try {
      const { id } = req.params;
      await ExamenService.deleteExamen(String(id));
      res.status(200).send('Examen eliminado');
    } catch (error) {
      const errorMessage = (error as Error).message;
      res.status(404).send(errorMessage);
    }
  }
}

export default new ExamenController();