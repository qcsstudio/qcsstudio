import Twilio from 'twilio';

export  async function POST(req) {
  if (req.method === 'POST') {
    const { phoneNumber, message } =  await req.json();

    const accountSid = process.env.TWILIO_ACCOUNT_SID;
    const authToken = process.env.TWILIO_AUTH_TOKEN;
    const twilioPhoneNumber = process.env.TWILIO_PHONE_NUMBER;

    const client = Twilio(accountSid, authToken);

    try {
      await client.messages.create({
        body: message,
        from: twilioPhoneNumber,
        to: phoneNumber,
      });
     return Response.json({ success: true, message: 'Message sent!' } , {status:200});
    } catch (error) {
     return  Response.json({ success: false, message: 'Failed to send message', error: error.message } , {status:500});
    }
  } else {
    return Response.json({ success: false, message: 'Method Not Allowed' } , {status:405});
  }
}
