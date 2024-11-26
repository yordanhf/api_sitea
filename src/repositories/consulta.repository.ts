import Consulta from '../models/consulta.model';

class ConsultaRepository {
  public async createConsulta(data: Partial<Consulta>) {
    return await Consulta.create(data);
  }

  public async findAllConsultas() {
    return await Consulta.findAll();
  }

  public async findConsultaById(id: number) {
    return await Consulta.findByPk(id);
  }

  public async findConsultaByPacienteId(pacienteId: number) {
    return await Consulta.findAll({
      where: { pacienteId },
    });}

  public async updateConsulta(id: number, data: Partial<Consulta>) {
    const consulta = await Consulta.findByPk(id);
    if (consulta) {
      return await consulta.update(data);
    }
    throw new Error('Consulta no encontrada');
  }

  public async deleteConsulta(id: number) {
    const deleted = await Consulta.destroy({ where: { id } });
    if (deleted) {
      return deleted;
    }
    throw new Error('Consulta no encontrada');
  }
}

export default new ConsultaRepository();


