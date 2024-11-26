// src/repositories/caracteristica.repository.ts
import Caracteristica from '../models/caracteristica.model';

class CaracteristicaRepository {
  public async createCaracteristica(nombre: string) {
    return await Caracteristica.create({ nombre });
  }

  public async findAllCaracteristica() {
    return await Caracteristica.findAll();
  }

  public async findCaracteristicaById(id: number) {
    return await Caracteristica.findByPk(id);
  }

  public async updateCaracteristica(id: number, data: Partial<Caracteristica>) {
    const caracteristica = await Caracteristica.findByPk(id);
    if (caracteristica) {
      return await caracteristica.update(data);
    }
    throw new Error('Caracteristica no encontrada');
  }

  public async deleteCaracteristica(id: number) {
    const deleted = await Caracteristica.destroy({ where: { id } });
    if (deleted) {
      return deleted;
    }
    throw new Error('Caracteristica no encontrada');
  } 
}

export default new CaracteristicaRepository();
