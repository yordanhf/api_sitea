import Paciente_Comorbilidad from '../models/paciente_comorbilidad.model';
import Paciente from '../models/paciente.model';
import Comorbilidad from '../models/comorbilidad.model';

class Paciente_ComorbilidadRepository {
  public async createPaciente_Comorbilidad(data: Partial<Paciente_Comorbilidad>) {
    return await Paciente_Comorbilidad.create( data );
  }

  public async findAllPaciente_Comorbilidad() {
    return await Paciente_Comorbilidad.findAll({
      include: [ 
        { model: Paciente, attributes: ['nombre', 'apellidos', 'ci', 'id'], as: 'paciente' },
        { model: Comorbilidad, attributes: ['nombre'], as: 'comorbilidad' },
      ],
    });
  }

  public async findPaciente_ComorbilidadById(id: string) {
    return await Paciente_Comorbilidad.findByPk(id, {
      include: [ 
        { model: Paciente, attributes: ['nombre', 'apellidos', 'ci', 'id'], as: 'paciente' },
        { model: Comorbilidad, attributes: ['nombre'], as: 'comorbilidad' },
      ],
    });
  }

  public async findPaciente_ComorbilidadByPacienteId(pacienteId: string) {
    return await Paciente_Comorbilidad.findAll({
      where: { pacienteId },
      include: [{ model: Comorbilidad, attributes: ['nombre'], as: 'comorbilidad' }, 
                { model: Paciente, attributes: ['nombre', 'apellidos', 'ci', 'id'], as: 'paciente' }
    ]});
  }

  public async updatePaciente_Comorbilidad(id: string, data: Partial<Paciente_Comorbilidad>) {
    const paciente_comorbilidad = await Paciente_Comorbilidad.findByPk(id);
    if (paciente_comorbilidad) {
      return await paciente_comorbilidad.update(data);
    }
    throw new Error('Paciente_Comorbilidad no encontrada');
  }


  public async deletePaciente_Comorbilidad(id: string) {
    const deleted = await Paciente_Comorbilidad.destroy({ where: { id } });
    if (deleted) {
      return deleted;
    }
    throw new Error('Paciente_Comorbilidad no encontrada');
  }

}

export default new Paciente_ComorbilidadRepository();