import { promises as fs } from 'fs';
import path from 'path';

class BackupService {
  public async createBackup(rutaDestino: string) {
    try {
      // Convertir todas las barras invertidas a barras normales para evitar problemas
      const rutaNormalizada = rutaDestino.replace(/\\/g, '/');

      // Ruta del archivo de la base de datos
      const baseDeDatosRuta = path.resolve(__dirname, '../../data/database.sqlite');

      // Ruta de destino proporcionada por el usuario, utilizando la ruta normalizada
      const rutaCompletaDestino = path.resolve(rutaNormalizada, `backup_${Date.now()}.sqlite`);

      // Copiar el archivo de la base de datos a la ubicación de destino
      await fs.copyFile(baseDeDatosRuta, rutaCompletaDestino);
    } catch (error) {
      throw new Error(`Error al crear la copia de seguridad: ${(error as Error).message}`);
    }
  }
}

export default new BackupService;
