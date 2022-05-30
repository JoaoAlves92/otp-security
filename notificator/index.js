const transporter = require('./mail');
const crontime = require('./cronjob');
var cron = require('node-cron');
const axios = require('axios');

var msg = {
    from: 'email.security@email.com',
    to: 'jvamarangonia@gmail.com',
    subject: 'Atualize seu Certificado OTP!',
    text: 'Seu certificado irá vencer em 1 (um) dia\nentre em contato com seu provedor para fazer um novo!'
}

function getTodayCertificates() {
    axios.get('http://localhost:5000/certificado/registerAll')
    .then((res) => {
        for (let obj of res.data.certificados) {
            let date = new Date(obj.DateSend)
            const formattedDate = `${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`

            let actualDate = new Date()
            actualDate.setDate(actualDate.getDate() + 1);
            const formattedActualDate = `${actualDate.getDate()}-${actualDate.getMonth()}-${actualDate.getFullYear()}`

            if (formattedDate == formattedActualDate) {
                msg.to = obj.email
                sendEmails(msg)
            }
        }
    })
    .catch((err) => {
        console.error(err)
    })
}

cron.schedule(crontime, () => {
    getTodayCertificates()
});

function sendEmails(msg) {
    transporter.sendMail(msg, (err, info) => {
        if (err) {
            return console.error(err)
        } else {
            console.log(info)
        }
    })
}