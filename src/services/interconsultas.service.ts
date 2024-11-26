import Interconsultas from '../models/interconsultas.model';
import InterconsultasRepository from '../repositories/interconsultas.repository';

class InterconsultasService {
  public async createInterconsultas(nombre: string) {
    return await InterconsultasRepository.createInterconsultas( nombre );
  }

  public async getAllInterconsultas() {
    return await InterconsultasRepository.findAllInterconsultas();
  }

  public async getInterconsultasById(id: number) {
    const interconsultas = await InterconsultasRepository.findInterconsultasById(id);
    if (!interconsultas) {
      throw new Error('Interconsultas no encontrada');
    }
    return interconsultas;
  }

  public async updateInterconsultas(id: number, data: Partial<Interconsultas>) {
    return await InterconsultasRepository.updateInterconsultas(id, data);
  }

  public async deleteInterconsultas(id: number) {
    const deleted = await InterconsultasRepository.deleteInterconsultas(id);
    if (deleted === 0) {
      throw new Error('Interconsultas no encontrada');
    }
    return deleted;
  }
}

export default new InterconsultasService();