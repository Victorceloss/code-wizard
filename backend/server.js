const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/send-email', (req, res) => {
  const email = req.body.email;
  const message = req.body.message;
  const fullName = req.body['full-name'];

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'codewizard@gmail.com',
      pass: 'v1a2l3c4'
    }
  });

  const mailOptions = {
    from: `${email}`,
    to: 'codewizard@gmail.com',
    subject: 'Message',
    text: `Name: ${fullName}\n\nEmail: ${email}\n\nMessage: ${message}`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).send('Ocorreu um erro ao enviar a mensagem.');
    } else {
      console.log('Email enviado: ' + info.response);
      res.send('Mensagem enviada com sucesso!');
    }
  });
});

app.listen(3000, () => console.log('Servidor iniciado na porta 3000'));