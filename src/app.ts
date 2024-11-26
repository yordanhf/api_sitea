// src/app.ts
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

import pacienteRoutes from './routes/paciente.routes';
import antecedentesPPPRoutes from './routes/antecedentesPPP.routes';
import paciente_antecedenteRoutes from './routes/paciente_antecedente.routes';
import alergiaRoutes from './routes/alergias.routes';
import caracteristicaRoutes from './routes/caracteristica.routes';
import cclinicaRoutes from './routes/cclinica.routes';
import comorbilidadRoutes from './routes/comorbilidad.routes';
import diagnosticoRoutes from './routes/diagnostico.routes';
import examenRoutes from './routes/examen.routes';
import examenes_complementariosRoutes from './routes/examenes_complementarios.routes';
import fortalezaRoutes from './routes/fortaleza.routes';
import vinculo_institucionalRoutes from './routes/vinculo_institucional.routes';
import provinciaRoutes from './routes/provincia.routes';
import lista_fortalezasRoutes from './routes/lista_fortalezas.routes';
import interconsultaRoutes from './routes/interconsulta.routes';
import consultaRoutes from './routes/consulta.routes';
import interconsultasRoutes from './routes/interconsultas.routes';
import medicamentoRoutes from './routes/medicamento.routes';
import municipioRoutes from './routes/municipio.routes';
import medicamentosRoutes from './routes/medicamentos.routes';
import paciente_cclinicasRoutes from './routes/paciente_cclinicas.routes';
import paciente_fortalezaRoutes from './routes/paciente_fortaleza.routes';
import tratamientoRoutes from './routes/tratamiento.routes';
import './models/associations';
import sequelize from './config/db.config';
import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import swaggerOptions from './config/swagger.config';


const app = express();
app.use(cors({
  origin: 'http://localhost:3002', // Dirección del cliente React
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
})); // Habilitar CORS para todas las peticiones


app.use(bodyParser.json());


// Configuración de Swagger
const swaggerDocs = swaggerJsdoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// Sincronización de la base de datos
sequelize.sync().then(() => {
  console.log('Database synchronized');
});

// Rutas
app.use('/api/antecedentesPPP', antecedentesPPPRoutes);
app.use('/api/Alergias', alergiaRoutes);
app.use('/api/pacientes', pacienteRoutes);
app.use('/api/caracteristicas', caracteristicaRoutes);
app.use('/api/cclinicas', cclinicaRoutes);
app.use('/api/comorbilidades', comorbilidadRoutes);
app.use('/api/Paciente_Antecedente', paciente_antecedenteRoutes);
app.use('/api/Consultas', consultaRoutes);
app.use('/api/diagnosticos', diagnosticoRoutes);
app.use('/api/examenes', examenRoutes);
app.use('/api/examenes_complementarios', examenes_complementariosRoutes);
app.use('/api/fortaleza', fortalezaRoutes);
app.use('/api/provincia', provinciaRoutes);
app.use('/api/lista_fortaleza', lista_fortalezasRoutes);
app.use('/api/Interconsulta', interconsultaRoutes);
app.use('/api/Interconsultas', interconsultasRoutes);
app.use('/api/medicamento', medicamentoRoutes);
app.use('/api/municipio', municipioRoutes);
app.use('/api/medicamentos', medicamentosRoutes);
app.use('/api/Paciente_cclinicas', paciente_cclinicasRoutes);
app.use('/api/Paciente_Fortaleza', paciente_fortalezaRoutes);
app.use('/api/Tratamiento', tratamientoRoutes);
app.use('/api/vinculo_institucional', vinculo_institucionalRoutes);



export default app;
