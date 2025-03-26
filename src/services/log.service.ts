import LogRepository from '../repositories/log.repository';

class LogService {
  public async createLog(usuarioId: string, entidad: string, operacion: string, detalle: string) {    
    return await LogRepository.createLog({
      usuarioId,
      entidad,
      operacion,
      detalle,
    });
  }

  public async getAllLogs() {
    return await LogRepository.findAllLog();
  }

  public async getlogById(id:string) {
    const log = await LogRepository.findLogById(id);
    if(!log){
        throw new Error('Log no encontrado');
    }
    return log;
  }

  public async getLogs(params: {
    usuarioId?: string,
    entidad?: string,
    operacion?: string,
    fechaInicio?: Date,
    fechaFin?: Date
  }) {
    return await LogRepository.findLogsByParams(params);
  }
}

export default new LogService();