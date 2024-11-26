import { Request, Response } from 'express';
import FortalezaService from '../services/fortaleza.service';

class FortalezaController {
  public async createFortaleza(req: Request, res: Response) {
    try {
      const { nombre } = req.body;
      const fortaleza = await FortalezaService.createFortaleza(nombre);
      res.status(201).json(fortaleza);
    } catch (error) {
      res.status(500).send('Error al crear la fortaleza');
    }
  }

  public async getAllFortaleza(req: Request, res: Response) {
    try {
      const fortalezas = await FortalezaService.getAllFortaleza();
      res.status(200).json(fortalezas);
    } catch (error) {
      res.status(500).send('Error al obtener las fortalezas');
    }
  }

  public async getFortalezaById(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const fortaleza = await FortalezaService.getFortalezaById(Number(id));
      res.status(200).json(fortaleza);
    } catch (error) {
      res.status(404).json((error as Error).message);
    }
  }

  public async updateFortaleza(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const data = req.body;
      const updatedFortaleza = await FortalezaService.updateFortaleza(Number(id), data);
      res.status(200).json(updatedFortaleza);
    } catch (error) {
      res.status(404).json((error as Error).message);
    }
  }

  public async deleteFortaleza(req: Request, res: Response) {
    try {
      const { id } = req.params;
      await FortalezaService.deleteFortaleza(Number(id));
      res.status(200).send('Fortaleza eliminada');
    } catch (error) {
      const errorMessage = (error as Error).message;
      res.status(404).send(errorMessage);
    }
  }
}

export default new FortalezaController();