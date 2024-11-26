import listaFortalezas from '../models/lista_fortalezas.model';
import FortalezasRepository from '../repositories/lista_fortalezas.repository';

class ListaFortalezasService {
  public async createListaFortalezas(nombre: string) {
    return await FortalezasRepository.createListaFortalezas( nombre );
  }

  public async getAllListaFortalezas() {
    return await FortalezasRepository.findAllListaFortalezas();
  }

  public async getListaFortalezasById(id: number) {
    const fortaleza = await FortalezasRepository.findListaFortalezasById(id);
    if (!fortaleza) {
      throw new Error('Fortalezas no encontrada');
    }
    return fortaleza;
  }

  public async updateListaFortalezas(id: number, data: Partial<listaFortalezas>) {
    return await FortalezasRepository.updateListaFortalezas(id, data);
  }

  public async deleteListaFortalezas(id: number) {
    const deleted = await FortalezasRepository.deleteListaFortalezas(id);
    if (deleted === 0) {
      throw new Error('Fortalezas no encontrada');
    }
    return deleted;
  }
}

export default new ListaFortalezasService();