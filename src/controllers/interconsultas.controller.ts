import { Request, Response } from 'express';
import InterconsultasService from '../services/interconsultas.service';

class InterconsultasController {
  public async createInterconsultas(req: Request, res: Response) {
    try {
      const { nombre } = req.body;
      const interconsultas = await InterconsultasService.createInterconsultas(nombre);
      res.status(201).json(interconsultas);
    } catch (error) {
      res.status(500).send('Error al crear la Interconsulta');
    }
  }

  public async getAllInterconsultas(req: Request, res: Response) {
    try {
      const Interconsultass = await InterconsultasService.getAllInterconsultas();
      res.status(200).json(Interconsultass);
    } catch (error) {
      res.status(500).send('Error al obtener las Interconsultas');
    }
  }

  public async getInterconsultasById(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const interconsultas = await InterconsultasService.getInterconsultasById(String(id));
      res.status(200).json(interconsultas);
    } catch (error) {
      res.status(404).json((error as Error).message);
    }
  }

  public async updateInterconsultas(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const data = req.body;
      const updatedInterconsultas = await InterconsultasService.updateInterconsultas(String(id), data);
      res.status(200).json(updatedInterconsultas);
    } catch (error) {
      res.status(404).json((error as Error).message);
    }
  }

  public async deleteInterconsultas(req: Request, res: Response) {
    try {
      const { id } = req.params;
      await InterconsultasService.deleteInterconsultas(String(id));
      res.status(200).send('Interconsultas eliminada');
    } catch (error) {
      const errorMessage = (error as Error).message;
      res.status(404).send(errorMessage);
    }
  }
}

export default new InterconsultasController();