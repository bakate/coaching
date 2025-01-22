"use client";

import { zodResolver } from "@hookform/resolvers/zod";

import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

import { contactAction } from "../actions/contact.actions";
import { contactFormSchema, type contactFormData } from "../types/contact.type";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Alert, AlertDescription } from "./ui/alert";

export const ContactForm = () => {
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [isPending, startTransition] = useTransition();

  const form = useForm<contactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
    mode: "onBlur",
  });

  const onSubmit = async (data: contactFormData) => {
    startTransition(async () => {
      const res = await contactAction(data);
      if (res.status === "error") {
        toast.error(res.message);
        return;
      }
      setSubmitSuccess(true);
      form.reset();
    });
  };
  return (
    <Card className="shadow-lg">
      <CardHeader>
        <CardTitle>Formulaire de Contact</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{"Nom complet"}</FormLabel>
                  <FormControl>
                    <Input
                      disabled={isPending}
                      placeholder="Votre nom"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{"Email"}</FormLabel>
                  <FormControl>
                    <Input
                      disabled={isPending}
                      placeholder="votre@email.com"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{"Téléphone"}</FormLabel>
                  <FormControl>
                    <Input
                      disabled={isPending}
                      placeholder="Votre numéro de téléphone"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="subject"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{"Sujet"}</FormLabel>
                  <FormControl>
                    <Input
                      disabled={isPending}
                      placeholder="Sujet de votre message"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{"Message"}</FormLabel>
                  <FormControl>
                    <Textarea
                      rows={4}
                      disabled={isPending}
                      placeholder="Votre message"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button
              type="submit"
              disabled={isPending}
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors disabled:opacity-50"
            >
              {isPending ? "Envoi en cours..." : "Envoyer le message"}
            </Button>
            {submitSuccess && (
              <Alert className="bg-green-50 border-green-200">
                <AlertDescription className="text-green-600">
                  Votre message a été envoyé avec succès. Je vous répondrai dans
                  les plus brefs délais.
                </AlertDescription>
              </Alert>
            )}
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};
