const express = require("express")
const router = express.Router()
const homeControllers = require('../controller/home-controllers')


router.route('/list_all').get(homeControllers.list_all)
router.route('/turf/:id').get(homeControllers.getTurfById);
router.route('/book/:id').get(homeControllers.getTurfDetails);


module.exports = router