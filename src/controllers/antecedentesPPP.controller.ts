import { Request, Response } from 'express';
import AntecedentesPPPService from '../services/antecedentesPPP.service';

class AntecedentesPPPController {
  public async createAntecedentesPPP(req: Request, res: Response) {
    try {
      const { nombre } = req.body;
      const antecedentesPPP = await AntecedentesPPPService.createAntecedentesPPP(nombre);
      res.status(201).json(antecedentesPPP);
    } catch (error) {
      res.status(500).send('Error al crear el antecedente');
    }
  }

  public async getAllAntecedentesPPP(req: Request, res: Response) {
    try {
      const antecedentesPPPs = await AntecedentesPPPService.getAllAntecedentesPPP();
      res.status(200).json(antecedentesPPPs);
    } catch (error) {
      res.status(500).send('Error al obtener el antecedente');
    }
  }

  public async getAntecedentesPPPById(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const antecedentesPPP = await AntecedentesPPPService.getAntecedentesPPPById(Number(id));
      res.status(200).json(antecedentesPPP);
    } catch (error) {
      res.status(404).json((error as Error).message);
    }
  }

  public async updateAntecedentesPPP(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const data = req.body;
      const updatedAntecedentesPPP = await AntecedentesPPPService.updateAntecedentesPPP(Number(id), data);
      res.status(200).json(updatedAntecedentesPPP);
    } catch (error) {
      res.status(404).json((error as Error).message);
    }
  }

  public async deleteAntecedentesPPP(req: Request, res: Response) {
    try {
      const { id } = req.params;
      await AntecedentesPPPService.deleteAntecedentesPPP(Number(id));
      res.status(200).send('Antecedente eliminado');
    } catch (error) {
      const errorMessage = (error as Error).message;
      res.status(404).send(errorMessage);
    }
  }
}

export default new AntecedentesPPPController();