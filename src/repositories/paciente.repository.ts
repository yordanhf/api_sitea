// 1. Paciente Repository (paciente.repository.ts)
import Diagnostico from '../models/diagnostico.model';
import Municipio from '../models/municipio.model';
import Paciente from '../models/paciente.model';
import Provincia from '../models/provincia.model';
import VinculoInstitucional from '../models/vinculo_institucional.model';
import Tratamiento from '../models/tratamiento.model';
import Medicamento from '../models/medicamento.model';
import { Op } from 'sequelize';
import PacienteFortaleza from '../models/paciente_fortaleza.model';
import Fortaleza from '../models/fortaleza.model';
import PacienteComorbilidad from '../models/paciente_comorbilidad.model';
import Comorbilidad from '../models/comorbilidad.model';
import Paciente_Antecedente from '../models/paciente_antecedente.model';
import AntecedentesPPP from '../models/antecedentesPPP.model';

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

  public async findPacientesByParams(params: any) {
    const whereClause: any = {};
    const include: any[] = []; 

    // Construcción del whereClause para los campos directamente del paciente
    if (params.nombre) {
      whereClause.nombre = { [Op.like]: `%${params.nombre}%` };
    }
    if (params.apellidos) {
      whereClause.apellidos = { [Op.like]: `%${params.apellidos}%` };
    }
    if (params.ci) {
      whereClause.ci = params.ci;
    }
    if (params.municipioId) {
      whereClause.municipioId = params.municipioId;

      // Incluir el nombre del municipio solo si se pasa municipioId
      include.push({ model: Municipio, attributes: ['nombre'], as: 'municipio',
        include: [{ model: Provincia, attributes: ['nombre'], as: 'provincia' }]
       });
    }
    if (params.sexo) {
      whereClause.sexo = params.sexo;
    }
    if (params.raza) {
      whereClause.raza = { [Op.like]: `%${params.raza}%` };
    }
    if (params.verbal) {
      whereClause.verbal = params.verbal;
    }
    if (params.diagnosticoId) {
      whereClause.diagnosticoId = params.diagnosticoId;

      // Incluir el nombre del diagnóstico solo si se pasa diagnosticoId
      include.push({
        model: Diagnostico,
        attributes: ['nombre'], // Seleccionar solo el nombre del diagnóstico
        as: 'diagnostico',
      });
    }
    if (params.vinculoInstitucionalId) {
      whereClause.vinculoInstitucionalId = params.vinculoInstitucionalId;

      // Incluir el nombre del vínculo institucional solo si se pasa vinculoInstitucionalId
      include.push({
        model: VinculoInstitucional,
        attributes: ['nombre'], // Seleccionar solo el nombre del vínculo institucional
        as: 'vinculoInstitucional',
      });
    }
    if (params.terapia) {
      whereClause.terapia = { [Op.like]: `%${params.terapia}%` };
    }
    if (params.fechaInicioDiagnostico && params.fechaFinDiagnostico) {
      whereClause.fechaDiagnostico = {
        [Op.between]: [params.fechaInicioDiagnostico, params.fechaFinDiagnostico],
      };
    }
    if (params.edadMinDiagnostico && params.edadMaxDiagnostico) {
      whereClause.edadDiagnostico = {
        [Op.between]: [params.edadMinDiagnostico, params.edadMaxDiagnostico],
      };
    }

    // Configuración de la relación si se incluye `medicamentoId`
    if (params.medicamentoId) {  
      include.push({
        model: Tratamiento,   
        attributes: [],      
        where: {medicamentoId: params.medicamentoId},
        include: {
          model: Medicamento,
          attributes: [], 
          as: 'medicamento',
        },        
      });
    }

    if (params.fortalezaId) { 
      include.push({
        model: PacienteFortaleza,   
        attributes: [],      
        where: {fortalezaId: params.fortalezaId},
        include: {
          model: Fortaleza,
          attributes: [], 
          as: 'fortaleza',
        },        
      });
    }

    if (params.comorbilidadId) {      
      include.push({
        model: PacienteComorbilidad,   
        attributes: [],      
        where: {comorbilidadId : params.comorbilidadId},
        include: {
          model: Comorbilidad,
          attributes: [], 
          as: 'comorbilidad',
        },        
      });
    }

    if (params.antecedenteId) {   
      //whereAntecedentePPP.antecedenteId = params.antecedenteId;
      include.push({
        model: Paciente_Antecedente,   
        attributes: [],      
        where: {antecedenteId: params.antecedenteId},
        include: {
          model: AntecedentesPPP,
          attributes: [], 
          as: 'antecedentesPPP',
        },        
      });
    }

    return await Paciente.findAll({ where: whereClause, include: include});
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