const express = require('express');
const { body } = require('express-validator');
const authController = require('../controller/authController');
const router = express.Router();

router.post('/register', [
    body('username').isString().isLength({ min: 3 }),
    body('password').isString().isLength({ min: 6 })
], authController.register);

router.post('/login', [
    body('username').isString().isLength({ min: 3 }),
    body('password').isString().isLength({ min: 6 })
], authController.login);

module.exports = router;
