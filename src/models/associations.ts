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

// Definir las relaciones
  Paciente.hasMany(Interconsulta, { foreignKey: 'pacienteId' });
  Interconsulta.belongsTo(Paciente, { foreignKey: 'pacienteId' });

  Paciente.hasMany(ExamenComplementario, { foreignKey: 'pacienteId' });
  ExamenComplementario.belongsTo(Paciente, { foreignKey: 'pacienteId' });

  Paciente.hasMany(PacienteCClinica, { foreignKey: 'pacienteId' });
  PacienteCClinica.belongsTo(Paciente, { foreignKey: 'pacienteId' });

  CClinica.hasMany(PacienteCClinica, { foreignKey: 'cClinicaId' });
  PacienteCClinica.belongsTo(CClinica, { foreignKey: 'cClinicaId' });

  Paciente.hasMany(PacienteFortaleza, { foreignKey: 'pacienteId' });
  PacienteFortaleza.belongsTo(Paciente, { foreignKey: 'pacienteId' });

  Fortaleza.hasMany(PacienteFortaleza, { foreignKey: 'fortalezaId' });
  PacienteFortaleza.belongsTo(Fortaleza, { foreignKey: 'fortalezaId' });

  

  Paciente.hasMany(Consulta, { foreignKey: 'pacienteId' });
  Consulta.belongsTo(Paciente, { foreignKey: 'pacienteId' });

  Provincia.hasMany(Municipio, { foreignKey: 'provinciaId' });
  Municipio.belongsTo(Provincia, { foreignKey: 'provinciaId' });

  Paciente.hasMany(Tratamiento, { foreignKey: 'pacienteId' });
  Tratamiento.belongsTo(Paciente, { foreignKey: 'pacienteId' });

  Medicamento.hasMany(Tratamiento, { foreignKey: 'medicamentoId' });
  Tratamiento.belongsTo(Medicamento, { foreignKey: 'medicamentoId' });

  Paciente.hasMany(Alergias, { foreignKey: 'pacienteId' });
  Alergias.belongsTo(Paciente, { foreignKey: 'pacienteId' });

  Medicamento.hasMany(Alergias, { foreignKey: 'medicamentoId' });
  Alergias.belongsTo(Medicamento, { foreignKey: 'medicamentoId' });

  Paciente.hasMany(Paciente_Antecedente, { foreignKey: 'pacienteId' });
  Paciente_Antecedente.belongsTo(Paciente, { foreignKey: 'pacienteId' });

  AntecedentesPPP.hasMany(Paciente_Antecedente, { foreignKey: 'antecedenteId' });
  Paciente_Antecedente.belongsTo(AntecedentesPPP, { foreignKey: 'antecedenteId' });
  


export { Paciente, Interconsulta, ExamenComplementario, CClinica, Fortaleza, Medicamento, Tratamiento, Consulta, Provincia, Municipio, Alergias, AntecedentesPPP, Paciente_Antecedente };
