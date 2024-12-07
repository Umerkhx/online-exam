import nodemailer from "nodemailer";
export const transporter = nodemailer.createTransport({
  host: process.env.NEXT_PUBLIC_HOST as string,
  port: process.env.NEXT_PUBLIC_PORTS as unknown as number,
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.NEXT_PUBLIC_USER, // your SMTP username
    pass: process.env.NEXT_PUBLIC_PASSWORD, // your SMTP password
  },
});
  