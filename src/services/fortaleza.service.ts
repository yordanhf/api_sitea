import Fortaleza from '../models/fortaleza.model';
import FortalezaRepository from '../repositories/fortaleza.repository';

class FortalezaService {
  public async createFortaleza(nombre: string) {
    return await FortalezaRepository.createFortaleza( nombre );
  }

  public async getAllFortaleza() {
    return await FortalezaRepository.findAllFortaleza();
  }

  public async getFortalezaById(id: string) {
    const fortaleza = await FortalezaRepository.findFortalezaById(id);
    if (!fortaleza) {
      throw new Error('Fortaleza no encontrada');
    }
    return fortaleza;
  }

  public async updateFortaleza(id: string, data: Partial<Fortaleza>) {
    return await FortalezaRepository.updateFortaleza(id, data);
  }

  public async deleteFortaleza(id: string) {
    const deleted = await FortalezaRepository.deleteFortaleza(id);
    if (deleted === 0) {
      throw new Error('Fortaleza no encontrada');
    }
    return deleted;
  }
}

export default new FortalezaService();