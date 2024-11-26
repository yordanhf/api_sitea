import { Request, Response } from 'express';
import Paciente_FortalezaService from '../services/paciente_fortaleza.service';

class Paciente_FortalezaController {
  public async createPaciente_Fortaleza(req: Request, res: Response) {
    try {
      const data = req.body;
      const Paciente_fortaleza = await Paciente_FortalezaService.createPaciente_Fortaleza(data);
      res.status(201).json(Paciente_fortaleza);
    } catch (error) {
      res.status(500).json({ error: (error as Error).message });
    }
  }

  public async getAllPaciente_Fortaleza(req: Request, res: Response) {
    try {
      const Paciente_fortalezas = await Paciente_FortalezaService.getAllPaciente_Fortaleza();
      res.status(200).json(Paciente_fortalezas);
    } catch (error) {
      res.status(500).json({ error: (error as Error).message });
    }
  }

  public async getPaciente_FortalezaById(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const Paciente_fortaleza = await Paciente_FortalezaService.getPaciente_FortalezaById(Number(id));
      res.status(200).json(Paciente_fortaleza);
    } catch (error) {
      res.status(404).json((error as Error).message);
    }
  }

  public async getPaciente_FortalezaByPacienteId(req: Request, res: Response) {
    try {
      const { pacienteId } = req.params;
      const Paciente_fortaleza = await Paciente_FortalezaService.getPaciente_FortalezaByPacienteId(Number(pacienteId));
      res.status(200).json(Paciente_fortaleza);
    } catch (error) {
      res.status(404).json((error as Error).message);
    }
  }

  public async updatePaciente_Fortaleza(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const data = req.body;
      const updatedPaciente_fortaleza = await Paciente_FortalezaService.updatePaciente_Fortaleza(Number(id), data);
      res.status(200).json(updatedPaciente_fortaleza);
    } catch (error) {
      res.status(404).json((error as Error).message);
    }
  }

  public async deletePaciente_Fortaleza(req: Request, res: Response) {
    try {
      const { id } = req.params;
      await Paciente_FortalezaService.deletePaciente_Fortaleza(Number(id));
      res.status(200).send('Paciente_fortaleza eliminado');
    } catch (error) {
      const errorMessage = (error as Error).message;
      res.status(404).send(errorMessage);
    }
  }
}

export default new Paciente_FortalezaController();
