import Examen from '../models/examen.model';
import ExamenComplementario from '../models/examenes_complementarios.model';
import Paciente from '../models/paciente.model';


class ExamenComplementarioRepository {
  public async createExamenComplementario(data: Partial<ExamenComplementario>) {        
    return await ExamenComplementario.create( data );
  }

  public async findAllExamenComplementario() {
    return await ExamenComplementario.findAll({       
      include: [        
        { model: Paciente, attributes: ['nombre', 'apellidos', 'ci', 'id'],  as: 'paciente' },
        { model: Examen, attributes: ['nombre'], as: 'examen' },
      ],
    });
  }

  public async findExamenComplementarioById(id: string) {
    return await ExamenComplementario.findByPk(id, {       
      include: [        
        { model: Paciente, attributes: ['nombre', 'apellidos', 'ci', 'id'],  as: 'paciente' },
        { model: Examen, attributes: ['nombre'], as: 'examen' },
      ],
    });
  }

  public async findExamenComplementarioByPacienteId(pacienteId: string) {
    return await ExamenComplementario.findAll({
      where: { pacienteId },    
        include: [    
          { model: Paciente, attributes: ['nombre', 'apellidos', 'ci', 'id'],  as: 'paciente' },    
          { model: Examen, attributes: ['nombre'], as: 'examen' }
        ],
      
    }, );}


  public async updateExamenComplementario(id: string, data: Partial<ExamenComplementario>) {
    const examenesComplementarios = await ExamenComplementario.findByPk(id);
    if (examenesComplementarios) {
      return await examenesComplementarios.update(data);
    }
    throw new Error('Examen Complementario no encontrado');
  }


  public async deleteExamenComplementario(id: string) {
    const deleted = await ExamenComplementario.destroy({ where: { id } });
    if (deleted) {
      return deleted;
    }
    throw new Error('Examen Complementario no encontrado');
  }

}

export default new ExamenComplementarioRepository();
