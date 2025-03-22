//Interconsulta Repository (interconsulta.repository.ts)
import Interconsulta from '../models/interconsulta.model';
import InterconsultaSimple from '../models/interconsultas.model';
import Paciente from '../models/paciente.model';

class InterconsultaRepository {
  public async createInterconsulta(data: Partial<Interconsulta>) {
    return await Interconsulta.create(data);
  }

  public async findAllInterconsultas() {
    return await Interconsulta.findAll(
      {   
         
      }
    );
  }

  public async findInterconsultaById(id: number) {
    return await Interconsulta.findByPk(id,  {      
      include: [ 
        { model: Paciente, attributes: ['nombre', 'apellidos', 'ci', 'id'], as: 'paciente'},
        { model: InterconsultaSimple, attributes: ['nombre'], as: 'interconsultasimple'},

      ],
    });
  }

  public async updateInterconsulta(id: number, data: Partial<Interconsulta>) {
    const interconsulta = await Interconsulta.findByPk(id);
    if (interconsulta) {
      return await interconsulta.update(data);
    }
    throw new Error('Interconsulta no encontrada');
  }

  public async deleteInterconsulta(id: number) {
    const deleted = await Interconsulta.destroy({ where: { id } });
    if (deleted) {
      return deleted;
    }
    throw new Error('Interconsulta no encontrada');
  }

  //otras consultas
  public async findInterconsultasByPacienteId(pacienteId: number) {
    return await Interconsulta.findAll({
      where: { pacienteId },
      include: [
        { model: InterconsultaSimple, attributes: ['nombre'], as: 'interconsulta'},
        {model: Paciente, attributes: ['nombre', 'apellidos', 'ci', 'id'], as: 'paciente'  }
      ]});
  }
}

export default new InterconsultaRepository();