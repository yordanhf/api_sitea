import { Request, Response } from 'express';
import TratamientoService from '../services/tratamiento.service';

class TratamientoController {
  public async createTratamiento(req: Request, res: Response) {
    try {
      const  data  = req.body;
      const tratamiento = await TratamientoService.createTratamiento(data);
      res.status(201).json(tratamiento);
    } catch (error) {
      res.status(500).json((error as Error).message);
    }
  }

  public async getAllTratamiento(req: Request, res: Response) {
    try {
      const tratamientos = await TratamientoService.getAllTratamiento();
      res.status(200).json(tratamientos);
    } catch (error) {
      res.status(500).send('Error al obtener los tratamientos');
    }
  }

  public async getTratamientoById(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const tratamiento = await TratamientoService.getTratamientoById(String(id));
      res.status(200).json(tratamiento);
    } catch (error) {
      res.status(404).json((error as Error).message);
    }
  }

  public async getTratamientoByPacienteId(req: Request, res: Response) {
    try {
      const { pacienteId } = req.params;
      const tratamiento = await TratamientoService.getTratamientoByPacienteId(String(pacienteId));
      res.status(200).json(tratamiento);
    } catch (error) {
      res.status(404).json((error as Error).message);
    }
  }

  public async updateTratamiento(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const data = req.body;
      const updatedTratamiento = await TratamientoService.updateTratamiento(String(id), data);
      res.status(200).json(updatedTratamiento);
    } catch (error) {
      res.status(404).json((error as Error).message);
    }
  }

  public async deleteTratamiento(req: Request, res: Response) {
    try {
      const { id } = req.params;
      await TratamientoService.deleteTratamiento(String(id));
      res.status(200).send('Tratamiento eliminado');
    } catch (error) {
      const errorMessage = (error as Error).message;
      res.status(404).send(errorMessage);
    }
  }
}

export default new TratamientoController();