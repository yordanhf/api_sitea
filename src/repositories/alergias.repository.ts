import Alergias from '../models/alergias.model';
import Paciente from '../models/paciente.model';
import Medicamento from '../models/medicamento.model';

class AlergiaRepository {
  // Crear una nueva alergia
  public async createAlergia(data: Partial<Alergias>) {
    return await Alergias.create(data);
  }

  // Obtener todas las alergias
  public async findAllAlergias() {
    return await Alergias.findAll({       
      include: [        
        { model: Paciente, attributes: ['nombre', 'apellidos', 'ci', 'id'],  as: 'paciente' },
        { model: Medicamento, attributes: ['nombre'], as: 'medicamento' },
      ],
    });
  }

  // Obtener una alergia por ID
  public async findAlergiaById(id: string) {
    return await Alergias.findByPk(id, {
      include: [ 
        { model: Paciente, attributes: ['nombre', 'apellidos', 'ci', 'id'], as: 'paciente' },
        { model: Medicamento, attributes: ['nombre'], as: 'medicamento' },
      ],
    });
  }

  // Obtener todas las alergias de un paciente
  public async findAlergiasByPacienteId(pacienteId: string) {
    return await Alergias.findAll({
      where: { pacienteId },
      include: [{ model: Medicamento, attributes: ['nombre'], as: 'medicamento' }],
    });
  }

  // Actualizar una alergia por ID
  public async updateAlergia(id: string, data: Partial<Alergias>) {
    const alergia = await Alergias.findByPk(id);
    if (alergia) {
      return await alergia.update(data);
    }
    throw new Error('Alergia no encontrada');
  }

  // Eliminar una alergia (podría ser marcar como inactiva si lo prefieres)
  public async deleteAlergia(id: string) {
    const alergia = await Alergias.findByPk(id);
    if (alergia) {
      return await alergia.destroy();
    }
    throw new Error('Alergia no encontrada');
  }
}

export default new AlergiaRepository();