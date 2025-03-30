// 2. Consulta Service (consulta.service.ts)
import { Op } from 'sequelize';
import Consulta from '../models/consulta.model';
import ConsultaRepository from '../repositories/consulta.repository';
import LogService from './log.service';

class ConsultaService {
  public async createConsulta(data: Partial<Consulta>, usuarioId: string) {
    const consulta = await ConsultaRepository.createConsulta(data);
    await LogService.createLog(usuarioId, 'Consulta', 'CREATE', `Creada consulta: ${consulta.id}`);
    return consulta;
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

  public async updateConsulta(id: string, data: Partial<Consulta>, usuarioId: string) {
    const consulta = await ConsultaRepository.updateConsulta(id, data);
    await LogService.createLog(usuarioId, 'Consulta', 'UPDATE', `Actualizada consulta: ${consulta.id}`);
    return consulta;    
  }

  public async deleteConsulta(id: string, usuarioId: string) {
    const for_delete = await this.getConsultaById(id);
    const deleted_id = for_delete.id;    
    const deleted = await ConsultaRepository.deleteConsulta(id);
    if (deleted === 0) {
      throw new Error('Consulta no encontrada');
    }
    await LogService.createLog(usuarioId, 'Consulta', 'DELETE', `Borrada consulta: ${deleted_id}`);
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