import { Request, Response } from 'express';
import CClinicaService from '../services/cclinica.service';

class CClinicaController {
  public async createCClinica(req: Request, res: Response) {
    try {
      const { nombre } = req.body;
      const cclinica = await CClinicaService.createCClinica(nombre);
      res.status(201).json(cclinica);
    } catch (error) {
      res.status(500).send('Error al crear la cclinica');
    }
  }

  public async getAllCClinica(req: Request, res: Response) {
    try {
      const cclinicas = await CClinicaService.getAllCClinica();
      res.status(200).json(cclinicas);
    } catch (error) {
      res.status(500).send('Error al obtener las cclinicas');
    }
  }

  public async getCClinicaById(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const cclinica = await CClinicaService.getCClinicaById(String(id));
      res.status(200).json(cclinica);
    } catch (error) {
      res.status(404).json((error as Error).message);
    }
  }

  public async updateCClinica(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const data = req.body;
      const updatedCClinica = await CClinicaService.updateCClinica(String(id), data);
      res.status(200).json(updatedCClinica);
    } catch (error) {
      res.status(404).json((error as Error).message);
    }
  }

  public async deleteCClinica(req: Request, res: Response) {
    try {
      const { id } = req.params;
      await CClinicaService.deleteCClinica(String(id));
      res.status(200).send('CClinica eliminada');
    } catch (error) {
      const errorMessage = (error as Error).message;
      res.status(404).send(errorMessage);
    }
  }
}

export default new CClinicaController();