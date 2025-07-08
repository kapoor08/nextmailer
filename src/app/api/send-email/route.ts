import Handlebars from "handlebars";
import { NextRequest, NextResponse } from "next/server";
import { formTemplate } from "@/lib/template/formTemplate";
import nodemailer from "nodemailer";

type FormData = {
  name: string;
  phone: string;
  email: string;
  message: string;
};

export const POST = async (req: NextRequest) => {
  try {
    const { name, phone, email, message }: FormData = await req.json();

    const template = Handlebars.compile(formTemplate);

    const htmlBody = template({
      name,
      phone,
      email,
      message,
    });
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.SMTP_USER as string,
        pass: process.env.SMTP_PASSWORD as string,
      },
      port: 465,
      host: "smtp.gmail.com",
    });

    const mailOptions: nodemailer.SendMailOptions = {
      from: email,
      to: [process.env.SMTP_USER as string, email],
      subject: "New message!!!",
      html: htmlBody,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: "Message sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        status: 500,
        message: "error",
        result: error,
      },
      {
        status: 500,
      }
    );
  }
};
