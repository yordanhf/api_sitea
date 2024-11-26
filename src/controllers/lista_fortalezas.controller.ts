import { Request, Response } from 'express';
import ListaFortalezasService from '../services/lista_fortalezas.service';

class FortalezasController {
  public async createListaFortalezas(req: Request, res: Response) {
    try {
      const { nombre } = req.body;
      const fortaleza = await ListaFortalezasService.createListaFortalezas(nombre);
      res.status(201).json(fortaleza);
    } catch (error) {
      res.status(500).json({ error: (error as Error).message });
    }
  }

  public async getAllListaFortalezas(req: Request, res: Response) {
    try {
      const fortalezass = await ListaFortalezasService.getAllListaFortalezas();
      res.status(200).json(fortalezass);
    } catch (error) {
      res.status(500).json({ error: (error as Error).message });
    }
  }

  public async getListaFortalezasById(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const fortaleza = await ListaFortalezasService.getListaFortalezasById(Number(id));
      res.status(200).json(fortaleza);
    } catch (error) {
      res.status(404).json((error as Error).message);
    }
  }

  public async updateListaFortalezas(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const data = req.body;
      const updatedFortaleza = await ListaFortalezasService.updateListaFortalezas(Number(id), data);
      res.status(200).json(updatedFortaleza);
    } catch (error) {
      res.status(404).json((error as Error).message);
    }
  }

  public async deleteListaFortalezas(req: Request, res: Response) {
    try {
      const { id } = req.params;
      await ListaFortalezasService.deleteListaFortalezas(Number(id));
      res.status(200).send('Fortaleza eliminada');
    } catch (error) {
      const errorMessage = (error as Error).message;
      res.status(404).send(errorMessage);
    }
  }
}

export default new FortalezasController();