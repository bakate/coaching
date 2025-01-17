"use server";

import { sendEmail } from "@/lib/email";
import { contactFormSchema, type contactFormData } from "@/types/contact.type";

export const contactAction = async (formData: contactFormData) => {
  const validation = await contactFormSchema.safeParse(formData);

  if (!validation.success) {
    return {
      status: "error",
      message: "Please, fix the errors in the form and try again",
    } as const;
  }

  const { email, name, subject, phone, message } = validation.data;

  const usernameCapitalized = "";
  // username.charAt(0).toUpperCase() + username.slice(1);

  const text =
    "Tu viens de recevoir une demande de contact depuis ton site web";
  const html = `
  <div>
  <h1>Nouvelle demande de contact</h1>
  <p>Prénom: ${name}</p>
  <p>Email: ${email}</p>
  <p>Téléphone: ${phone}</p>
  <p>Sujet: ${subject}</p>
  <p>Message: ${message}</p>
  </div>
  `;

  const response = await sendEmail({
    to: "cv.energeia@gmail.com",
    subject: "Nouvelle demande de contact",
    text,
    html,
  });

  if (response.status === "success") {
    return {
      status: "success",
      message: `${name}, j'ai bien reçu votre demande.`,
    } as const;
  } else {
    return {
      status: "error",
      error: response.error,
    } as const;
  }
};
