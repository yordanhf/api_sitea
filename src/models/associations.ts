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
import Alergias from './alergias.model';
import Paciente_Antecedente from './paciente_antecedente.model';
import AntecedentesPPP from './antecedentesPPP.model';
import PacienteComorbilidad from './paciente_comorbilidad.model';
import Comorbilidad from './comorbilidad.model';
import Diagnostico from './diagnostico.model';
import VinculoInstitucional from './vinculo_institucional.model';
import Examen from './examen.model';
import InterconsultaSimple from './interconsultas.model';
import Usuario from './usuario.model';
import Log from './log.model';

// Definir las relaciones

//Uno a Muchos
  

  Paciente.hasMany(ExamenComplementario, {as:"pacienteexamen", foreignKey: 'pacienteId' });
  ExamenComplementario.belongsTo(Paciente, { as: 'paciente', foreignKey: 'pacienteId' });

  Paciente.hasMany(Consulta, { foreignKey: 'pacienteId' });
  Consulta.belongsTo(Paciente, { as: 'paciente', foreignKey: 'pacienteId' });
  

  Diagnostico.hasMany(Paciente, { foreignKey: 'diagnosticoId' });
  Paciente.belongsTo(Diagnostico, { as: 'diagnostico', foreignKey: 'diagnosticoId' });

  VinculoInstitucional.hasMany(Paciente, { foreignKey: 'vinculoInstitucionalId' });
  Paciente.belongsTo(VinculoInstitucional, { as: 'vinculoInstitucional', foreignKey: 'vinculoInstitucionalId' });  

  Examen.hasMany(ExamenComplementario, { foreignKey: 'examenId' });
  ExamenComplementario.belongsTo(Examen, { as: 'examen', foreignKey: 'examenId' });

  Usuario.hasMany(Log, { foreignKey: 'usuarioId' });
  Log.belongsTo(Usuario, { as: 'usuario', foreignKey: 'usuarioId' });

  
  //Mucho a Muchos

  Paciente.hasMany(Interconsulta, { as:"pacienteinterconsulta", foreignKey: 'pacienteId' });
  Interconsulta.belongsTo(Paciente, { as: 'paciente', foreignKey: 'pacienteId' });

  InterconsultaSimple.hasMany(Interconsulta, { as:"pacienteinterconsulta", foreignKey: 'interconsultaId' });
  Interconsulta.belongsTo(InterconsultaSimple, { as: 'interconsultasimple', foreignKey: 'interconsultaId' });

  Paciente.hasMany(PacienteCClinica, { as: 'pacientecclinica', foreignKey: 'pacienteId' });
  PacienteCClinica.belongsTo(Paciente, { as: 'paciente', foreignKey: 'pacienteId' });

  CClinica.hasMany(PacienteCClinica, { as: 'pacientecclinica', foreignKey: 'cClinicaId' });
  PacienteCClinica.belongsTo(CClinica, { as: 'cClinica', foreignKey: 'cClinicaId' });

  Paciente.hasMany(PacienteFortaleza, { as: 'pacientefortaleza', foreignKey: 'pacienteId' });
  PacienteFortaleza.belongsTo(Paciente, { as: 'paciente', foreignKey: 'pacienteId' });

  Fortaleza.hasMany(PacienteFortaleza, { as: 'pacientefortaleza', foreignKey: 'fortalezaId' });
  PacienteFortaleza.belongsTo(Fortaleza, { as: 'fortaleza', foreignKey: 'fortalezaId' });

  Paciente.hasMany(PacienteComorbilidad, { as: 'pacientecomorbilidad', foreignKey: 'pacienteId' });
  PacienteComorbilidad.belongsTo(Paciente, { as: 'paciente', foreignKey: 'pacienteId' });

  Comorbilidad.hasMany(PacienteComorbilidad, { as: 'pacientecomorbilidad', foreignKey: 'comorbilidadId' });
  PacienteComorbilidad.belongsTo(Comorbilidad, { as: 'comorbilidad', foreignKey: 'comorbilidadId' });  

  Paciente.hasMany(Tratamiento, { as: 'tratamiento', foreignKey: 'pacienteId' });
  Tratamiento.belongsTo(Paciente, { as: 'paciente', foreignKey: 'pacienteId' });

  Medicamento.hasMany(Tratamiento, { as: 'tratamiento', foreignKey: 'medicamentoId' });
  Tratamiento.belongsTo(Medicamento, { as: 'medicamento', foreignKey: 'medicamentoId' });

  Paciente.hasMany(Alergias, { as: 'alergia', foreignKey: 'pacienteId' });
  Alergias.belongsTo(Paciente, { as: 'paciente', foreignKey: 'pacienteId' });

  Medicamento.hasMany(Alergias, { as: 'alergia', foreignKey: 'medicamentoId' });
  Alergias.belongsTo(Medicamento, { as: 'medicamento', foreignKey: 'medicamentoId' });

  Paciente.hasMany(Paciente_Antecedente, { as: 'pacienteantecedente', foreignKey: 'pacienteId' });
  Paciente_Antecedente.belongsTo(Paciente, { as: 'paciente', foreignKey: 'pacienteId' });

  AntecedentesPPP.hasMany(Paciente_Antecedente, { as: 'pacienteantecedente', foreignKey: 'antecedenteId' });
  Paciente_Antecedente.belongsTo(AntecedentesPPP, { as: 'antecedentesPPP', foreignKey: 'antecedenteId' });
  
export { Paciente, Interconsulta, ExamenComplementario, CClinica, Fortaleza, Medicamento, Tratamiento, Consulta, Comorbilidad, Alergias, AntecedentesPPP, Paciente_Antecedente, PacienteComorbilidad, PacienteFortaleza, PacienteCClinica };
