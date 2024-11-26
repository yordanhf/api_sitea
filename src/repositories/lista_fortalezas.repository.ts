import listaFortalezas from '../models/lista_fortalezas.model';

class ListaFortalezasRepository {
  public async createListaFortalezas(nombre: string) {
    return await listaFortalezas.create({ nombre });
  }

  public async findAllListaFortalezas() {
    return await listaFortalezas.findAll();
  }

  public async findListaFortalezasById(id: number) {
    return await listaFortalezas.findByPk(id);
  }

  public async updateListaFortalezas(id: number, data: Partial<listaFortalezas>) {
    const fortaleza = await listaFortalezas.findByPk(id);
    if (fortaleza) {
      return await fortaleza.update(data);
    }
    throw new Error('Fortaleza no encontrada');
  }


  public async deleteListaFortalezas(id: number) {
    const deleted = await listaFortalezas.destroy({ where: { id } });
    if (deleted) {
      return deleted;
    }
    throw new Error('Fortaleza no encontrada');
  }

}

export default new ListaFortalezasRepository();
