// 1. Paciente Repository (paciente.repository.ts)
import Paciente from '../models/paciente.model';

class PacienteRepository {
  public async createPaciente(data: Partial<Paciente>) {
    return await Paciente.create(data);
  }

  public async findAllPacientes() {
    return await Paciente.findAll();
  }

  public async findPacienteById(id: number) {
    return await Paciente.findByPk(id);
  }

  public async updatePaciente(id: number, data: Partial<Paciente>) {
    const paciente = await Paciente.findByPk(id);
    if (paciente) {
      return await paciente.update(data);
    }
    throw new Error('Paciente no encontrado');
  }

  public async findAllPacientesByMunicipio(municipio_: string) {
    return await Paciente.findAll({ where: { municipio : municipio_ } });
  }

  public async deletePaciente(id: number) {
    const deleted = await Paciente.destroy({ where: { id } });
    if (deleted) {
      return deleted;
    }
    throw new Error('Paciente no encontrado');
  }
}

export default new PacienteRepository();