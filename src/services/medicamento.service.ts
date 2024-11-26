// src/services/medicamento.service.ts
import Medicamento from '../models/medicamento.model';
import MedicamentoRepository from '../repositories/medicamento.repository';

class MedicamentoService {
  public async createMedicamento(nombre: string) {
    return await MedicamentoRepository.createMedicamento(nombre);
  }

  public async getAllMedicamento() {
    return await MedicamentoRepository.findAllMedicamento();
  }

  public async getMedicamentoById(id: number) {
    const medicamento = await MedicamentoRepository.findMedicamentoById(id);
    if (!medicamento) {
      throw new Error('Medicamento no encontrado');
    }
    return medicamento;
  }

  public async updateMedicamento(id: number, data: Partial<Medicamento>) {
    return await MedicamentoRepository.updateMedicamento(id, data);
  }

  public async deleteMedicamento(id: number) {
    const deleted = await MedicamentoRepository.deleteMedicamento(id);
    if (deleted === 0) {
      throw new Error('Medicamento no encontrado');
    }
    return deleted;
  }
}

export default new MedicamentoService();
