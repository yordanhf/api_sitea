import { Request, Response } from 'express';
import Paciente_AntecedenteService from '../services/paciente_antecedente.service';

class Paciente_AntecedenteController {
  public async createPaciente_Antecedente(req: Request, res: Response) {
    try {
      const data = req.body;
      const paciente_antecedente = await Paciente_AntecedenteService.createPaciente_Antecedente(data);
      res.status(201).json(paciente_antecedente);
    } catch (error) {
      res.status(500).json((error as Error).message);
    }
  }

  public async getAllPaciente_Antecedente(req: Request, res: Response) {
    try {
      const paciente_antecedentes = await Paciente_AntecedenteService.getAllPaciente_Antecedente();
      res.status(200).json(paciente_antecedentes);
    } catch (error) {
      res.status(500).json((error as Error).message);
    }
  }

  public async getPaciente_AntecedenteById(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const paciente_antecedente = await Paciente_AntecedenteService.getPaciente_AntecedenteById(Number(id));
      res.status(200).json(paciente_antecedente);
    } catch (error) {
      res.status(404).json((error as Error).message);
    }
  }

  public async getPaciente_AntecedenteByPacienteId(req: Request, res: Response) {
    try {
      const { pacienteId } = req.params;
      const paciente_antecedente = await Paciente_AntecedenteService.getPaciente_AntecedenteByPacienteId(Number(pacienteId));
      res.status(200).json(paciente_antecedente);
    } catch (error) {
      res.status(404).json((error as Error).message);
    }
  }

  public async updatePaciente_Antecedente(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const data = req.body;
      const updatedPaciente_Antecedente = await Paciente_AntecedenteService.updatePaciente_Antecedente(Number(id), data);
      res.status(200).json(updatedPaciente_Antecedente);
    } catch (error) {
      res.status(404).json((error as Error).message);
    }
  }

  public async deletePaciente_Antecedente(req: Request, res: Response) {
    try {
      const { id } = req.params;
      await Paciente_AntecedenteService.deletePaciente_Antecedente(Number(id));
      res.status(200).json({ message: 'Paciente_Antecedente eliminado con éxito' });
    } catch (error) {
      res.status(404).json((error as Error).message);
    }
  }
}

export default new Paciente_AntecedenteController();