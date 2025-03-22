import Medicamento from '../models/medicamento.model';
import Paciente from '../models/paciente.model';
import Tratamiento from '../models/tratamiento.model';

class TratamientoRepository {
  public async createTratamiento(data: Partial<Tratamiento>) {
    return await Tratamiento.create( data );
  }

  public async findAllTratamiento() {
    return await Tratamiento.findAll({
      include: [ 
        { model: Paciente, attributes: ['nombre', 'apellidos', 'ci', 'id'], as: 'paciente' },
        { model: Medicamento, attributes: ['nombre'], as: 'medicamento' },
      ],
    });
  }

  public async findTratamientoById(id: string) {
    return await Tratamiento.findByPk(id, {
      include: [ 
        { model: Paciente, attributes: ['nombre', 'apellidos', 'ci', 'id'], as: 'paciente' },
        { model: Medicamento, attributes: ['nombre'], as: 'medicamento' },
      ],
    });
  }

  public async findTratamientoByPacienteId(pacienteId: string) {
    return await Tratamiento.findAll({
      where: { pacienteId },
      include: [{ model: Paciente, attributes: ['nombre', 'apellidos', 'ci', 'id'], as: 'paciente' },
                { model: Medicamento, as: 'medicamento' }],
    });
  }

  public async updateTratamiento(id: string, data: Partial<Tratamiento>) {
    const tratamiento = await Tratamiento.findByPk(id);
    if (tratamiento) {
      return await tratamiento.update(data);
    }
    throw new Error('Tratamiento no encontrado');
  }


  public async deleteTratamiento(id: string) {
    const deleted = await Tratamiento.destroy({ where: { id } });
    if (deleted) {
      return deleted;
    }
    throw new Error('Tratamiento no encontrado');
  }

}

export default new TratamientoRepository();