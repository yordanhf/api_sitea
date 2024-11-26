// src/controllers/municipio.controller.ts
import { Request, Response } from 'express';
import MunicipioService from '../services/municipio.service';

class MunicipioController {
  public async createMunicipio(req: Request, res: Response) {
    try {
      const  data  = req.body;
      const municipio = await MunicipioService.createMunicipio(data);
      res.status(201).json(municipio);
    } catch (error) {
      res.status(500).json((error as Error).message);
    }
  }

  public async getAllMunicipio(req: Request, res: Response) {
    try {
      const municipios = await MunicipioService.getAllMunicipio();
      res.status(200).json(municipios);
    } catch (error) {
      res.status(500).send('Error al obtener los municipios');
    }
  }

  public async getMunicipioById(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const municipio = await MunicipioService.getMunicipioById(Number(id));
      res.status(200).json(municipio);
    } catch (error) {
      res.status(404).json((error as Error).message);
    }
  }

  public async updateMunicipio(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const data = req.body;
      const updatedMunicipio = await MunicipioService.updateMunicipio(Number(id), data);
      res.status(200).json(updatedMunicipio);
    } catch (error) {
      res.status(404).json((error as Error).message);
    }
  }

  public async deleteMunicipio(req: Request, res: Response) {
    try {
      const { id } = req.params;
      await MunicipioService.deleteMunicipio(Number(id));
      res.status(200).send('Municipio eliminado');
    } catch (error) {
      const errorMessage = (error as Error).message;
      res.status(404).send(errorMessage);
    }
  }
}

export default new MunicipioController();
