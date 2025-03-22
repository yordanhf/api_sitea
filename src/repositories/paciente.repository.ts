// 1. Paciente Repository (paciente.repository.ts)
import Diagnostico from '../models/diagnostico.model';
import Paciente from '../models/paciente.model';
import VinculoInstitucional from '../models/vinculo_institucional.model';
import Tratamiento from '../models/tratamiento.model';
import Medicamento from '../models/medicamento.model';
import { Op, Sequelize } from 'sequelize';
import PacienteFortaleza from '../models/paciente_fortaleza.model';
import Fortaleza from '../models/fortaleza.model';
import PacienteComorbilidad from '../models/paciente_comorbilidad.model';
import Comorbilidad from '../models/comorbilidad.model';
import Paciente_Antecedente from '../models/paciente_antecedente.model';
import AntecedentesPPP from '../models/antecedentesPPP.model';
import PacienteCClinica from '../models/paciente_cclinicas.model';
import CClinica from '../models/cclinica.model';
import Alergias from '../models/alergias.model';
import ExamenComplementario from '../models/examenes_complementarios.model';
import Examen from '../models/examen.model';
import Interconsulta from '../models/interconsulta.model';
import InterconsultaSimple from '../models/interconsultas.model';

class PacienteRepository {
  public async createPaciente(data: Partial<Paciente>) {
    return await Paciente.create(data);
  }

  public async findAllPacientes() {
    return await Paciente.findAll({      
      include: [ 
        { model: Diagnostico, attributes: ['nombre'], as: 'diagnostico'},
        { model: VinculoInstitucional, attributes: ['nombre'], as: 'vinculoInstitucional'}
      ],
    });
  }

  public async findPacienteById(id: string) {
    return await Paciente.findByPk(id, {      
      include: [ 
        { model: Diagnostico, attributes: ['nombre'], as: 'diagnostico'},
        { model: VinculoInstitucional, attributes: ['nombre'], as: 'vinculoInstitucional'},
        {model: Tratamiento, attributes: ['id','medicamentoId'], as: 'tratamiento', 
          include: [{ model: Medicamento, attributes: ['nombre'], as: 'medicamento'}]},     
        {model: PacienteCClinica, attributes: ['id','cClinicaId'], as: 'pacientecclinica', 
          include: [{ model: CClinica, attributes: ['nombre'], as: 'cClinica'}]},      
        {model: PacienteFortaleza, attributes: ['id','fortalezaId'], as: 'pacientefortaleza', 
          include: [{ model: Fortaleza, attributes: ['nombre'], as: 'fortaleza'}]},  
        {model: PacienteComorbilidad, attributes: ['id','comorbilidadId'], as: 'pacientecomorbilidad', 
          include: [{ model: Comorbilidad, attributes: ['nombre'], as: 'comorbilidad'}]},  
        {model: Alergias, attributes: ['id','medicamentoId'], as: 'alergia', 
          include: [{ model: Medicamento, attributes: ['nombre'], as: 'medicamento'}]}, 
        {model: Paciente_Antecedente, attributes: ['id','antecedenteId'], as: 'pacienteantecedente', 
          include: [{ model: AntecedentesPPP, attributes: ['nombre'], as: 'antecedentesPPP'}]}, 
        {model: ExamenComplementario, attributes: ['id','examenId','fecha','resultado' ], as: 'pacienteexamen', 
          include: [{ model: Examen, attributes: ['nombre'], as: 'examen'}]}, 
          {model: Interconsulta, attributes: ['id','interconsultaId', 'diagnostico'], as: 'pacienteinterconsulta', 
            include: [{ model: InterconsultaSimple, attributes: ['nombre'], as: 'interconsultasimple'}]}, 
      ],
    });
  } 

  public async findPacientesByParams(params: any) {
    const whereClause: any = {};
    const include: any[] = [ 
      { model: Diagnostico, attributes: ['nombre'], as: 'diagnostico'},
      { model: VinculoInstitucional, attributes: ['nombre'], as: 'vinculoInstitucional'},
      {model: Tratamiento, attributes: ['medicamentoId'], as: 'tratamiento', 
        include: { model: Medicamento, attributes: ['nombre'], as: 'medicamento'}},
    ]; 

    // Construcción del whereClause para los campos directamente del paciente
    if (params.nombre) {
      whereClause.nombre = { [Op.like]: `%${params.nombre}%` };
    }
    if (params.apellidos) {
      whereClause.apellidos = { [Op.like]: `%${params.apellidos}%` };
    }
    if (params.ci) {
      whereClause.ci = { [Op.like]: `%${params.ci}%` };
    }
    if (params.provincia) {
      whereClause.provincia = params.provincia;  
      
    }
    if (params.municipio) {
      whereClause.municipio = params.municipio;  
      
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
    }
    if (params.vinculoInstitucionalId) {
      whereClause.vinculoInstitucionalId = params.vinculoInstitucionalId;     
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
        as: 'tratamiento',     
        where: {medicamentoId: params.medicamentoId},
        include: {
          model: Medicamento,
          attributes: [], 
          as: 'medicamento',
        },        
      });
    }

    if (params.interconsultaId) {
      include.push({
        model: Interconsulta,
        as: 'pacienteinterconsulta',     
        where: {interconsultaId: params.interconsultaId},
        include: {
          model: InterconsultaSimple,
          attributes: [], 
          as: 'interconsultasimple',
        },        
      });
    }

    if (params.fortalezaId) { 
      include.push({
        model: PacienteFortaleza,   
        as: "pacientefortaleza", 
        attributes: [],      
        where: {fortalezaId: params.fortalezaId},
        include: {
          model: Fortaleza,
          attributes: [], 
          as: 'fortaleza',
        },        
      });
    }

    if (params.cClinicaId) { 
      include.push({
        model: PacienteCClinica,   
        as:"cClinica",       
        where: {cClinicaId: params.cClinicaId},
        include: {
          model: CClinica,
          attributes: [], 
          as: 'cClinica',
        },        
      });
    }


    if (params.comorbilidadId) {      
      include.push({
        model: PacienteComorbilidad,  
        as:"pacientecomorbilidad", 
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
      include.push({
        model: Paciente_Antecedente,  
        as:"pacienteantecedente", 
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

  public async updatePaciente(id: string, data: Partial<Paciente>) {
    const paciente = await Paciente.findByPk(id);
    if (paciente) {
      return await paciente.update(data);
    }
    throw new Error('Paciente no encontrado');
  }

  public async findAllPacientesByMunicipio(municipio_: string) {
    return await Paciente.findAll({ where: { municipio : municipio_ } });
  }

  public async getPacientesCountByMunicipio(): Promise<{ municipios: string[]; cantidades: number[] }> {
    const result = await Paciente.findAll({
      attributes: [
        'municipio', // Nombre del municipio
        [Sequelize.fn('COUNT', Sequelize.col('id')), 'cantidadPacientes'], // Cantidad de pacientes
      ],
      group: ['municipio'], // Agrupar por municipio
      raw: true, // Devuelve resultados en formato plano
    });
  
    // Formatear los resultados
    const municipios = result.map((item: any) => item.municipio);
    const cantidades = result.map((item: any) => item.cantidadPacientes);
  
    return { municipios, cantidades };
  } 

  public async deletePaciente(id: string) {
    const deleted = await Paciente.destroy({ where: { id } });
    if (deleted) {
      return deleted;
    }
    throw new Error('Paciente no encontrado');
  }
}

export default new PacienteRepository();