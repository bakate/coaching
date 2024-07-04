import {SVGProps} from "react";
import { z } from "zod";
import isMobilePhone from 'validator/lib/isMobilePhone';

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};


export const contactFormSchema = z.object({
  firstName: z.string().min(2, {
    message: "Le prénom doit avoir au moins 2 caractères.",
  }),
  lastName: z.string().min(2, {
    message: "Le nom de famille doit avoir au moins 2 caractères.",
  }),
  email: z.string().email({
    message: "L'adresse email n'est pas valide.",
  }),
  // we need to add a custom validation to check if the phone number is valid.
  phone: z.string().min(10, {
    message: "Le numéro de téléphone doit avoir au moins 10 caractères.",
  })
  .transform((value)=> value.trim())
  .refine((value) => {
    const regex =  /^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$/;
    return regex.test(value);
  },
  {
    message: "Le numéro de téléphone n'est pas valide.",
  }),
  message: z.string().min(10, {
    message: "Le message doit avoir au moins 10 caractères.",
  }),
  privacy: z.boolean(),

});

export type contactFormValues = z.infer<typeof contactFormSchema>
