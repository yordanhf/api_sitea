import Tratamiento from '../models/tratamiento.model';
import TratamientoRepository from '../repositories/tratamiento.repository';

class TratamientoService {
  public async createTratamiento(data: Partial<Tratamiento>) {
    return await TratamientoRepository.createTratamiento( data );
  }

  public async getAllTratamiento() {
    return await TratamientoRepository.findAllTratamiento();
  }

  public async getTratamientoById(id: number) {
    const tratamiento = await TratamientoRepository.findTratamientoById(id);
    if (!tratamiento) {
      throw new Error('Tratamiento no encontrado');
    }
    return tratamiento;
  }

  public async getTratamientoByPacienteId(pacienteId: number) {
    return await TratamientoRepository.findTratamientoByPacienteId(pacienteId);
  }

  public async updateTratamiento(id: number, data: Partial<Tratamiento>) {
    return await TratamientoRepository.updateTratamiento(id, data);
  }

  public async deleteTratamiento(id: number) {
    const deleted = await TratamientoRepository.deleteTratamiento(id);
    if (deleted === 0) {
      throw new Error('Tratamiento no encontrado');
    }
    return deleted;
  }
}

export default new TratamientoService();