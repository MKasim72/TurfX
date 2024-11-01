const Contact = require('../models/contact-model')

const contactForm = async(req,res) =>{
    try {
        const response = req.body 
        await Contact.create(response)
        res.status(201).json({message: 'Sent Successfully'})
    } catch (error) {
        res.status(400).json({message: 'Error sending message'})
    }
}

module.exports = contactForm