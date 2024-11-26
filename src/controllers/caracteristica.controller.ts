import { Request, Response } from 'express';
import CaracteristicaService from '../services/caracteristica.service';

class CaracteristicaController {
  public async createCaracteristica(req: Request, res: Response) {
    try {
      const { nombre } = req.body;
      const caracteristica = await CaracteristicaService.createCaracteristica(nombre);
      res.status(201).json(caracteristica);
    } catch (error) {
      res.status(500).send('Error al crear la caracteristica');
    }
  }

  public async getAllCaracteristica(req: Request, res: Response) {
    try {
      const caracteristicas = await CaracteristicaService.getAllCaracteristica();
      res.status(200).json(caracteristicas);
    } catch (error) {
      res.status(500).send('Error al obtener las caracteristicas');
    }
  }

  public async getCaracteristicaById(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const caracteristica = await CaracteristicaService.getCaracteristicaById(Number(id));
      res.status(200).json(caracteristica);
    } catch (error) {
      res.status(404).json((error as Error).message);
    }
  }

  public async updateCaracteristica(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const data = req.body;
      const updatedCaracteristica = await CaracteristicaService.updateCaracteristica(Number(id), data);
      res.status(200).json(updatedCaracteristica);
    } catch (error) {
      res.status(404).json((error as Error).message);
    }
  }

  public async deleteCaracteristica(req: Request, res: Response) {
    try {
      const { id } = req.params;
      await CaracteristicaService.deleteCaracteristica(Number(id));
      res.status(200).send('Caracteristica eliminada');
    } catch (error) {
      const errorMessage = (error as Error).message;
      res.status(404).send(errorMessage);
    }
  }
}

export default new CaracteristicaController();