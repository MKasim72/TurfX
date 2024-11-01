const express = require("express")
const router = express.Router()
const dashboardControllers = require('../controller/dashboard_controller')
const ownerMiddleware = require('../middleware/owner-middleware')
const ownerControllers = require("../controller/owner-controllers")

// router.route('/').get(dashboardControllers.home)
router.route('/').get(dashboardControllers.home)
router.route('/addTurf').post(dashboardControllers.addTurf)
// router.route('/listTurf').get(dashboardControllers.listTurf)
router.route('/list_turfs').get(ownerMiddleware,dashboardControllers.listTurf);
router.route('/list_bookings').get(ownerMiddleware,dashboardControllers.list_Bookings)
router.route('/updateStatus').post(ownerMiddleware,dashboardControllers.updateStatus)
router.route('/deleteTurf/:id').delete(ownerMiddleware,dashboardControllers.deleteTurf)
router.route('/getSingleTurf/:id').get(ownerMiddleware,dashboardControllers.getSingleTurf)
router.route('/updateTurf/:id').patch(ownerMiddleware,dashboardControllers.updateTurf)


module.exports = router