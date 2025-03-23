// src/controllers/medicamento.controller.ts
import { Request, Response } from 'express';
import MedicamentoService from '../services/medicamento.service';

class MedicamentoController {
  public async createMedicamento(req: Request, res: Response) {
    try {
      const { nombre } = req.body;
      const medicamento = await MedicamentoService.createMedicamento(nombre);
      res.status(201).json(medicamento);
    } catch (error) {
      res.status(500).send('Error al crear el medicamento');
    }
  }

  public async getAllMedicamento(req: Request, res: Response) {
    try {
      const medicamentos = await MedicamentoService.getAllMedicamento();
      res.status(200).json(medicamentos);
    } catch (error) {
      res.status(500).send('Error al obtener los medicamentos');
    }
  }

  public async getMedicamentoById(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const medicamento = await MedicamentoService.getMedicamentoById(String(id));
      res.status(200).json(medicamento);
    } catch (error) {
      res.status(404).json((error as Error).message);
    }
  }

  public async updateMedicamento(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const data = req.body;
      const updatedMedicamento = await MedicamentoService.updateMedicamento(String(id), data);
      res.status(200).json(updatedMedicamento);
    } catch (error) {
      res.status(404).json((error as Error).message);
    }
  }

  public async deleteMedicamento(req: Request, res: Response) {
    try {
      const { id } = req.params;
      await MedicamentoService.deleteMedicamento(String(id));
      res.status(200).send('Medicamento eliminado');
    } catch (error) {
      const errorMessage = (error as Error).message;
      res.status(404).send(errorMessage);
    }
  }
}

export default new MedicamentoController();
