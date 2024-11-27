// 1. Paciente Repository (paciente.repository.ts)
import Diagnostico from '../models/diagnostico.model';
import Municipio from '../models/municipio.model';
import Paciente from '../models/paciente.model';
import Provincia from '../models/provincia.model';
import VinculoInstitucional from '../models/vinculo_institucional.model';

class PacienteRepository {
  public async createPaciente(data: Partial<Paciente>) {
    return await Paciente.create(data);
  }

  public async findAllPacientes() {
    return await Paciente.findAll({      
      include: [ 
        { model: Diagnostico, attributes: ['nombre'], as: 'diagnostico'},
        { model: VinculoInstitucional, attributes: ['nombre'], as: 'vinculoInstitucional'},
        { model: Municipio, attributes: ['nombre'], as: 'municipio',
          include: [{ model: Provincia, attributes: ['nombre'], as: 'provincia' }]
         },        
      ],
    });
  }

  public async findPacienteById(id: number) {
    return await Paciente.findByPk(id, {      
      include: [ 
        { model: Diagnostico, attributes: ['nombre'], as: 'diagnostico'},
        { model: VinculoInstitucional, attributes: ['nombre'], as: 'vinculoInstitucional'},
        { model: Municipio, attributes: ['nombre'], as: 'municipio',
          include: [{ model: Provincia, attributes: ['nombre'], as: 'provincia' }]
         },        
      ],
    });
  } 

  public async updatePaciente(id: number, data: Partial<Paciente>) {
    const paciente = await Paciente.findByPk(id);
    if (paciente) {
      return await paciente.update(data);
    }
    throw new Error('Paciente no encontrado');
  }

  public async findAllPacientesByMunicipio(municipio_: number) {
    return await Paciente.findAll({ where: { municipioId : municipio_ } });
  }

  public async deletePaciente(id: number) {
    const deleted = await Paciente.destroy({ where: { id } });
    if (deleted) {
      return deleted;
    }
    throw new Error('Paciente no encontrado');
  }
}

export default new PacienteRepository();