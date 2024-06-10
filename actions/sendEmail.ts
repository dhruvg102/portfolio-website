'use server';
import React from "react";
import { Resend } from "resend";
import { getErrorMessage, validateString } from "@/libs/utils";
import ContactFormEmail from "@/email/conact-form-email"

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
    const senderEmail = formData.get("senderEmail");
    const message = formData.get("message");


    if (!validateString(senderEmail, 500)) {
        return {
            error: "Invalid Sender Email"
        };
    }
    if (!validateString(message, 5000)) {
        return {
            error: "Invalid Message"
        };
    }

    const { data, error } = await resend.emails.send({
        from: "Contact Form <onboarding@resend.dev>",
        to: "dhruv.gupta1500@gmail.com",
        subject: "Messae from Contact form",
        reply_to: senderEmail as string,
        react: React.createElement(ContactFormEmail, {
            message: message as string,
            senderEmail: senderEmail as string,
        }),
    });

    if (error) {
        return{
            error: getErrorMessage(error),
        }
    }

    return {
        data,
    };
};