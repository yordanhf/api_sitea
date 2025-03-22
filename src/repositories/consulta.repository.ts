import Consulta from '../models/consulta.model';
import Paciente from '../models/paciente.model';

class ConsultaRepository {
  public async createConsulta(data: Partial<Consulta>) {
    return await Consulta.create(data);
  }

  public async findAllConsultas() {
    return await Consulta.findAll({       
      include: [        
        { model: Paciente, attributes: ['nombre', 'apellidos', 'ci', 'id'],  as: 'paciente' },
        
      ],
    });
  }

  public async findConsultaById(id: string) {
    return await Consulta.findByPk(id, {       
      include: [        
        { model: Paciente, attributes: ['nombre', 'apellidos', 'ci', 'id'],  as: 'paciente' },
      ],
    });
  }

  public async findConsultaByPacienteId(pacienteId: string) {
    return await Consulta.findAll({
      where: { pacienteId },
      include: [        
        { model: Paciente, attributes: ['nombre', 'apellidos', 'ci', 'id'],  as: 'paciente' },
      ],
    });}

    public async findAllConsultasPacienteIdRangoFechas(whereClause: any) {
      // Realiza la consulta a la base de datos según el whereClause proporcionado
      return await Consulta.findAll({ where: whereClause });
    }

  public async updateConsulta(id: string, data: Partial<Consulta>) {
    const consulta = await Consulta.findByPk(id);
    if (consulta) {
      return await consulta.update(data);
    }
    throw new Error('Consulta no encontrada');
  }

  public async deleteConsulta(id: string) {
    const deleted = await Consulta.destroy({ where: { id } });
    if (deleted) {
      return deleted;
    }
    throw new Error('Consulta no encontrada');
  }
}

export default new ConsultaRepository();


