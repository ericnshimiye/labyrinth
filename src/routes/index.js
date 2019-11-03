const express = require('express');
const router = express.Router();
const httpStatus = require('http-status-codes');

// @route   GET /health
// @desc    Health check endpoint
// @access  public
router.get('/health', (_req, res) => res.status(httpStatus.OK).send());

module.exports = router;