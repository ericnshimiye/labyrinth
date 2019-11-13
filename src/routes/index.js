const express = require('express');
const router = express.Router();
const roles = require('../roles');
const users = require('./users');
const teams = require('./teams');
const httpStatus = require('http-status-codes');
const passport = require('passport');
const authorizeRoles = require('../middleware/authorizeRoles');

/**
   * @swagger
   * /health:
   *   get:
   *     description: Health check endpoint
   *     security: []
   *     tags:
   *      - health check
   *     responses:
   *       200:
   *         description: ok
   */
router.get('/health', (_req, res) => res.status(httpStatus.OK).send());

/**
   * @swagger
   * /api/users:
   *   get:
   *     security:
   *      - bearerAuth: []
   *     description: Returns all users
   *     tags:
   *      - users
   *     responses:
   *       200:
   *         description: users
   *       401:
   *         description: unauthorized
   */
router.get('/api/users',
    passport.authenticate('jwt', {session: false}),
    authorizeRoles([roles.admin]),
    users.all
);

/**
   * @swagger
   * /api/users/signup:
   *   post:
   *     description: Sign a user up
   *     security: []
   *     tags:
   *      - users
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             type: object
   *             properties:
   *               firstName:
   *                 type: string
   *                 required: true
   *               lastName:
   *                 type: string
   *                 required: true
   *               email:
   *                 type: string
   *                 required: true
   *               team:
   *                 type: string
   *                 required: true
   *               password:
   *                 type: string
   *                 required: true
   *               confirmPassword:
   *                 type: string
   *                 required: true
   *     responses:
   *       201:
   *         description: created
   *       400:
   *         description: bad request
   *       409:
   *         description: conflict
   */
router.post('/api/users/signup', users.signup);

/**
   * @swagger
   * /api/users/signin:
   *   post:
   *     description: Sign a user in
   *     security: []
   *     tags:
   *      - users
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             type: object
   *             properties:
   *               email:
   *                 type: string
   *                 required: true
   *               password:
   *                 type: string
   *                 required: true
   *     responses:
   *       200:
   *         description: token
   *       400:
   *         description: bad request
   *       404:
   *         description: wrong email or password
   */
router.post('/api/users/signin', users.signin);

/**
   * @swagger
   * /api/users/current:
   *   get:
   *     security:
   *      - bearerAuth: []
   *     description: Return current user
   *     tags:
   *      - users
   *     responses:
   *       200:
   *         description: user
   *       404:
   *         description: not found
   */
router.get('/api/users/current', passport.authenticate('jwt', {session: false}), users.current);

/**
   * @swagger
   * /api/teams:
   *   get:
   *     security:
   *      - bearerAuth: []
   *     description: Returns all teams
   *     tags:
   *      - teams
   *     responses:
   *       200:
   *         description: teams
   *       401:
   *         description: unauthorized
   */
router.get('/api/teams',
    passport.authenticate('jwt', {session: false}),
    authorizeRoles([roles.admin]),
    teams.all
);

/**
   * @swagger
   * /api/teams/register:
   *   post:
   *     security:
   *      - bearerAuth: []
   *     description: Register a team
   *     tags:
   *      - teams
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             type: object
   *             properties:
   *               code:
   *                 type: string
   *                 required: true
   *               name:
   *                 type: string
   *                 required: true
   *     responses:
   *       201:
   *         description: created
   *       400:
   *         description: bad request
   *       401:
   *         description: unauthorized
   *       409:
   *         description: conflict
   */
router.post('/api/teams/register', passport.authenticate('jwt', {session: false}), teams.register);

module.exports = router;
