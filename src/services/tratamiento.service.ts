import Tratamiento from '../models/tratamiento.model';
import TratamientoRepository from '../repositories/tratamiento.repository';

class TratamientoService {
  public async createTratamiento(data: Partial<Tratamiento>) {
    return await TratamientoRepository.createTratamiento( data );
  }

  public async getAllTratamiento() {
    return await TratamientoRepository.findAllTratamiento();
  }

  public async getTratamientoById(id: string) {
    const tratamiento = await TratamientoRepository.findTratamientoById(id);
    if (!tratamiento) {
      throw new Error('Tratamiento no encontrado');
    }
    return tratamiento;
  }

  public async getTratamientoByPacienteId(pacienteId: string) {
    return await TratamientoRepository.findTratamientoByPacienteId(pacienteId);
  }

  public async updateTratamiento(id: string, data: Partial<Tratamiento>) {
    return await TratamientoRepository.updateTratamiento(id, data);
  }

  public async deleteTratamiento(id: string) {
    const deleted = await TratamientoRepository.deleteTratamiento(id);
    if (deleted === 0) {
      throw new Error('Tratamiento no encontrado');
    }
    return deleted;
  }
}

export default new TratamientoService();