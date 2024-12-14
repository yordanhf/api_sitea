import Paciente from './paciente.model';
import Interconsulta from './interconsulta.model';
import ExamenComplementario from './examenes_complementarios.model';
import CClinica from './cclinica.model';
import PacienteCClinica from './paciente_cclinicas.model';
import Fortaleza from './fortaleza.model';
import PacienteFortaleza from './paciente_fortaleza.model';
import Tratamiento from './tratamiento.model';
import Medicamento from './medicamento.model';
import Consulta from './consulta.model';
import Provincia from './provincia.model';
import Municipio from './municipio.model';
import Alergias from './alergias.model';
import Paciente_Antecedente from './paciente_antecedente.model';
import AntecedentesPPP from './antecedentesPPP.model';
import PacienteComorbilidad from './paciente_comorbilidad.model';
import Comorbilidad from './comorbilidad.model';
import Diagnostico from './diagnostico.model';
import VinculoInstitucional from './vinculo_institucional.model';
import Examen from './examen.model';
import InterconsultaSimple from './interconsultas.model';

// Definir las relaciones

//Uno a Muchos
  Paciente.hasMany(Interconsulta, { foreignKey: 'pacienteId' });
  Interconsulta.belongsTo(Paciente, { as: 'paciente', foreignKey: 'pacienteId' });

  Paciente.hasMany(ExamenComplementario, { foreignKey: 'pacienteId' });
  ExamenComplementario.belongsTo(Paciente, { as: 'paciente', foreignKey: 'pacienteId' });

  Paciente.hasMany(Consulta, { foreignKey: 'pacienteId' });
  Consulta.belongsTo(Paciente, { as: 'paciente', foreignKey: 'pacienteId' });

  Provincia.hasMany(Municipio, { foreignKey: 'provinciaId' });
  Municipio.belongsTo(Provincia, {as: 'provincia', foreignKey: 'provinciaId' });

  Municipio.hasMany(Paciente, { foreignKey: 'municipioId' });
  Paciente.belongsTo(Municipio, {as:'municipio', foreignKey: 'municipioId' });

  Diagnostico.hasMany(Paciente, { foreignKey: 'diagnosticoId' });
  Paciente.belongsTo(Diagnostico, { as: 'diagnostico', foreignKey: 'diagnosticoId' });

  VinculoInstitucional.hasMany(Paciente, { foreignKey: 'vinculoInstitucionalId' });
  Paciente.belongsTo(VinculoInstitucional, { as: 'vinculoInstitucional', foreignKey: 'vinculoInstitucionalId' });  

  Examen.hasMany(ExamenComplementario, { foreignKey: 'examenId' });
  ExamenComplementario.belongsTo(Examen, { as: 'examen', foreignKey: 'examenId' });

  InterconsultaSimple.hasMany(Interconsulta, { foreignKey: 'interconsultaId' });
  Interconsulta.belongsTo(InterconsultaSimple, { as: 'interconsultaSimple', foreignKey: 'interconsultaId' });

  //Mucho a Muchos

  Paciente.hasMany(PacienteCClinica, { foreignKey: 'pacienteId' });
  PacienteCClinica.belongsTo(Paciente, { as: 'paciente', foreignKey: 'pacienteId' });

  CClinica.hasMany(PacienteCClinica, { foreignKey: 'cClinicaId' });
  PacienteCClinica.belongsTo(CClinica, { as: 'cClinica', foreignKey: 'cClinicaId' });



  Paciente.hasMany(PacienteFortaleza, { foreignKey: 'pacienteId' });
  PacienteFortaleza.belongsTo(Paciente, { as: 'paciente', foreignKey: 'pacienteId' });

  Fortaleza.hasMany(PacienteFortaleza, { foreignKey: 'fortalezaId' });
  PacienteFortaleza.belongsTo(Fortaleza, { as: 'fortaleza', foreignKey: 'fortalezaId' });



  Paciente.hasMany(PacienteComorbilidad, { foreignKey: 'pacienteId' });
  PacienteComorbilidad.belongsTo(Paciente, { as: 'paciente', foreignKey: 'pacienteId' });

  Comorbilidad.hasMany(PacienteComorbilidad, { foreignKey: 'comorbilidadId' });
  PacienteComorbilidad.belongsTo(Comorbilidad, { as: 'comorbilidad', foreignKey: 'comorbilidadId' });  



  Paciente.hasMany(Tratamiento, { foreignKey: 'pacienteId' });
  Tratamiento.belongsTo(Paciente, { as: 'paciente', foreignKey: 'pacienteId' });

  Medicamento.hasMany(Tratamiento, { foreignKey: 'medicamentoId' });
  Tratamiento.belongsTo(Medicamento, { as: 'medicamento', foreignKey: 'medicamentoId' });



  Paciente.hasMany(Alergias, { foreignKey: 'pacienteId' });
  Alergias.belongsTo(Paciente, { as: 'paciente', foreignKey: 'pacienteId' });

  Medicamento.hasMany(Alergias, { foreignKey: 'medicamentoId' });
  Alergias.belongsTo(Medicamento, { as: 'medicamento', foreignKey: 'medicamentoId' });

  

  Paciente.hasMany(Paciente_Antecedente, { foreignKey: 'pacienteId' });
  Paciente_Antecedente.belongsTo(Paciente, { as: 'paciente', foreignKey: 'pacienteId' });

  AntecedentesPPP.hasMany(Paciente_Antecedente, { foreignKey: 'antecedenteId' });
  Paciente_Antecedente.belongsTo(AntecedentesPPP, { as: 'antecedentesPPP', foreignKey: 'antecedenteId' });
  


export { Paciente, Interconsulta, ExamenComplementario, CClinica, Fortaleza, Medicamento, Tratamiento, Consulta, Comorbilidad, Provincia, Municipio, Alergias, AntecedentesPPP, Paciente_Antecedente, PacienteComorbilidad, PacienteFortaleza, PacienteCClinica };
