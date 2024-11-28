import { JwtPayload } from 'jsonwebtoken';

declare module 'express-serve-static-core' {
  interface Request {
    usuario?: string | JwtPayload; // Añadir `usuario` como propiedad de `Request`
  }
}
