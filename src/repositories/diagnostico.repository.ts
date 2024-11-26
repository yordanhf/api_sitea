import Diagnostico from '../models/diagnostico.model';

class DiagnosticoRepository {
  public async createDiagnostico(nombre: string) {
    return await Diagnostico.create({ nombre });
  }

  public async findAllDiagnostico() {
    return await Diagnostico.findAll();
  }

  public async findDiagnosticoById(id: number) {
    return await Diagnostico.findByPk(id);
  }

  public async updateDiagnostico(id: number, data: Partial<Diagnostico>) {
    const diagnostico = await Diagnostico.findByPk(id);
    if (diagnostico) {
      return await diagnostico.update(data);
    }
    throw new Error('<Diagnostico no encontrado');
  }


  public async deleteDiagnostico(id: number) {
    const deleted = await Diagnostico.destroy({ where: { id } });
    if (deleted) {
      return deleted;
    }
    throw new Error('Diagnostico no encontrado');
  }

}

export default new DiagnosticoRepository();
