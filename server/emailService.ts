import { Resend } from 'resend';

let resendClient: Resend | null = null;
let fromEmail: string = 'noreply@sapphirehealthng.com';

function getResendClient() {
  // Try to get API key from environment variable (for Railway/production)
  const apiKey = process.env.RESEND_API_KEY;
  
  if (apiKey) {
    if (!resendClient) {
      resendClient = new Resend(apiKey);
      fromEmail = process.env.RESEND_FROM_EMAIL || 'noreply@sapphirehealthng.com';
    }
    return { client: resendClient, fromEmail };
  }
  
  // Fallback: Try Replit connectors (for Replit environment)
  const hostname = process.env.REPLIT_CONNECTORS_HOSTNAME;
  const xReplitToken = process.env.REPL_IDENTITY 
    ? 'repl ' + process.env.REPL_IDENTITY 
    : process.env.WEB_REPL_RENEWAL 
    ? 'depl ' + process.env.WEB_REPL_RENEWAL 
    : null;

  if (xReplitToken && hostname) {
    throw new Error('Replit connectors not supported in this environment. Please set RESEND_API_KEY environment variable.');
  }
  
  throw new Error('RESEND_API_KEY environment variable is required. Please set it in your Railway environment variables.');
}

async function getUncachableResendClient() {
  return getResendClient();
}

export async function sendBookingConfirmation(
  to: string,
  bookingDetails: {
    name: string;
    date: string;
    timeSlot: string;
    appointmentType: string;
    phone?: string;
  }
) {
  try {
    const { client, fromEmail } = await getUncachableResendClient();
    
    const appointmentTypes: Record<string, string> = {
      consultation: "General Consultation",
      "site-visit": "Site Visit Request",
      "event-coverage": "Event Coverage Inquiry",
    };
    
    const typeDisplay = appointmentTypes[bookingDetails.appointmentType] || bookingDetails.appointmentType;
    
    await client.emails.send({
      from: fromEmail,
      to: [to],
      subject: `Appointment Confirmation - Sapphire Health Limited`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background-color: #4B1E1B; color: white; padding: 20px; text-align: center; }
              .content { background-color: #f9f9f9; padding: 30px; border-radius: 5px; margin-top: 20px; }
              .detail { margin: 10px 0; }
              .label { font-weight: bold; color: #4B1E1B; }
              .footer { margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; font-size: 14px; color: #666; }
              .contact-info { margin-top: 15px; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1>Appointment Confirmed</h1>
              </div>
              <div class="content">
                <p>Dear ${bookingDetails.name},</p>
                <p>Thank you for booking an appointment with Sapphire Health Limited. Your appointment has been confirmed with the following details:</p>
                
                <div class="detail">
                  <span class="label">Date:</span> ${bookingDetails.date}
                </div>
                <div class="detail">
                  <span class="label">Time:</span> ${bookingDetails.timeSlot}
                </div>
                <div class="detail">
                  <span class="label">Type:</span> ${typeDisplay}
                </div>
                ${bookingDetails.phone ? `<div class="detail"><span class="label">Phone:</span> ${bookingDetails.phone}</div>` : ''}
                
                <p style="margin-top: 20px;">We look forward to serving you. If you need to reschedule or have any questions, please contact us.</p>
                
                <div class="contact-info">
                  <p><strong>Sapphire Health Limited</strong></p>
                  <p>Phone: +234 806 731 6717</p>
                  <p>Specializing in remote/offsite workforce medical care</p>
                </div>
              </div>
              <div class="footer">
                <p>This is an automated confirmation email from Sapphire Health Limited.</p>
                <p>Please do not reply to this email. For inquiries, call +234 806 731 6717.</p>
              </div>
            </div>
          </body>
        </html>
      `,
    });
    
    console.log(`Booking confirmation email sent to ${to}`);
    return { success: true };
  } catch (error) {
    console.error('Error sending booking confirmation email:', error);
    return { success: false, error };
  }
}

export async function sendStaffBookingAlert(
  bookingDetails: {
    name: string;
    email: string;
    date: string;
    timeSlot: string;
    appointmentType: string;
    phone?: string;
    message?: string;
  }
) {
  try {
    const { client, fromEmail } = await getUncachableResendClient();
    
    const appointmentTypes: Record<string, string> = {
      consultation: "General Consultation",
      "site-visit": "Site Visit Request",
      "event-coverage": "Event Coverage Inquiry",
    };
    
    const typeDisplay = appointmentTypes[bookingDetails.appointmentType] || bookingDetails.appointmentType;
    
    await client.emails.send({
      from: fromEmail,
      to: [fromEmail],
      subject: `New Appointment Booking - ${bookingDetails.name}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background-color: #9E3C34; color: white; padding: 20px; text-align: center; }
              .content { background-color: #f9f9f9; padding: 30px; border-radius: 5px; margin-top: 20px; }
              .detail { margin: 10px 0; padding: 10px; background: white; border-left: 3px solid #4B1E1B; }
              .label { font-weight: bold; color: #4B1E1B; display: inline-block; width: 120px; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1>New Appointment Alert</h1>
              </div>
              <div class="content">
                <p><strong>A new appointment has been booked:</strong></p>
                
                <div class="detail">
                  <span class="label">Name:</span> ${bookingDetails.name}
                </div>
                <div class="detail">
                  <span class="label">Email:</span> ${bookingDetails.email}
                </div>
                ${bookingDetails.phone ? `<div class="detail"><span class="label">Phone:</span> ${bookingDetails.phone}</div>` : ''}
                <div class="detail">
                  <span class="label">Date:</span> ${bookingDetails.date}
                </div>
                <div class="detail">
                  <span class="label">Time:</span> ${bookingDetails.timeSlot}
                </div>
                <div class="detail">
                  <span class="label">Type:</span> ${typeDisplay}
                </div>
                ${bookingDetails.message ? `<div class="detail"><span class="label">Message:</span> ${bookingDetails.message}</div>` : ''}
                
                <p style="margin-top: 20px; padding: 15px; background: #fff3cd; border-radius: 5px;">
                  <strong>Action Required:</strong> Log in to the staff dashboard to review and confirm this appointment.
                </p>
              </div>
            </div>
          </body>
        </html>
      `,
    });
    
    console.log(`Staff alert email sent for booking from ${bookingDetails.email}`);
    return { success: true };
  } catch (error) {
    console.error('Error sending staff booking alert:', error);
    return { success: false, error };
  }
}

export async function sendContactFormAlert(
  contactDetails: {
    name: string;
    email: string;
    company?: string;
    message: string;
  }
) {
  try {
    const { client, fromEmail } = await getUncachableResendClient();
    
    await client.emails.send({
      from: fromEmail,
      to: [fromEmail],
      subject: `New Contact Form Submission - ${contactDetails.name}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background-color: #9E3C34; color: white; padding: 20px; text-align: center; }
              .content { background-color: #f9f9f9; padding: 30px; border-radius: 5px; margin-top: 20px; }
              .detail { margin: 10px 0; padding: 10px; background: white; border-left: 3px solid #4B1E1B; }
              .label { font-weight: bold; color: #4B1E1B; display: inline-block; width: 120px; }
              .message-box { margin-top: 15px; padding: 15px; background: white; border: 1px solid #ddd; border-radius: 5px; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1>New Contact Inquiry</h1>
              </div>
              <div class="content">
                <p><strong>A new contact form has been submitted:</strong></p>
                
                <div class="detail">
                  <span class="label">Name:</span> ${contactDetails.name}
                </div>
                <div class="detail">
                  <span class="label">Email:</span> ${contactDetails.email}
                </div>
                ${contactDetails.company ? `<div class="detail"><span class="label">Company:</span> ${contactDetails.company}</div>` : ''}
                
                <div class="message-box">
                  <p><strong>Message:</strong></p>
                  <p>${contactDetails.message.replace(/\n/g, '<br>')}</p>
                </div>
                
                <p style="margin-top: 20px; padding: 15px; background: #fff3cd; border-radius: 5px;">
                  <strong>Action Required:</strong> Log in to the staff dashboard to review and respond to this inquiry.
                </p>
              </div>
            </div>
          </body>
        </html>
      `,
    });
    
    console.log(`Staff alert email sent for contact form from ${contactDetails.email}`);
    return { success: true };
  } catch (error) {
    console.error('Error sending contact form alert:', error);
    return { success: false, error };
  }
}

export async function sendCorporateInquiryConfirmation(
  inquiryDetails: {
    companyName: string;
    contactPerson: string;
    email: string;
  }
) {
  try {
    const { client, fromEmail } = await getUncachableResendClient();
    
    await client.emails.send({
      from: fromEmail,
      to: [inquiryDetails.email],
      subject: `Corporate Health Solutions Inquiry - Sapphire Health Limited`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background-color: #4B1E1B; color: white; padding: 20px; text-align: center; }
              .content { background-color: #f9f9f9; padding: 30px; border-radius: 5px; margin-top: 20px; }
              .contact-info { margin-top: 20px; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1>Thank You for Your Inquiry</h1>
              </div>
              <div class="content">
                <p>Dear ${inquiryDetails.contactPerson},</p>
                <p>Thank you for your interest in Sapphire Health Limited's corporate health solutions for <strong>${inquiryDetails.companyName}</strong>.</p>
                <p>We understand the critical importance of providing comprehensive healthcare services for your workforce, especially in remote and challenging environments.</p>
                <p><strong>What happens next:</strong></p>
                <ul>
                  <li>Our team will review your requirements within the next 24 hours</li>
                  <li>We'll contact you to discuss your specific needs and custom solutions</li>
                  <li>You'll receive a tailored proposal outlining our services and pricing</li>
                </ul>
                
                <div class="contact-info">
                  <p><strong>Need immediate assistance?</strong></p>
                  <p>Phone: +234 806 731 6717</p>
                  <p>We're here to help ensure your team's health and safety.</p>
                </div>
                
                <p style="margin-top: 20px;">Best regards,<br><strong>Sapphire Health Limited</strong><br>Specializing in remote/offsite workforce medical care</p>
              </div>
            </div>
          </body>
        </html>
      `,
    });
    
    console.log(`Corporate inquiry confirmation sent to ${inquiryDetails.email}`);
    return { success: true };
  } catch (error) {
    console.error('Error sending corporate inquiry confirmation:', error);
    return { success: false, error };
  }
}

export async function sendStaffCorporateInquiryAlert(
  inquiryDetails: {
    companyName: string;
    contactPerson: string;
    email: string;
    phone: string;
    employeeCount: string;
    servicesInterested: string[];
    message: string;
  }
) {
  try {
    const { client, fromEmail } = await getUncachableResendClient();
    
    // Lead scoring based on employee count
    const leadPriority = ['200+', '51-200'].includes(inquiryDetails.employeeCount) ? 'HIGH VALUE' : 
                        inquiryDetails.employeeCount === '11-50' ? 'MEDIUM VALUE' : 'STANDARD';
    const priorityColor = leadPriority === 'HIGH VALUE' ? '#d4edda' : 
                         leadPriority === 'MEDIUM VALUE' ? '#fff3cd' : '#f8f9fa';
    
    // Format services
    const serviceMap: Record<string, string> = {
      'onsite-coverage': 'On-Site Medical Coverage',
      'event-medical': 'Event Medical Teams',
      'retainers': 'Corporate Health Retainers',
      'emergency-response': 'Emergency Response Planning',
      'wellness-programs': 'Employee Wellness Programs'
    };
    const services = inquiryDetails.servicesInterested.map(s => serviceMap[s] || s).join(', ');
    
    await client.emails.send({
      from: fromEmail,
      to: [fromEmail],
      subject: `🎯 ${leadPriority} Corporate Lead - ${inquiryDetails.companyName}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background-color: #9E3C34; color: white; padding: 20px; text-align: center; }
              .content { background-color: #f9f9f9; padding: 30px; border-radius: 5px; margin-top: 20px; }
              .detail { margin: 10px 0; padding: 10px; background: white; border-left: 3px solid #4B1E1B; }
              .label { font-weight: bold; color: #4B1E1B; display: inline-block; width: 140px; }
              .priority-badge { padding: 15px; background: ${priorityColor}; border-radius: 5px; margin-bottom: 20px; text-align: center; }
              .message-box { margin-top: 15px; padding: 15px; background: white; border: 1px solid #ddd; border-radius: 5px; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1>🏢 New Corporate Inquiry</h1>
              </div>
              <div class="content">
                <div class="priority-badge">
                  <strong>LEAD PRIORITY: ${leadPriority}</strong>
                </div>
                
                <p><strong>A new corporate health inquiry has been submitted:</strong></p>
                
                <div class="detail">
                  <span class="label">Company:</span> ${inquiryDetails.companyName}
                </div>
                <div class="detail">
                  <span class="label">Contact Person:</span> ${inquiryDetails.contactPerson}
                </div>
                <div class="detail">
                  <span class="label">Email:</span> ${inquiryDetails.email}
                </div>
                <div class="detail">
                  <span class="label">Phone:</span> ${inquiryDetails.phone}
                </div>
                <div class="detail">
                  <span class="label">Employee Count:</span> ${inquiryDetails.employeeCount}
                </div>
                <div class="detail">
                  <span class="label">Services Interested:</span> ${services}
                </div>
                
                <div class="message-box">
                  <p><strong>Message:</strong></p>
                  <p>${inquiryDetails.message.replace(/\n/g, '<br>')}</p>
                </div>
                
                <p style="margin-top: 20px; padding: 15px; background: #ffe5e5; border-radius: 5px;">
                  <strong>⏰ Action Required:</strong> Contact within 24 hours to maximize conversion. Log in to the staff dashboard to manage this lead.
                </p>
              </div>
            </div>
          </body>
        </html>
      `,
    });
    
    console.log(`Staff alert sent for corporate inquiry from ${inquiryDetails.companyName} (${leadPriority})`);
    return { success: true };
  } catch (error) {
    console.error('Error sending staff corporate inquiry alert:', error);
    return { success: false, error };
  }
}
