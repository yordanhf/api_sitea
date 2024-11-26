// src/repositories/antecedentesPPP.repository.ts
import AntecedentesPPP from '../models/antecedentesPPP.model';

class AntecedentesPPPRepository {
  public async createAntecedentesPPP(nombre: string) {
    return await AntecedentesPPP.create({ nombre });
  }

  public async findAllAntecedentesPPP() {
    return await AntecedentesPPP.findAll();
  }

  public async findAntecedentesPPPById(id: number) {
    return await AntecedentesPPP.findByPk(id);
  }

  public async updateAntecedentesPPP(id: number, data: Partial<AntecedentesPPP>) {
    const antecedentesPPP = await AntecedentesPPP.findByPk(id);
    if (antecedentesPPP) {
      return await antecedentesPPP.update(data);
    }
    throw new Error('Antecedente no encontrado');
  }

  public async deleteAntecedentesPPP(id: number) {
    const deleted = await AntecedentesPPP.destroy({ where: { id } });
    if (deleted) {
      return deleted;
    }
    throw new Error('Antecedente no encontrado');
  } 
}

export default new AntecedentesPPPRepository();
