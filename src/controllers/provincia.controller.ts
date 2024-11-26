import { Request, Response } from 'express';
import ProvinciaService from '../services/provincia.service';

class ProvinciaController {
  public async createProvincia(req: Request, res: Response) {
    try {
      const { nombre } = req.body;
      const provincia = await ProvinciaService.createProvincia(nombre);
      res.status(201).json(provincia);
    } catch (error) {
      res.status(500).send('Error al crear la provincia');
    }
  }

  public async getAllProvincia(req: Request, res: Response) {
    try {
      const provincias = await ProvinciaService.getAllProvincia();
      res.status(200).json(provincias);
    } catch (error) {
      res.status(500).send('Error al obtener las provincias');
    }
  }

  public async getProvinciaById(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const provincia = await ProvinciaService.getProvinciaById(Number(id));
      res.status(200).json(provincia);
    } catch (error) {
      res.status(404).json((error as Error).message);
    }
  }

  public async updateProvincia(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const data = req.body;
      const updatedProvincia = await ProvinciaService.updateProvincia(Number(id), data);
      res.status(200).json(updatedProvincia);
    } catch (error) {
      res.status(404).json((error as Error).message);
    }
  }

  public async deleteProvincia(req: Request, res: Response) {
    try {
      const { id } = req.params;
      await ProvinciaService.deleteProvincia(Number(id));
      res.status(200).send('Provincia eliminada');
    } catch (error) {
      const errorMessage = (error as Error).message;
      res.status(404).send(errorMessage);
    }
  }
}

export default new ProvinciaController();