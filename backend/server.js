require("dotenv").config();
const express = require("express")
const app = express()
const auth_router = require("./router/auth-router")
const contact_router = require("./router/contact-router")
const owner_router = require('./router/owner-router')
const connectDb = require('./utils/db');
const errorMiddleware = require("./middleware/error-middleware");
const cors = require("cors")
const dashboard_route = require("./router/dashboard_router")
const frontRouter = require("./router/front_router")
const bookingRouter =require('./router/booking-router')

// const corsOption = {
//     origin: "http://localhost:5173",
//     methods : "POST,GET,PUT,DELETE",
//     credentials:true, 

// }

app.use(cors())
app.use(express.json())
app.use('/api/auth',auth_router)
app.use('/api/contact',contact_router)
app.use('/api/owner',owner_router)
app.use('/api/dashboard',dashboard_route)
app.use('/api/home',frontRouter)
app.use('/api/booking',bookingRouter)
app.use('/api/track_bookings',bookingRouter)

app.use(errorMiddleware)

const PORT = process.env.PORT 
connectDb().then(()=>{
    app.listen(PORT,()=>{
        console.log("Server is Started ...")
    })
})