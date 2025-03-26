import { Op } from 'sequelize';
import Log from '../models/log.model';

class LogRepository {
  public async createLog(data: Partial<Log>) {    
    return await Log.create(data );
  }

  public async findAllLog() {
    return await Log.findAll();
  }

  public async findLogById(id: string) {
    return await Log.findByPk(id);
  }

  public async findLogsByParams(params: {
    usuarioId?: string,
    entidad?: string,
    operacion?: string,
    fechaInicio?: Date,
    fechaFin?: Date
  }) {
    const { usuarioId, entidad, operacion, fechaInicio, fechaFin } = params;
    const where: any = {};

    if (usuarioId) where.usuarioId = usuarioId;
    if (entidad) where.entidad = entidad;
    if (operacion) where.operacion = operacion;
    if (fechaInicio && fechaFin) {
      where.fecha = {
        [Op.between]: [fechaInicio, fechaFin]
      };
    } else if (fechaInicio) {
      where.fecha = {
        [Op.gte]: fechaInicio
      };
    } else if (fechaFin) {
      where.fecha = {
        [Op.lte]: fechaFin
      };
    }

    return await Log.findAll({ where });
  }
}

export default new LogRepository();
