// Rutas para Usuario (usuario.routes.ts)
import { Router } from 'express';
import UsuarioController from '../controllers/usuario.controller';
import { authMiddleware, authorize } from '../middlewares/auth.middleware';

const router = Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     Usuario:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           format: uuid
 *           description: Identificador único del usuario
 *         nombre:
 *           type: string
 *           description: Nombre del usuario
 *         rol:
 *           type: string
 *           description: Rol del usuario
 *         provincia:
 *           type: string
 *           description: Provincia del usuario
 *         email:
 *           type: string
 *           format: email
 *           description: Correo electrónico del usuario
 */

/**
 * @swagger
 * /api/usuarios/primer-registro:
 *   post:
 *     summary: Crear un nuevo usuario
 *     tags: [Usuarios]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *               password:
 *                 type: string
 *               preguntaSeguridad:
 *                 type: string
 *               respuestaSeguridad:
 *                 type: string
 *               rol:
 *                 type: string
 *               provincia:
 *                 type: string
 *             required:
 *               - nombre
 *               - password
 *               - preguntaSeguridad
 *               - respuestaSeguridad
 *               - rol
 * 
 *     responses:
 *       201:
 *         description: Usuario creado correctamente
 */
router.post('/primer-registro', UsuarioController.createFirstUsuario);

/**
 * @swagger
 * /api/usuarios/chequear-usuarios:
 *   get:
 *     summary: Verificar si existen usuarios en la base de datos
 *     tags: [Usuarios]
 *     responses:
 *       200:
 *         description: Resultado de la verificación
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Usuarios encontrados
 *                 exists:
 *                   type: boolean
 *                   example: true
 *       500:
 *         description: Error interno del servidor
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: Error interno del servidor
 */
router.get('/chequear-usuarios', UsuarioController.checkUsuarios);

/**
 * @swagger
 * /api/usuarios/perfil:
 *   get:
 *     summary: Obtener el perfil del usuario autenticado
 *     tags: [Usuarios]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Perfil del usuario autenticado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *       401:
 *         description: Usuario no autenticado
 */
router.get('/perfil', authMiddleware, UsuarioController.perfil);

/**
 * @swagger
 * /api/usuarios/registro:
 *   post:
 *     summary: Crear un nuevo usuario
 *     tags: [Usuarios]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *               password:
 *                 type: string
 *               preguntaSeguridad:
 *                 type: string
 *               respuestaSeguridad:
 *                 type: string
 *               rol:
 *                 type: string
 *               provincia:
 *                 type: string
 *             required:
 *               - nombre
 *               - password
 *               - preguntaSeguridad
 *               - respuestaSeguridad
 *               - rol
 * 
 *     responses:
 *       201:
 *         description: Usuario creado correctamente
 */
router.post('/registro', authMiddleware, authorize(['admin_nac']), UsuarioController.createUsuario);

/**
 * @swagger
 * /api/usuarios/login:
 *   post:
 *     summary: Iniciar sesión y obtener un token JWT
 *     tags: [Usuarios]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Usuario autenticado correctamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 token:
 *                   type: string
 */
router.post('/login', UsuarioController.login);

/**
 * @swagger
 * /api/usuarios/{id}:
 *   get:
 *     summary: Obtener un usuario por ID
 *     tags: [Usuarios]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID del usuario
 *     responses:
 *       200:
 *         description: Datos del usuario
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Usuario'
 *       404:
 *         description: Usuario no encontrado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Usuario no encontrado
 *       500:
 *         description: Error interno del servidor
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: Error interno del servidor
 */
router.get('/:id', authMiddleware, authorize(['admin_nac']), UsuarioController.getUsuarioById);

/**
 * @swagger
 * /api/usuarios/chequear-respuesta:
 *   post:
 *     summary: Chequea la respuesta a la pregunta de seguridad
 *     tags: [Usuarios]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *                 example: usuario1
 *               preguntaSeguridad:
 *                 type: string
 *                 example: ¿Cuál es el nombre de tu primera mascota?
 *               respuestaSeguridad:
 *                 type: string
 *                 example: Firulais
 *     responses:
 *       200:
 *         description: Respuesta de seguridad correcta
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Respuesta de seguridad correcta
 *       404:
 *         description: Usuario no encontrado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: Usuario no encontrado
 *       403:
 *         description: Pregunta o respuesta de seguridad incorrecta
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: Pregunta o respuesta de seguridad incorrecta
 *       500:
 *         description: Error en el servidor al intentar chequear la pregunta de seguridad
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: Error en el servidor al intentar chequear la pregunta de seguridad
 */
router.post('/chequear-respuesta', UsuarioController.chequearRespuesta);

/**
 * @swagger
 * /api/usuarios/recuperar-contrasena:
 *   post:
 *     summary: Permite recuperar la contraseña de un usuario
 *     tags: [Usuarios]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *                 example: usuario1
 *               preguntaSeguridad:
 *                 type: string
 *                 example: ¿Cuál es el nombre de tu primera mascota?
 *               respuestaSeguridad:
 *                 type: string
 *                 example: Firulais
 *               nuevaContrasena:
 *                 type: string
 *                 example: nuevaContrasenaSegura123
 *     responses:
 *       200:
 *         description: Contraseña actualizada correctamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Contraseña actualizada correctamente
 *       404:
 *         description: Usuario no encontrado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: Usuario no encontrado
 *       403:
 *         description: Pregunta o respuesta de seguridad incorrecta
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: Pregunta o respuesta de seguridad incorrecta
 *       500:
 *         description: Error en el servidor al intentar recuperar la contraseña
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: Error en el servidor al intentar recuperar la contraseña
 */
router.post('/recuperar-contrasena', UsuarioController.recuperarContrasena);

/**
 * @swagger
 * /api/usuarios/{id}:
 *   delete:
 *     summary: Eliminar un usuario por ID
 *     tags: [Usuarios]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID del usuario
 *     responses:
 *       204:
 *         description: Usuario eliminado con éxito
 *       500:
 *         description: Error interno del servidor
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: Error interno del servidor
 */
router.delete('/:id', authMiddleware, authorize(['admin_nac']), UsuarioController.deleteUsuario);

/**
 * @swagger
 * /api/usuarios:
 *   get:
 *     summary: Obtener todos los usuarios
 *     tags: [Usuarios]
 *     responses:
 *       200:
 *         description: Lista de todos los usuarios
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Usuario'
 *       500:
 *         description: Error interno del servidor
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: Error interno del servidor
 */
router.get('/', authMiddleware, authorize(['admin_nac']), UsuarioController.getAllUsuarios);


export default router;