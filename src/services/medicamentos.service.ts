// src/services/medicamento.service.ts
import Medicamentos from '../models/medicamentos.model';
import MedicamentosRepository from '../repositories/medicamentos.repository';

class MedicamentosService {
  public async createMedicamentos(nombre: string) {
    return await MedicamentosRepository.createMedicamentos(nombre);
  }

  public async getAllMedicamentos() {
    return await MedicamentosRepository.findAllMedicamentos();
  }

  public async getMedicamentosById(id: number) {
    const medicamento = await MedicamentosRepository.findMedicamentosById(id);
    if (!medicamento) {
      throw new Error('Medicamentos no encontrado');
    }
    return medicamento;
  }

  public async updateMedicamentos(id: number, data: Partial<Medicamentos>) {
    return await MedicamentosRepository.updateMedicamentos(id, data);
  }

  public async deleteMedicamentos(id: number) {
    const deleted = await MedicamentosRepository.deleteMedicamentos(id);
    if (deleted === 0) {
      throw new Error('Medicamentos no encontrado');
    }
    return deleted;
  }
}

export default new MedicamentosService();
