const express = require('express');
const router = express.Router();
const users = require('./users');
const httpStatus = require('http-status-codes');
const passport = require('passport');

// @route   GET /health
// @desc    Health check endpoint
// @access  public
router.get('/health', (_req, res) => res.status(httpStatus.OK).send());

// @route   POST /api/users/signup
// @desc    Register a user
// @access  public
router.post('/api/users/signup', users.signup);

// @route   POST /api/users/signin
// @desc    Sign a user in
// @access  public
router.post('/api/users/signin', users.signin);

// @route   GET /api/users/current
// @desc    Return current user
// @access  private
router.get('/api/users/current', passport.authenticate('jwt', {session: false}), users.current);

module.exports = router;
