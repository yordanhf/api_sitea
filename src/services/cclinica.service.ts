import CClinica from '../models/cclinica.model';
import CClinicaRepository from '../repositories/cclinica.repository';

class CClinicaService {
  public async createCClinica(nombre: string) {
    return await CClinicaRepository.createCClinica( nombre );
  }

  public async getAllCClinica() {
    return await CClinicaRepository.findAllCClinica();
  }

  public async getCClinicaById(id: number) {
    const cclinica = await CClinicaRepository.findCClinicaById(id);
    if (!cclinica) {
      throw new Error('Caracteristica no encontrada');
    }
    return cclinica;
  }

  public async updateCClinica(id: number, data: Partial<CClinica>) {
    return await CClinicaRepository.updateCClinica(id, data);
  }

  public async deleteCClinica(id: number) {
    const deleted = await CClinicaRepository.deleteCClinica(id);
    if (deleted === 0) {
      throw new Error('CClinica no encontrada');
    }
    return deleted;
  }
}

export default new CClinicaService();