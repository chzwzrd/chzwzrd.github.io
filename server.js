require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const nodemailer = require('nodemailer');
const smtpTransport = require('nodemailer-smtp-transport');
const xoauth2 = require('xoauth2');

const port = process.env.PORT || 3000;

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/public/assets/html/index.html'));
});

app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname + '/public/assets/html/about.html'));
});

app.get('/portfolio', (req, res) => {
    res.sendFile(path.join(__dirname + '/public/assets/html/portfolio.html'));
});

app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname + '/public/assets/html/contact.html'));
});

app.post('/formProcess', (req, res) => {
    let smtpTransport = nodemailer.createTransport({
          host: 'smtp.gmail.com',
          port: 465,
          secure: true,
          auth: {
              user: process.env.GMAIL_EMAIL,
              pass: process.env.GMAIL_PW
          }
      });

    const mailOptions = {  //email options
        from: `"${req.body.name}" <${req.body.email}>`,
        to: "Melodie Chi <chzwzrd@gmail.com>", // receiver
        subject: "MY PROJECT WEBSITE: new message", // subject
        html: req.body.message // body (var data which we've declared)
    };

    // send mail with defined transport object
    smtpTransport.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message %s sent: %s', info.messageId, info.response);
            res.render('index');
    });
});

app.listen(port, (req, res) => {
    console.log(`App listening on port ${port}`);
});