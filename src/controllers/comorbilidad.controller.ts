import { Request, Response } from 'express';
import ComorbilidadService from '../services/comorbilidad.service';

class ComorbilidadController {
  public async createComorbilidad(req: Request, res: Response) {
    try {
      const { nombre } = req.body;
      const comorbilidad = await ComorbilidadService.createComorbilidad(nombre);
      res.status(201).json(comorbilidad);
    } catch (error) {
      res.status(500).send('Error al crear la comorbilidad');
    }
  }

  public async getAllComorbilidad(req: Request, res: Response) {
    try {
      const comorbilidades = await ComorbilidadService.getAllComorbilidad();
      res.status(200).json(comorbilidades);
    } catch (error) {
      res.status(500).send('Error al obtener las comorbilidades');
    }
  }

  public async getComorbilidadById(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const comorbilidad = await ComorbilidadService.getComorbilidadById(Number(id));
      res.status(200).json(comorbilidad);
    } catch (error) {
      res.status(404).json((error as Error).message);
    }
  }

  public async updateComorbilidad(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const data = req.body;
      const updatedComorbilidad = await ComorbilidadService.updateComorbilidad(Number(id), data);
      res.status(200).json(updatedComorbilidad);
    } catch (error) {
      res.status(404).json((error as Error).message);
    }
  }

  public async deleteComorbilidad(req: Request, res: Response) {
    try {
      const { id } = req.params;
      await ComorbilidadService.deleteComorbilidad(Number(id));
      res.status(200).send('Comorbilidad eliminada');
    } catch (error) {
      const errorMessage = (error as Error).message;
      res.status(404).send(errorMessage);
    }
  }
}

export default new ComorbilidadController();