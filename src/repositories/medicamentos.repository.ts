// src/repositories/medicamento.repository.ts
import Medicamentos from '../models/medicamentos.model';

class MedicamentosRepository {
  public async createMedicamentos(nombre: string) {
    return await Medicamentos.create({ nombre });
  }

  public async findAllMedicamentos() {
    return await Medicamentos.findAll();
  }

  public async findMedicamentosById(id: number) {
    return await Medicamentos.findByPk(id);
  }

  public async updateMedicamentos(id: number, data: Partial<Medicamentos>) {
    const medicamentos = await Medicamentos.findByPk(id);
    if (medicamentos) {
      return await medicamentos.update(data);
    }
    throw new Error('Medicamentos no encontrado');
  }


  public async deleteMedicamentos(id: number) {
    const deleted = await Medicamentos.destroy({ where: { id } });
    if (deleted) {
      return deleted;
    }
    throw new Error('medicamentos no encontrado');
  }

}

export default new MedicamentosRepository();
