const { z } = require("zod");

const registrationSchema = z.object({
    username: z
    .string({ required_error: "Username is Required" })
    .trim()
    .min(3, { message: "Name must be at least of 3 chars" })
    .max(255, { message: "Name must have max length of 255" }),

    email: z
    .string({ required_error: "Email is Required" })
    .trim()
    .min(3, { message: "Email must be at least of 3 chars" })
    .max(255, { message: "Email must have max length of 255" }),

    password: z
    .string({ required_error: "Password is Required" })
    .trim()
    .min(3, { message: "Password must be at least of 3 chars" })
    .max(255, { message: "Password must have max length of 255" }),

    phone:z
    .string({ required_error: "Phone is Required" })
    .min(5, { message: "Phone must be at least of 5"})
    .max(12,{message:"Phone number can be max of 12 digits"})

});

const loginSchema = z.object({

    email: z
    .string({ required_error: "Email is Required" })
    .trim()
    .min(3, { message: "Email must be at least of 3 chars" })
    .max(255, { message: "Email must have max length of 255" }),

    password: z
    .string({ required_error: "Password is Required" })
    .trim()
    .min(3, { message: "Password must be at least of 3 chars" })
    .max(255, { message: "Password must have max length of 255" }),

})

module.exports = {registrationSchema,loginSchema}
