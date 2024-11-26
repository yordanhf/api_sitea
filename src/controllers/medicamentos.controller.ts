// src/controllers/medicamento.controller.ts
import { Request, Response } from 'express';
import MedicamentosService from '../services/medicamentos.service';

class MedicamentosController {
  public async createMedicamentos(req: Request, res: Response) {
    try {
      const { nombre } = req.body;
      const medicamentos = await MedicamentosService.createMedicamentos(nombre);
      res.status(201).json(medicamentos);
    } catch (error) {
      res.status(500).send('Error al crear el medicamento');
    }
  }

  public async getAllMedicamentos(req: Request, res: Response) {
    try {
      const medicamentoss = await MedicamentosService.getAllMedicamentos();
      res.status(200).json(medicamentoss);
    } catch (error) {
      res.status(500).send('Error al obtener los medicamentos');
    }
  }

  public async getMedicamentosById(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const medicamentos = await MedicamentosService.getMedicamentosById(Number(id));
      res.status(200).json(medicamentos);
    } catch (error) {
      res.status(404).json((error as Error).message);
    }
  }

  public async updateMedicamentos(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const data = req.body;
      const updatedMedicamentos = await MedicamentosService.updateMedicamentos(Number(id), data);
      res.status(200).json(updatedMedicamentos);
    } catch (error) {
      res.status(404).json((error as Error).message);
    }
  }

  public async deleteMedicamentos(req: Request, res: Response) {
    try {
      const { id } = req.params;
      await MedicamentosService.deleteMedicamentos(Number(id));
      res.status(200).send('Medicamentos eliminado');
    } catch (error) {
      const errorMessage = (error as Error).message;
      res.status(404).send(errorMessage);
    }
  }
}

export default new MedicamentosController();
