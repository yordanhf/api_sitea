// 2. Consulta Service (consulta.service.ts)
import { Op } from 'sequelize';
import Consulta from '../models/consulta.model';
import ConsultaRepository from '../repositories/consulta.repository';

class ConsultaService {
  public async createConsulta(data: Partial<Consulta>) {
    return await ConsultaRepository.createConsulta(data);
  }

  public async getAllConsultas() {
    return await ConsultaRepository.findAllConsultas();
  }

  public async getConsultaById(id: string) {
    const consulta = await ConsultaRepository.findConsultaById(id);
    if (!consulta) {
      throw new Error('Consulta no encontrada');
    }
    return consulta;
  }

  public async getConsultaByPacienteId(pacienteId: string) {
    return await ConsultaRepository.findConsultaByPacienteId(pacienteId);
  }

  public async updateConsulta(id: string, data: Partial<Consulta>) {
    return await ConsultaRepository.updateConsulta(id, data);
  }

  public async deleteConsulta(id: string) {
    const deleted = await ConsultaRepository.deleteConsulta(id);
    if (deleted === 0) {
      throw new Error('Consulta no encontrada');
    }
    return deleted;
  }

  public async getConsultas(filtros: any) {
    const whereClause: any = {};

    // Verificar y agregar filtros opcionales al whereClause
    if (filtros.pacienteId) {
      whereClause.pacienteId = filtros.pacienteId;
    }

    // Filtro por rango de fechas (fechaInicio y fechaFin)
    if (filtros.fechaInicio && filtros.fechaFin) {
      whereClause.fecha = {
        [Op.between]: [filtros.fechaInicio, filtros.fechaFin]
      };
    } else if (filtros.fechaInicio) {
      whereClause.fecha = {
        [Op.gte]: filtros.fechaInicio
      };
    } else if (filtros.fechaFin) {
      whereClause.fecha = {
        [Op.lte]: filtros.fechaFin
      };
    }

    // Consultar la base de datos con el whereClause construido
    return await ConsultaRepository.findAllConsultasPacienteIdRangoFechas( whereClause );
  }
}

export default new ConsultaService();