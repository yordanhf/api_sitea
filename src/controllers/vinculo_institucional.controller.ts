import { Request, Response } from 'express';
import VinculoInstitucionalService from '../services/vinculo_institucional.service';

class VinculoInstitucionalController {
  public async createVinculoInstitucional(req: Request, res: Response) {
    try {
      const { nombre } = req.body;
      const vinculo_institucional = await VinculoInstitucionalService.createVinculoInstitucional(nombre);
      res.status(201).json(vinculo_institucional);
    } catch (error) {
      res.status(500).send('Error al crear el vinculo institucional');
    }
  }

  public async getAllVinculoInstitucional(req: Request, res: Response) {
    try {
      const vinculo_institucionals = await VinculoInstitucionalService.getAllVinculoInstitucional();
      res.status(200).json(vinculo_institucionals);
    } catch (error) {
      res.status(500).send('Error al obtener los vinculos institucionales');
    }
  }

  public async getVinculoInstitucionalById(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const vinculo_institucional = await VinculoInstitucionalService.getVinculoInstitucionalById(String(id));
      res.status(200).json(vinculo_institucional);
    } catch (error) {
      res.status(404).json((error as Error).message);
    }
  }

  public async updateVinculoInstitucional(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const data = req.body;
      const updatedVinculoInstitucional = await VinculoInstitucionalService.updateVinculoInstitucional(String(id), data);
      res.status(200).json(updatedVinculoInstitucional);
    } catch (error) {
      res.status(404).json((error as Error).message);
    }
  }

  public async deleteVinculoInstitucional(req: Request, res: Response) {
    try {
      const { id } = req.params;
      await VinculoInstitucionalService.deleteVinculoInstitucional(String(id));
      res.status(200).send('Vinculo Institucional eliminado');
    } catch (error) {
      const errorMessage = (error as Error).message;
      res.status(404).send(errorMessage);
    }
  }
}

export default new VinculoInstitucionalController();