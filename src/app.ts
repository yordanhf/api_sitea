// src/app.ts
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import pacienteRoutes from './routes/paciente.routes';
import antecedentesPPPRoutes from './routes/antecedentesPPP.routes';
import paciente_antecedenteRoutes from './routes/paciente_antecedente.routes';
import alergiaRoutes from './routes/alergias.routes';
import cclinicaRoutes from './routes/cclinica.routes';
import comorbilidadRoutes from './routes/comorbilidad.routes';
import diagnosticoRoutes from './routes/diagnostico.routes';
import examenRoutes from './routes/examen.routes';
import examenes_complementariosRoutes from './routes/examenes_complementarios.routes';
import fortalezaRoutes from './routes/fortaleza.routes';
import vinculo_institucionalRoutes from './routes/vinculo_institucional.routes';
import interconsultaRoutes from './routes/interconsulta.routes';
import consultaRoutes from './routes/consulta.routes';
import interconsultasRoutes from './routes/interconsultas.routes';
import medicamentoRoutes from './routes/medicamento.routes';
import paciente_cclinicasRoutes from './routes/paciente_cclinicas.routes';
import paciente_fortalezaRoutes from './routes/paciente_fortaleza.routes';
import paciente_comorbilidadRoutes from './routes/paciente_comorbilidad.routes';
import tratamientoRoutes from './routes/tratamiento.routes';
import logRoutes from './routes/log.routes';
import './models/associations';
import sequelize from './config/db.config';
import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import swaggerOptions from './config/swagger.config';
// server.ts o app.ts
import 'dotenv/config';
import usuarioRoutes from './routes/usuario.routes';
import backupRoutes from './routes/backup.routes';



const app = express();
const allowedOrigins = [
  'http://localhost:3000',
  'http://localhost:3001', 
  'http://localhost:3002', 
  'http://localhost:3003',   
  'http://localhost:4000',  
];

// Configuración de CORS
app.use(cors({
  origin: (origin, callback) => {
    // Permitir solicitudes sin origen (por ejemplo, para Postman)
    if (!origin) return callback(null, true);

    if (allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('No permitido por CORS'));
    }
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));

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
app.use('/api/cclinicas', cclinicaRoutes);
app.use('/api/comorbilidades', comorbilidadRoutes);
app.use('/api/Paciente_Antecedente', paciente_antecedenteRoutes);
app.use('/api/Consultas', consultaRoutes);
app.use('/api/diagnosticos', diagnosticoRoutes);
app.use('/api/examenes', examenRoutes);
app.use('/api/examenes_complementarios', examenes_complementariosRoutes);
app.use('/api/fortaleza', fortalezaRoutes);
app.use('/api/Interconsulta', interconsultaRoutes);
app.use('/api/Interconsultas', interconsultasRoutes);
app.use('/api/log', logRoutes);
app.use('/api/medicamento', medicamentoRoutes);
app.use('/api/Paciente_cclinicas', paciente_cclinicasRoutes);
app.use('/api/Paciente_Fortaleza', paciente_fortalezaRoutes);
app.use('/api/Paciente_comorbilidad', paciente_comorbilidadRoutes);
app.use('/api/Tratamiento', tratamientoRoutes);
app.use('/api/vinculo_institucional', vinculo_institucionalRoutes);
app.use('/api/usuarios', usuarioRoutes);
app.use('/api/backup', backupRoutes);



export default app;
