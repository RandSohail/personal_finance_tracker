import sgMail from '@sendgrid/mail';


export default async () => {
  try {
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    const message = {
      to: 'randsohail98@gmail.com',
      from: '',
      subject: 'Sending with Twilio SendGrid is Fun',
      text: 'and easy to do anywhere, even with Node.js',
      html: '<strong>and easy to do anywhere, even with Node.js</strong>',
    };
    await sgMail.send(message);
  } catch (error) {
    if (error) {
      throw new Error(error.toString().split('\n ')[1], error.code);
    }
  }
};
