import Paciente_Fortaleza from '../models/paciente_fortaleza.model';
import Paciente from '../models/paciente.model';
import Fortaleza from '../models/fortaleza.model';

class Paciente_FortalezaRepository {
  public async createPaciente_Fortaleza(data: Partial<Paciente_Fortaleza>) {
    return await Paciente_Fortaleza.create( data );
  }

  public async findAllPaciente_Fortaleza() {
    return await Paciente_Fortaleza.findAll();
  }

  public async findPaciente_FortalezaById(id: number) {
    return await Paciente_Fortaleza.findByPk(id, {
      include: [ 
        { model: Paciente, attributes: ['id', 'nombre', 'apellidos'], as: 'Paciente' },
        { model: Fortaleza, attributes: ['nombre'], as: 'Fortaleza' },
      ],
    });
  }

  public async findPaciente_FortalezaByPacienteId(pacienteId: number) {
    return await Paciente_Fortaleza.findAll({
      where: { pacienteId },
      include: [{ model: Fortaleza, attributes: ['nombre'], as: 'Fortaleza' }, 
                { model: Paciente, attributes: ['id','nombre', 'apellidos'] }
    ]});
  }

  public async updatePaciente_Fortaleza(id: number, data: Partial<Paciente_Fortaleza>) {
    const paciente_fortaleza = await Paciente_Fortaleza.findByPk(id);
    if (paciente_fortaleza) {
      return await paciente_fortaleza.update(data);
    }
    throw new Error('Paciente_Fortaleza no encontrada');
  }


  public async deletePaciente_Fortaleza(id: number) {
    const deleted = await Paciente_Fortaleza.destroy({ where: { id } });
    if (deleted) {
      return deleted;
    }
    throw new Error('Paciente_Fortaleza no encontrada');
  }

}

export default new Paciente_FortalezaRepository();