// 4. Definir las Rutas (paciente.routes.ts)
import { Router } from 'express';
import PacienteController from '../controllers/paciente.controller';

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
 *         municipio:
 *           type: string
 *           description: Municipio del paciente
 *         verbal:
 *           type: string
 *           description: Verbal del paciente
 *         motivoConsulta:
 *           type: string
 *           description: Motivo de consulta del paciente
 *         diagnostico:
 *           type: string
 *           description: Diagnóstico del paciente
 *         comorbilidad:
 *           type: string
 *           description: Comorbilidad del paciente
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
 *         provincia:
 *           type: string
 *           description: provincia del paciente
 *         vinculoInstitucional:
 *           type: string
 *           description: vinculo institucional del paciente
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
 *         - municipio
 *         - verbal
 *         - provincia
 */

/**
 * @swagger
 * /api/pacientes:
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
router.get('/', PacienteController.getAllPacientes);

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
 * /api/pacientes/municipio/{municipio}:
 *   get:
 *     summary: Obtener todos los pacientes de un municipio
 *     tags: [Pacientes]
 *     parameters:
 *       - in: path
 *         name: municipio
 *         required: true
 *         schema:
 *           type: string
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
router.get('/municipio/:municipio', PacienteController.getAllPacientesByMunicipios);

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
router.post('/', PacienteController.createPaciente);

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
router.put('/:id', PacienteController.updatePaciente);

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
router.delete('/:id', PacienteController.deletePaciente);

export default router;