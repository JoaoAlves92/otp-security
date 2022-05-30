const nodemailer = require('nodemailer');

// configurando transporter
const transporter = nodemailer.createTransport({
    host: 'smtp.mailtrap.io',
    port: 2525,
    secure: false,
    auth: {
        user: '640c5d494c0a68',
        pass: 'edb29184b2994f'
    }
})

module.exports = transporter