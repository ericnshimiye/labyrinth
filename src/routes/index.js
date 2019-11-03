const express = require('express');
const router = express.Router();
const users = require('./users');
const httpStatus = require('http-status-codes');

// @route   GET /health
// @desc    Health check endpoint
// @access  public
router.get('/health', (_req, res) => res.status(httpStatus.OK).send());

// @route   POST /api/users/signup
// @desc    Register a user
// @access  public
router.post('/api/users/signup', users.signup);

module.exports = router;