const validate = (schema) => async(req,res,next) => {
    try {
        const parseBody = await schema.parseAsync(req.body)
        req.body = parseBody
        next()
    } catch (error) {
        const status = 422 
        const msg = error.errors[0].message
        // res.status(400).json({msg})
        const err = {
            status,
            message:msg           
        }
        next(err)
    }
}
module.exports = validate
