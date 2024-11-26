import { Request, Response } from 'express';
import ConsultaService from '../services/consulta.service';

class ConsultaController {
  public async createConsulta(req: Request, res: Response) {
    try {
      const data = req.body;
      const consulta = await ConsultaService.createConsulta(data);
      res.status(201).json(consulta);
    } catch (error) {
      res.status(404).json( (error as Error).message);
    }
  }

  public async getAllConsultas(req: Request, res: Response) {
    try {
      const consultas = await ConsultaService.getAllConsultas();
      res.status(200).json(consultas);
    } catch (error) {
      res.status(500).json((error as Error).message);
    }
  }

  public async getConsultaById(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const consulta = await ConsultaService.getConsultaById(Number(id));
      res.status(200).json(consulta);
    } catch (error) {
      res.status(404).json((error as Error).message);
    }
  }

  public async getConsultaByPacienteId(req: Request, res: Response) {
    try {
      const { pacienteId } = req.params;
      const consulta = await ConsultaService.getConsultaByPacienteId(Number(pacienteId));
      res.status(200).json(consulta);
    } catch (error) {
      res.status(404).json((error as Error).message);
    }
  }

  public async updateConsulta(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const data = req.body;
      const updatedConsulta = await ConsultaService.updateConsulta(Number(id), data);
      res.status(200).json(updatedConsulta);
    } catch (error) {
      res.status(404).json((error as Error).message);
    }
  }

  public async deleteConsulta(req: Request, res: Response) {
    try {
      const { id } = req.params;
      await ConsultaService.deleteConsulta(Number(id));
      res.status(200).json({ message: 'Consulta eliminada con éxito' });
    } catch (error) {
      res.status(404).json((error as Error).message);
    }
  }
}

export default new ConsultaController();