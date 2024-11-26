import ExamenComplementario from '../models/examenes_complementarios.model';


class ExamenComplementarioRepository {
  public async createExamenComplementario(data: Partial<ExamenComplementario>) {        
    return await ExamenComplementario.create( data );
  }

  public async findAllExamenComplementario() {
    return await ExamenComplementario.findAll();
  }

  public async findExamenComplementarioById(id: number) {
    return await ExamenComplementario.findByPk(id);
  }

  public async findExamenComplementarioByPacienteId(pacienteId: number) {
    return await ExamenComplementario.findAll({
      where: { pacienteId },
    });}


  public async updateExamenComplementario(id: number, data: Partial<ExamenComplementario>) {
    const examenesComplementarios = await ExamenComplementario.findByPk(id);
    if (examenesComplementarios) {
      return await examenesComplementarios.update(data);
    }
    throw new Error('Examen Complementario no encontrado');
  }


  public async deleteExamenComplementario(id: number) {
    const deleted = await ExamenComplementario.destroy({ where: { id } });
    if (deleted) {
      return deleted;
    }
    throw new Error('Examen Complementario no encontrado');
  }

}

export default new ExamenComplementarioRepository();
