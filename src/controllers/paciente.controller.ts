// 3. Paciente Controller (paciente.controller.ts)
import { Request, Response } from 'express';
import PacienteService from '../services/paciente.service';

class PacienteController {
  public async createPaciente(req: Request, res: Response) {
    try {
      const data = req.body;
      const paciente = await PacienteService.createPaciente(data);
      res.status(201).json(paciente);
    } catch (error) {
      res.status(500).json( (error as Error).message);
    }
  }

  public async getAllPacientes(req: Request, res: Response) {
    try {
      const pacientes = await PacienteService.getAllPacientes();
      res.status(200).json(pacientes);
    } catch (error) {
      res.status(500).json((error as Error).message);
    }
  }

  public async getPacienteById(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const paciente = await PacienteService.getPacienteById(Number(id));
      res.status(200).json(paciente);
    } catch (error) {
      res.status(404).json((error as Error).message);
    }
  }

  public async getAllPacientesByMunicipios(req: Request, res: Response) {
    try {
      const {municipioId} = req.params;
      const pacientes = await PacienteService.getAllPacientesByMunicipio(Number(municipioId));
      res.status(200).json(pacientes);
    } catch (error) {
      res.status(500).json((error as Error).message);
    }
  }

  public async updatePaciente(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const data = req.body;
      const updatedPaciente = await PacienteService.updatePaciente(Number(id), data);
      res.status(200).json(updatedPaciente);
    } catch (error) {
      res.status(404).json((error as Error).message);
    }
  }

  public async deletePaciente(req: Request, res: Response) {
    try {
      const { id } = req.params;
      await PacienteService.deletePaciente(Number(id));
      res.status(200).json({ message: 'Paciente eliminado con éxito' });
    } catch (error) {
      res.status(404).json((error as Error).message);
    }
  }
}

export default new PacienteController();