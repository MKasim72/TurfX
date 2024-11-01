const express = require("express")
const router = express.Router()
const ownerControllers = require('../controller/owner-controllers') 
const validate = require("../middleware/validate-middleware")
const {registrationSchema, loginSchema} = require("../validators/auth-validator")
const ownerMiddleware = require("../middleware/owner-middleware")

router.route('/').get(ownerControllers.home)
router.route('/register').post(validate(registrationSchema),ownerControllers.register)
router.route('/login').post(validate(loginSchema),ownerControllers.login)
router.route('/owner').get(ownerMiddleware,ownerControllers.owner)

// router.route('/login').post(authControllers.login)

module.exports = router