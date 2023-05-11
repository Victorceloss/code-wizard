const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/send-email', (req, res) => {
  const email = req.body.email;
  const message = req.body.message;
  const fullName = req.body['full-name'];

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'codewizard2023company@gmail.com',
      pass: 'smmouagbpandqpfj'
    }
  });

  const mailOptions = {
    from: `${email}`,
    to: `codewizard2023company@gmail.com`,
    subject: 'Message',
    text: `Name: ${fullName}\n\nEmail: ${email}\n\nMessage: ${message}`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).send('An error occurred while sending the message.');
    } else {
      console.log(`Sent Email: ${info.response}`);
      res.redirect("back");
    }
  });
});

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));