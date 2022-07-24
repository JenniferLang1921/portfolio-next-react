//export default async (req, res) => {
//  const { name, email, message, phone } = req.body;

// const transporter = nodemailer.createTransport({
//   service: "gmail,",
//   auth: {
//     user: process.env.user,
//     pass: process.env.pass,
//   },
// });

// try {
//  const emailRes = await transporter.sendMail({
//   from: email,
//   to: "jenniferlang1921@gmail.com",
//   subject: `Contact form submission from ${name}`,
//   html: `<p>You have a new contact form submission</p><br>
// <p><strong>Name: </strong> ${name} </p><br>
//</br> <p><strong>Phone: </strong> ${phone} </p><br>
// <p><strong>Message: </strong> ${message} </p><br>

//   `,
// });

//  console.log("Message Sent");
// } catch (err) {
//  console.log(err);
// }

//  res.status(200).json(req.body);
//};

// using Twilio SendGrid's v3 Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs
javascript;
const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
const msg = {
  to: "test@example.com", // Change to your recipient
  from: "test@example.com", // Change to your verified sender
  subject: "Sending with SendGrid is Fun",
  text: "and easy to do anywhere, even with Node.js",
  html: "<strong>and easy to do anywhere, even with Node.js</strong>",
};
sgMail
  .send(msg)
  .then(() => {
    console.log("Email sent");
  })
  .catch((error) => {
    console.error(error);
  });
