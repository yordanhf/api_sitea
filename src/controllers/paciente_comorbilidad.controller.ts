import { Request, Response } from 'express';
import Paciente_ComorbilidadService from '../services/paciente_comorbilidad.service';

class Paciente_ComorbilidadController {
  public async createPaciente_Comorbilidad(req: Request, res: Response) {
    try {
      const data = req.body;
      const Paciente_comorbilidad = await Paciente_ComorbilidadService.createPaciente_Comorbilidad(data);
      res.status(201).json(Paciente_comorbilidad);
    } catch (error) {
      res.status(500).json({ error: (error as Error).message });
    }
  }

  public async getAllPaciente_Comorbilidad(req: Request, res: Response) {
    try {
      const Paciente_comorbilidads = await Paciente_ComorbilidadService.getAllPaciente_Comorbilidad();
      res.status(200).json(Paciente_comorbilidads);
    } catch (error) {
      res.status(500).json({ error: (error as Error).message });
    }
  }

  public async getPaciente_ComorbilidadById(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const Paciente_comorbilidad = await Paciente_ComorbilidadService.getPaciente_ComorbilidadById(Number(id));
      res.status(200).json(Paciente_comorbilidad);
    } catch (error) {
      res.status(404).json((error as Error).message);
    }
  }

  public async getPaciente_ComorbilidadByPacienteId(req: Request, res: Response) {
    try {
      const { pacienteId } = req.params;
      const Paciente_comorbilidad = await Paciente_ComorbilidadService.getPaciente_ComorbilidadByPacienteId(Number(pacienteId));
      res.status(200).json(Paciente_comorbilidad);
    } catch (error) {
      res.status(404).json((error as Error).message);
    }
  }

  public async updatePaciente_Comorbilidad(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const data = req.body;
      const updatedPaciente_comorbilidad = await Paciente_ComorbilidadService.updatePaciente_Comorbilidad(Number(id), data);
      res.status(200).json(updatedPaciente_comorbilidad);
    } catch (error) {
      res.status(404).json((error as Error).message);
    }
  }

  public async deletePaciente_Comorbilidad(req: Request, res: Response) {
    try {
      const { id } = req.params;
      await Paciente_ComorbilidadService.deletePaciente_Comorbilidad(Number(id));
      res.status(200).send('Paciente_comorbilidad eliminado');
    } catch (error) {
      const errorMessage = (error as Error).message;
      res.status(404).send(errorMessage);
    }
  }
}

export default new Paciente_ComorbilidadController();
