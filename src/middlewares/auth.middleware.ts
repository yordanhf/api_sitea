import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    res.status(401).json({ message: 'No se proporcionó un token' });
    return; // Importante para detener la ejecución
  }

  const token = authHeader.split(' ')[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'clave_predeterminada_muy_segura');
    (req as any)['user'] = decoded; // Añadir la información del usuario al objeto `req`
    next(); // Continuar con el siguiente middleware o controlador
  } catch (error) {
    res.status(403).json({ message: 'Token inválido o expirado' });
  }
};

const authorize = (roles: string[]) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const usuario = (req as any)['user'];

    if (!usuario || !roles.includes(usuario.rol)) {
      res.status(403).json({ message: 'Acceso denegado' });
      return;
    }

    next(); // Continuar con el siguiente middleware o controlador
  };
};

export { authMiddleware, authorize };
