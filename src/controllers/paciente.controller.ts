// 3. Paciente Controller (paciente.controller.ts)
import { Request, Response } from 'express';
import PacienteService from '../services/paciente.service';

class PacienteController {
  public async createPaciente(req: Request, res: Response) {
    try {
      const usuarioToken = (req as any)['user'];
      const data = req.body;
      const paciente = await PacienteService.createPaciente(data, usuarioToken.id);
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
      const paciente = await PacienteService.getPacienteById(String(id));
      res.status(200).json(paciente);
    } catch (error) {
      res.status(404).json((error as Error).message);
    }
  }

  public async getAllPacientesByMunicipios(req: Request, res: Response) {
    try {
      const { municipio } = req.params;
      const pacientes = await PacienteService.getAllPacientesByMunicipio(String(municipio));
      res.status(200).json(pacientes);
    } catch (error) {
      res.status(500).json((error as Error).message);
    }
  }

  public async getPacientesByParams(req: Request, res: Response) {
    try {
      const params = req.query;
      const pacientes = await PacienteService.getPacientesByParams(params);
      res.status(200).json(pacientes);
    } catch (error) {
      res.status(500).json({ error: (error as Error).message });
    }
  }

  public async updatePaciente(req: Request, res: Response) {
    try {
      const usuarioToken = (req as any)['user'];
      const { id } = req.params;
      const data = req.body;
      const updatedPaciente = await PacienteService.updatePaciente(String(id), data, usuarioToken.id);
      res.status(200).json(updatedPaciente);
    } catch (error) {
      res.status(404).json((error as Error).message);
    }
  }

  public async getPacientesCountByMunicipio(req: Request, res: Response) {
    try {
      const result = await PacienteService.getPacientesCountByMunicipio();
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json( (error as Error).message );
    }
  }

  public async deletePaciente(req: Request, res: Response) {
    try {
      const usuarioToken = (req as any)['user'];
      const { id } = req.params;
      await PacienteService.deletePaciente(String(id), usuarioToken.id );
      res.status(200).json({ message: 'Paciente eliminado con éxito' });
    } catch (error) {
      res.status(404).json((error as Error).message);
    }
  }
}

export default new PacienteController();