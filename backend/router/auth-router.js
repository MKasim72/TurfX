const express = require("express")
const router = express.Router()
const authControllers = require('../controller/auth-controllers') 
const validate = require("../middleware/validate-middleware")
const {registrationSchema, loginSchema} = require("../validators/auth-validator")
const authMiddleware = require("../middleware/auth-middleware")

// authMiddleware

router.route('/').get(authControllers.home)
router.route('/register').post(validate(registrationSchema),authControllers.register)
router.route('/login').post(validate(loginSchema),authControllers.login)
router.route('/user').get(authMiddleware,authControllers.user)
// router.route('/login').post(authControllers.login)

module.exports = router