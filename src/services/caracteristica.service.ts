import Caracteristica from '../models/caracteristica.model';
import CaracteristicaRepository from '../repositories/caracteristica.repository';

class CaracteristicaService {
  public async createCaracteristica(nombre: string) {
    return await CaracteristicaRepository.createCaracteristica( nombre );
  }

  public async getAllCaracteristica() {
    return await CaracteristicaRepository.findAllCaracteristica();
  }

  public async getCaracteristicaById(id: number) {
    const caracteristica = await CaracteristicaRepository.findCaracteristicaById(id);
    if (!caracteristica) {
      throw new Error('Caracteristica no encontrada');
    }
    return caracteristica;
  }

  public async updateCaracteristica(id: number, data: Partial<Caracteristica>) {
    return await CaracteristicaRepository.updateCaracteristica(id, data);
  }

  public async deleteCaracteristica(id: number) {
    const deleted = await CaracteristicaRepository.deleteCaracteristica(id);
    if (deleted === 0) {
      throw new Error('Caracteristica no encontrada');
    }
    return deleted;
  }
}

export default new CaracteristicaService();