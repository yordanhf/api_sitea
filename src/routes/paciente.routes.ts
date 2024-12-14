// 4. Definir las Rutas (paciente.routes.ts)
import { Router } from 'express';
import PacienteController from '../controllers/paciente.controller';
import authMiddleware from '../middlewares/auth.middleware';

const router = Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     Paciente:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           description: ID auto-incremental del paciente
 *         nombre:
 *           type: string
 *           description: Nombre del paciente
 *         apellidos:
 *           type: string
 *           description: Apellidos del paciente
 *         ci:
 *           type: string
 *           description: CI del paciente
 *         sexo:
 *           type: string
 *           description: Sexo del paciente
 *         raza:
 *           type: string
 *           description: Raza del paciente
 *         direccion:
 *           type: string
 *           description: Dirección del paciente
 *         municipioId:
 *           type: number
 *           description: id del Municipio del paciente
 *         verbal:
 *           type: string
 *           description: Verbal del paciente
 *         motivoConsulta:
 *           type: string
 *           description: Motivo de consulta del paciente
 *         diagnosticoId:
 *           type: number
 *           description: id del Diagnóstico del paciente 
 *         edadDiagnostico:
 *           type: number
 *           description: edad a la que fue diagnosticado
 *         fechaDiagnostico:
 *           type: string
 *           description: fecha del diagnostico TEA
 *         terapia:
 *           type: string
 *           description: Terapia del paciente
 *         descripcionTerapia:
 *           type: string
 *           description: Descripción de la terapia del paciente
 *         observaciones:
 *           type: string
 *           description: Observaciones del paciente
 *         telefono:
 *           type: string
 *           description: telefono del paciente
 *         vinculoInstitucionalId:
 *           type: number
 *           description: id del vinculo institucional del paciente
 *         antecPatFam:
 *           type: string
 *           description: antecedentes patologicos familiares del paciente
 *         historialTratamiento:
 *           type: string
 *           description: historial de los tratamientos del paciente
 *         historialAlergia:
 *           type: string
 *           description: historial de las alergias del paciente
 *       required:
 *         - nombre
 *         - apellidos
 *         - ci
 *         - sexo
 *         - raza
 *         - direccion
 *         - municipioId
 *         - verbal
 *         - diagnosticoId
 *         - vinculoInstitucionalId
 * 
 */

/**
 * @swagger
 * /api/pacientes/all:
 *   get:
 *     summary: Obtener todos los pacientes
 *     tags: [Pacientes]
 *     responses:
 *       200:
 *         description: Lista de pacientes
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Paciente'
 */
router.get('/all', PacienteController.getAllPacientes);

/**
 * @swagger
 * /api/pacientes/{id}:
 *   get:
 *     summary: Obtener un paciente por ID
 *     tags: [Pacientes]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del paciente
 *     responses:
 *       200:
 *         description: Paciente encontrado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Paciente'
 *       404:
 *         description: Paciente no encontrado
 */
router.get('/:id', PacienteController.getPacienteById);

/**
 * @swagger
 * /api/pacientes/municipio/{municipioId}:
 *   get:
 *     summary: Obtener todos los pacientes de un municipio
 *     tags: [Pacientes]
 *     parameters:
 *       - in: path
 *         name: municipioId
 *         required: true
 *         schema:
 *           type: integer
 *         description: municipio del paciente
 *     responses:
 *       200:
 *         description: Paciente encontrado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Paciente'
 *       404:
 *         description: No hay pacientes en ese municipio
 */
router.get('/municipio/:municipioId', PacienteController.getAllPacientesByMunicipios);

/**
 * @swagger
 * /api/pacientes:
 *   post:
 *     summary: Crear un nuevo paciente
 *     tags: [Pacientes]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Paciente'
 *     responses:
 *       201:
 *         description: Paciente creado con éxito
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Paciente'
 */
router.post('/', authMiddleware, PacienteController.createPaciente);

/**
 * @swagger
 * /api/pacientes/{id}:
 *   put:
 *     summary: Actualizar un paciente por ID
 *     tags: [Pacientes]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del paciente
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Paciente'
 *     responses:
 *       200:
 *         description: Paciente actualizado con éxito
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Paciente'
 *       404:
 *         description: Paciente no encontrado
 */
router.put('/:id', authMiddleware, PacienteController.updatePaciente);

/**
 * @swagger
 * /api/pacientes/{id}:
 *   delete:
 *     summary: Eliminar un paciente por ID
 *     tags: [Pacientes]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del paciente
 *     responses:
 *       200:
 *         description: Paciente eliminado con éxito
 *       404:
 *         description: Paciente no encontrado
 */
router.delete('/:id', authMiddleware, PacienteController.deletePaciente);

/**
 * @swagger
 * /api/pacientes:
 *   get:
 *     summary: Filtrar pacientes según parámetros específicos
 *     tags: [Pacientes]
 *     parameters:
 *       - in: query
 *         name: nombre
 *         schema:
 *           type: string
 *         description: Nombre del paciente
 *       - in: query
 *         name: apellidos
 *         schema:
 *           type: string
 *         description: Apellidos del paciente
 *       - in: query
 *         name: ci
 *         schema:
 *           type: string
 *         description: Carnet de identidad del paciente
 *       - in: query
 *         name: municipioId
 *         schema:
 *           type: integer
 *         description: ID del municipio del paciente. Se devolverá el nombre del municipio asociado.
 *       - in: query
 *         name: sexo
 *         schema:
 *           type: string
 *         description: Sexo del paciente Masculino o Femenino
 *       - in: query
 *         name: raza
 *         schema:
 *           type: string
 *         description: Raza del paciente
 *       - in: query
 *         name: verbal
 *         schema:
 *           type: string
 *         description: Estado verbal del paciente Verbal o No Verbal
 *       - in: query
 *         name: diagnosticoId
 *         schema:
 *           type: integer
 *         description: ID del diagnóstico del paciente. Se devolverá el nombre del diagnóstico asociado.
 *       - in: query
 *         name: vinculoInstitucionalId
 *         schema:
 *           type: integer
 *         description: ID del vínculo institucional del paciente. Se devolverá el nombre del vínculo institucional asociado.
 *       - in: query
 *         name: terapia
 *         schema:
 *           type: string
 *         description: Terapia del paciente
 *       - in: query
 *         name: fechaInicioDiagnostico
 *         schema:
 *           type: string
 *           format: date
 *         description: Fecha de inicio para el rango de diagnóstico YYYY-MM-DD
 *       - in: query
 *         name: fechaFinDiagnostico
 *         schema:
 *           type: string
 *           format: date
 *         description: Fecha de fin para el rango de diagnóstico YYYY-MM-DD
 *       - in: query
 *         name: edadMinDiagnostico
 *         schema:
 *           type: integer
 *         description: Edad mínima al momento del diagnóstico
 *       - in: query
 *         name: edadMaxDiagnostico
 *         schema:
 *           type: integer
 *         description: Edad máxima al momento del diagnóstico
 *       - in: query
 *         name: medicamentoId
 *         schema:
 *           type: integer
 *         description: ID del medicamento para filtrar pacientes que hayan sido tratados con dicho medicamento
 *     responses:
 *       200:
 *         description: Lista de pacientes que coinciden con los filtros
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                   nombre:
 *                     type: string
 *                   apellidos:
 *                     type: string
 *                   ci:
 *                     type: string
 *                   sexo:
 *                     type: string
 *                   municipio:
 *                     type: object
 *                     properties:
 *                       nombre:
 *                         type: string
 *                   diagnostico:
 *                     type: object
 *                     properties:
 *                       nombre:
 *                         type: string
 *                   vinculoInstitucional:
 *                     type: object
 *                     properties:
 *                       nombre:
 *                         type: string
 *                   otrosCampos:
 *                     type: string
 *       500:
 *         description: Error al filtrar pacientes
 */
router.get('/', PacienteController.getPacientesByParams);

export default router;