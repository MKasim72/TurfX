const express = require("express")
const bookingController = require("../controller/booking-controller")
const authMiddleware = require("../middleware/auth-middleware")
const router = express.Router()
// authMiddleware
// bookingController

router.route('/').get(bookingController.home)
router.route('/bookTurf').post(authMiddleware,bookingController.bookTurf)
router.route('/myBookings').get(authMiddleware,bookingController.trackBookings)
module.exports = router