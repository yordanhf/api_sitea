// src/config/swagger.config.ts
import { SwaggerDefinition, Options } from 'swagger-jsdoc';

const swaggerDefinition: SwaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'API SITEA',
    version: '1.0.0',
    description: 'API para gestionar consulta de Autismo Matanzas',
  },
  components: {
    securitySchemes: {
      bearerAuth: {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
      },
    },
  },
  security: [{ bearerAuth: [] }],
  servers: [
    {
      url: 'http://localhost:4000',
      description: 'Servidor de desarrollo',
    },
    
  ],
};

const swaggerOptions: Options = {
  swaggerDefinition,
  apis: ['./src/routes/*.ts'], // Indica la ubicación de las rutas para extraer la documentación de los comentarios
};

export default swaggerOptions;
