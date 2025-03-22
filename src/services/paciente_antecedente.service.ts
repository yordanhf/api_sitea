import Paciente_AntecedenteRepository from '../repositories/paciente_antecedente.repository';
import Paciente_Antecedente from '../models/paciente_antecedente.model';

class Paciente_AntecedenteService {
  public async createPaciente_Antecedente(data: Partial<Paciente_Antecedente>) {
    return await Paciente_AntecedenteRepository.createPaciente_Antecedente(data);
  }

  public async getAllPaciente_Antecedente() {
    return await Paciente_AntecedenteRepository.findAllPaciente_Antecedente();
  }

  public async getPaciente_AntecedenteById(id: string) {
    const alergia = await Paciente_AntecedenteRepository.findPaciente_AntecedenteById(id);
    if (!alergia) {
      throw new Error('Paciente_Antecedente no encontrado');
    }
    return alergia;
  }

  public async getPaciente_AntecedenteByPacienteId(pacienteId: string) {
    return await Paciente_AntecedenteRepository.findPaciente_AntecedenteByPacienteId(pacienteId);
  }

  public async updatePaciente_Antecedente(id: string, data: Partial<Paciente_Antecedente>) {
    return await Paciente_AntecedenteRepository.updatePaciente_Antecedente(id, data);
  }

  public async deletePaciente_Antecedente(id: string) {
    return await Paciente_AntecedenteRepository.deletePaciente_Antecedente(id);
  }
}

export default new Paciente_AntecedenteService();