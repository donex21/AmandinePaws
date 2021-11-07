// <<<<<<<<<<<=====This Script is for Text Message Sending======>>>>>>>>>>>

//Dependencies: 
//npm install express cors twilio
// To run this Script  type in the terminal..

// cd server
// nodemon index.js

// back to amandine paws website: type - cd ..

const express = require('express'); 
const cors = require('cors');
const twilio = require('twilio'); 

const nodemailer = require("nodemailer")

//twilio requirements -- Texting API 
const accountSid = 'ACba8d2dddab1fd198c946430bd94c8ea0';
const authToken = 'db0e53202c4e07e622ac11a576a0f688'; 
const client = new twilio(accountSid, authToken);

const app = express(); //alias

app.use(cors()); //Blocks browser from restricting any data

//Welcome Page for the Server 
app.get('/', (req, res) => {
    res.send('Welcome to the Express Server')
})

app.get('/send-text', (req, res) => {
    //Welcome Message
    res.send('Hello to the Twilio Server')

    //_GET Variables
    const { recipient, textmessage, email } = req.query;


    //Send Text
    client.messages.create({
        body: textmessage,
        to: "+63" + recipient,  // Text this number
        from: '+15104789656' // From a valid Twilio number
    }).then((message) => console.log(message.body))
    .catch(e => {
        console.log(e);
      });

      const transport = nodemailer.createTransport({
        service: 'gmail',
		host: 'smtp.gmail.com ',
		port: 465 ,
        secure: true,
		auth: {
			user: 'sheila.amandinepaws@gmail.com',
			pass: 'Iloveyou3000'
		}
	})

    transport.sendMail({
		from: 'sheila.amandinepaws@gmail.com',
		to: email,
		subject: "Amandine Paws App",
		html: `<div className="email" style="
        border: 1px solid black;
        padding: 20px;
        font-family: sans-serif;
        line-height: 2;
        font-size: 20px; 
        ">
        <h2>Welcome to Amandine Paws!</h2>
        <p>${textmessage}</p>
    
        <p>Best Regards;</p>
        <p>Amandine Paws App</p>
         </div>
    `
	}).then(info => {
        console.log({info});
      }).catch(console.error);

})

app.listen(4000, () => console.log("Running on Port 4000"))