import AntecedentesPPP from '../models/antecedentesPPP.model';
import AntecedentesPPPRepository from '../repositories/antecedentesPPP.repository';

class AntecedentesPPPService {
  public async createAntecedentesPPP(nombre: string) {
    return await AntecedentesPPPRepository.createAntecedentesPPP( nombre );
  }

  public async getAllAntecedentesPPP() {
    return await AntecedentesPPPRepository.findAllAntecedentesPPP();
  }

  public async getAntecedentesPPPById(id: number) {
    const antecedentesPPP = await AntecedentesPPPRepository.findAntecedentesPPPById(id);
    if (!antecedentesPPP) {
      throw new Error('Antecedente no encontrado');
    }
    return antecedentesPPP;
  }

  public async updateAntecedentesPPP(id: number, data: Partial<AntecedentesPPP>) {
    return await AntecedentesPPPRepository.updateAntecedentesPPP(id, data);
  }

  public async deleteAntecedentesPPP(id: number) {
    const deleted = await AntecedentesPPPRepository.deleteAntecedentesPPP(id);
    if (deleted === 0) {
      throw new Error('Antecedente no encontrado');
    }
    return deleted;
  }
}

export default new AntecedentesPPPService();