// 2. Consulta Service (consulta.service.ts)
import Consulta from '../models/consulta.model';
import ConsultaRepository from '../repositories/consulta.repository';

class ConsultaService {
  public async createConsulta(data: Partial<Consulta>) {
    return await ConsultaRepository.createConsulta(data);
  }

  public async getAllConsultas() {
    return await ConsultaRepository.findAllConsultas();
  }

  public async getConsultaById(id: number) {
    const consulta = await ConsultaRepository.findConsultaById(id);
    if (!consulta) {
      throw new Error('Consulta no encontrada');
    }
    return consulta;
  }

  public async getConsultaByPacienteId(pacienteId: number) {
    return await ConsultaRepository.findConsultaByPacienteId(pacienteId);
  }

  public async updateConsulta(id: number, data: Partial<Consulta>) {
    return await ConsultaRepository.updateConsulta(id, data);
  }

  public async deleteConsulta(id: number) {
    const deleted = await ConsultaRepository.deleteConsulta(id);
    if (deleted === 0) {
      throw new Error('Consulta no encontrada');
    }
    return deleted;
  }
}

export default new ConsultaService();