'use server';
import supabase from "../client/supabase";
const sgMail = require('@sendgrid/mail');

async function sendEmail(data) {
    const apiKey = process.env.SENDGRID_API_KEY;
    sgMail.setApiKey(apiKey);
    const msg = {
        to: process.env.OWNER_EMAIL,
        // **data.email will NOT be where the msg is sent 
        // **should rather go to the OWNER
        // *will include data.email + msg within the html
        from: process.env.SENDGRID_VERIFIED_EMAIL, // Use the email address or domain you verified above
        subject: 'Contact Us form submission',
        html:  `<div>
        <h1>You have a new contact request</h1>
        <ul>
          <li>Sender Name: ${data.name}</li>
          <li>Sender Email: ${data.email}</li>
          <li>Sender Message: ${data.message}</li>
        </ul>
        </div>
      `,
    };
    // **data.email will NOT be where the msg is sent 
    // **should rather go to the OWNER
    console.log(msg);
    try{
      console.log('sgMail started');
      const res = await sgMail.send(msg);
      console.log('sgMail finished', res);
    } catch (err) {
      console.log(err);
      throw new Error('SendGrid email was not sent!');
    } 
}

export async function addContactToDB(formData) {
    // Assuming 'ContactForms' is the name of your table
    const { data, error } = await supabase
      .from('ContactForms')
      .insert([
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
          // Map other fields accordingly
        },
      ])
      .select()

    if (error) {
      console.error('Error inserting data:', error);
      // add error handling for client-side for not saving to DB
      return { error: err.message };
    } else {
      try {
        console.log('Data inserted successfully:', data[0]);
        await sendEmail(data[0]);
        return {success: data[0].id}
      } catch (err) {
        console.log("SendGrid err is: ", err.message)
        // handle error for SendGrid failure
        return { error: err.message };
      }
    }
}