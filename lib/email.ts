// email-service.ts

import nodemailer from 'nodemailer';
import { ResendClient } from 'resend';

const resendClient = new ResendClient(process.env.RESEND_API_KEY);

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: Number(process.env.EMAIL_PORT),
  secure: Boolean(process.env.EMAIL_SECURE),
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

export interface IEmail {
  to: string;
  subject: string;
  text?: string;
  html?: string;
}

export const sendEmail = async (email: IEmail): Promise<void> => {
  try {
    await transporter.sendMail({
      from: process.env.EMAIL_FROM,
      ...email,
    });
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
};

export const sendTransactionalEmail = async (email: IEmail): Promise<void> => {
  try {
    await resendClient.emails.send({
      ...email,
      from: process.env.EMAIL_FROM,
    });
  } catch (error) {
    console.error('Error sending transactional email:', error);
    throw error;
  }
};