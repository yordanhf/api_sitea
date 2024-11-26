import { Request, Response } from 'express';
import Paciente_CClinicasService from '../services/paciente_cclinicas.service';

class Paciente_CClinicasController {
  public async createPaciente_CClinicas(req: Request, res: Response) {
    try {
      const data = req.body;
      const Paciente_cclinicas = await Paciente_CClinicasService.createPaciente_CClinicas(data);
      res.status(201).json(Paciente_cclinicas);
    } catch (error) {
      res.status(500).json({ error: (error as Error).message });
    }
  }

  public async getAllPaciente_CClinicas(req: Request, res: Response) {
    try {
      const Paciente_cclinicass = await Paciente_CClinicasService.getAllPaciente_CClinicas();
      res.status(200).json(Paciente_cclinicass);
    } catch (error) {
      res.status(500).json({ error: (error as Error).message });
    }
  }

  public async getPaciente_CClinicasById(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const Paciente_cclinicas = await Paciente_CClinicasService.getPaciente_CClinicasById(Number(id));
      res.status(200).json(Paciente_cclinicas);
    } catch (error) {
      res.status(404).json((error as Error).message);
    }
  }

  public async getPaciente_CClinicasByPacienteId(req: Request, res: Response) {
    try {
      const { pacienteId } = req.params;
      const Paciente_cclinicas = await Paciente_CClinicasService.getPaciente_CClinicasByPacienteId(Number(pacienteId));
      res.status(200).json(Paciente_cclinicas);
    } catch (error) {
      res.status(404).json((error as Error).message);
    }
  }

  public async updatePaciente_CClinicas(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const data = req.body;
      const updatedPaciente_cclinicas = await Paciente_CClinicasService.updatePaciente_CClinicas(Number(id), data);
      res.status(200).json(updatedPaciente_cclinicas);
    } catch (error) {
      res.status(404).json((error as Error).message);
    }
  }

  public async deletePaciente_CClinicas(req: Request, res: Response) {
    try {
      const { id } = req.params;
      await Paciente_CClinicasService.deletePaciente_CClinicas(Number(id));
      res.status(200).send('Paciente_cclinicas eliminado');
    } catch (error) {
      const errorMessage = (error as Error).message;
      res.status(404).send(errorMessage);
    }
  }
}

export default new Paciente_CClinicasController();
