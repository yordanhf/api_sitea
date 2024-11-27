import Paciente_Antecedente from '../models/paciente_antecedente.model';
import Paciente from '../models/paciente.model';
import AntecedentesPPP from '../models/antecedentesPPP.model';

class Paciente_AntecedenteRepository {
  // Crear una nueva paciente_antecedente
  public async createPaciente_Antecedente(data: Partial<Paciente_Antecedente>) {
    return await Paciente_Antecedente.create(data);
  }

  // Obtener todas las paciente_antecedentes
  public async findAllPaciente_Antecedente() {
    return await Paciente_Antecedente.findAll({       
      include: [        
        { model: Paciente, attributes: ['nombre', 'apellidos'], as: 'paciente' },
        { model: AntecedentesPPP, attributes: ['nombre'], as: 'antecedentesPPP' },
      ],
    });
  }

  // Obtener una paciente_antecedente por ID
  public async findPaciente_AntecedenteById(id: number) {
    return await Paciente_Antecedente.findByPk(id, {
      include: [ 
        { model: Paciente, attributes: ['nombre', 'apellidos'], as: 'paciente' },
        { model: AntecedentesPPP, attributes: ['nombre'], as: 'antecedentesPPP' },
      ],
    });
  }

  // Obtener todas las paciente_antecedentes de un paciente
  public async findPaciente_AntecedenteByPacienteId(pacienteId: number) {
    return await Paciente_Antecedente.findAll({
      where: { pacienteId },
      include: [{ model: Paciente, attributes: ['nombre', 'apellidos'], as: 'paciente' }, 
                { model: AntecedentesPPP, as: 'antecedentesPPP' }],
    });
  }

  // Actualizar una paciente_antecedente por ID
  public async updatePaciente_Antecedente(id: number, data: Partial<Paciente_Antecedente>) {
    const paciente_antecedente = await Paciente_Antecedente.findByPk(id);
    if (paciente_antecedente) {
      return await paciente_antecedente.update(data);
    }
    throw new Error('Paciente_Antecedente no encontrada');
  }

  // Eliminar una paciente_antecedente (podría ser marcar como inactiva si lo prefieres)
  public async deletePaciente_Antecedente(id: number) {
    const paciente_antecedente = await Paciente_Antecedente.findByPk(id);
    if (paciente_antecedente) {
      return await paciente_antecedente.destroy();
    }
    throw new Error('Paciente_Antecedente no encontrada');
  }
}

export default new Paciente_AntecedenteRepository();