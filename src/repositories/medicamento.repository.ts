// src/repositories/medicamento.repository.ts
import Medicamento from '../models/medicamento.model';

class MedicamentoRepository {
  public async createMedicamento(nombre: string) {
    return await Medicamento.create({ nombre });
  }

  public async findAllMedicamento() {
    return await Medicamento.findAll();
  }

  public async findMedicamentoById(id: string) {
    return await Medicamento.findByPk(id);
  }

  public async updateMedicamento(id: string, data: Partial<Medicamento>) {
    const medicamento = await Medicamento.findByPk(id);
    if (medicamento) {
      return await medicamento.update(data);
    }
    throw new Error('Medicamento no encontrado');
  }


  public async deleteMedicamento(id: string) {
    const deleted = await Medicamento.destroy({ where: { id } });
    if (deleted) {
      return deleted;
    }
    throw new Error('medicamento no encontrado');
  }

}

export default new MedicamentoRepository();
