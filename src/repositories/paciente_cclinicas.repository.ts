import Paciente_CClinicas from '../models/paciente_cclinicas.model';
import Paciente from '../models/paciente.model';
import CClinica from '../models/cclinica.model';

class Paciente_CClinicasRepository {
  public async createPaciente_CClinicas(data: Partial<Paciente_CClinicas>) {
    return await Paciente_CClinicas.create( data );
  }

  public async findAllPaciente_CClinicas() {
    return await Paciente_CClinicas.findAll(
      {
        include: [ 
          { model: Paciente, attributes: ['nombre', 'apellidos', 'ci', 'id'], as: 'paciente' },
          { model: CClinica, attributes: ['nombre'], as: 'cClinica' },
        ],
      }
    );
  }

  public async findPaciente_CClinicasById(id: number) {
    return await Paciente_CClinicas.findByPk(id, {
      include: [ 
        { model: Paciente, attributes: ['nombre', 'apellidos', 'ci', 'id'], as: 'paciente' },
        { model: CClinica, attributes: ['nombre'], as: 'cClinica' },
      ],
    });
  }

  public async findPaciente_CClinicasByPacienteId(pacienteId: number) {
    return await Paciente_CClinicas.findAll({
      where: { pacienteId },
      include: [{ model: CClinica, attributes: ['nombre'], as: 'cClinica' }, 
                {model: Paciente, attributes: ['nombre', 'apellidos', 'ci', 'id'], as: 'paciente' }]});
  }

  public async updatePaciente_CClinicas(id: number, data: Partial<Paciente_CClinicas>) {
    const paciente_cclinicas = await Paciente_CClinicas.findByPk(id);
    if (paciente_cclinicas) {
      return await paciente_cclinicas.update(data);
    }
    throw new Error('Paciente_CClinicas no encontrada');
  }


  public async deletePaciente_CClinicas(id: number) {
    const deleted = await Paciente_CClinicas.destroy({ where: { id } });
    if (deleted) {
      return deleted;
    }
    throw new Error('Paciente_CClinicas no encontrada');
  }

}

export default new Paciente_CClinicasRepository();