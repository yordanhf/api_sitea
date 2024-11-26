// src/repositories/municipio.repository.ts
import Municipio from '../models/municipio.model';

class MunicipioRepository {
  public async createMunicipio(data: Partial<Municipio>) {
    return await Municipio.create( data );
  }

  public async findAllMunicipio() {
    return await Municipio.findAll();
  }

  public async findMunicipioById(id: number) {
    return await Municipio.findByPk(id);
  }

  public async updateMunicipio(id: number, data: Partial<Municipio>) {
    const municipio = await Municipio.findByPk(id);
    if (municipio) {
      return await municipio.update(data);
    }
    throw new Error('Municipio no encontrado');
  }


  public async deleteMunicipio(id: number) {
    const deleted = await Municipio.destroy({ where: { id } });
    if (deleted) {
      return deleted;
    }
    throw new Error('municipio no encontrado');
  }

}

export default new MunicipioRepository();
