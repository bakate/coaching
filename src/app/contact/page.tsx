"use client";
import { title } from "@/components/primitives";
import { Form, FormField } from "@/components/ui/form";
import { cn } from "@/lib/utils";
import { contactAction } from "@/src/actions/contact.actions";
import { contactFormSchema, contactFormValues } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@nextui-org/button";
import { Card, CardBody, CardHeader } from "@nextui-org/card";
import { Input, Textarea } from "@nextui-org/input";
import { MailIcon, Phone } from "lucide-react";
import { useTransition } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

export default function ContactPage() {
  const [isPending, startTransition] = useTransition();
  const form = useForm<contactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      firstName: "",
      email: "",
      phone: "",
      lastName: "",
      message: "",
      privacy: false,
    },
    mode: "onBlur",
  });

  function onSubmit(data: contactFormValues) {
    startTransition(async () => {
      const res = await contactAction(data);
      if (res.status === "error") {
        toast.error(res.message);
        return;
      }

      toast.success(res.message);
      form.reset();
    });
  }

  return (
    <div className="space-y-4">
      <h1 className={cn(title(), "w-full")}>Contactez-moi !</h1>

      <Card className="max-w-5xl">
        <CardHeader className="justify-between">
          <div className="flex gap-5">
            Renseignez vos coordonnées et je vous recontacterai dans les plus
            brefs délais.
          </div>
        </CardHeader>
        <CardBody className="px-3 pb-5 text-small text-default-400">
          <div className="grid gap-2">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-8"
              >
                <fieldset className="grid gap-3 grid-cols-1 md:grid-cols-2">
                  <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field, fieldState }) => (
                      <Input
                        label="Prénom"
                        type="text"
                        isRequired
                        isInvalid={!!fieldState?.error?.message}
                        errorMessage={fieldState?.error?.message}
                        {...field}
                      />
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field, fieldState }) => (
                      <Input
                        label="Nom"
                        type="text"
                        isRequired
                        isInvalid={!!fieldState?.error?.message}
                        errorMessage={fieldState?.error?.message}
                        {...field}
                      />
                    )}
                  />
                </fieldset>
                <fieldset className="grid gap-3 grid-cols-1 md:grid-cols-2">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field, fieldState }) => (
                      <Input
                        label="E-mail"
                        type="email"
                        isRequired
                        isInvalid={!!fieldState?.error?.message}
                        errorMessage={fieldState?.error?.message}
                        startContent={
                          <MailIcon className="size-4 text-default-400 pointer-events-none flex-shrink-0" />
                        }
                        {...field}
                      />
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field, fieldState }) => (
                      <Input
                        label="N° de téléphone"
                        type="tel"
                        isRequired
                        placeholder="06 12 13 14 15"
                        isInvalid={!!fieldState?.error?.message}
                        errorMessage={fieldState?.error?.message}
                        startContent={
                          <Phone className="size-4 text-default-400 pointer-events-none flex-shrink-0" />
                        }
                        {...field}
                        defaultValue={field.value.trim()}
                      />
                    )}
                  />
                </fieldset>
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field, fieldState }) => (
                    <Textarea
                      label="Message"
                      isRequired
                      placeholder="Votre message"
                      isInvalid={!!fieldState?.error?.message}
                      errorMessage={fieldState?.error?.message}
                      {...field}
                    />
                  )}
                />
                <div className="flex items-center justify-end gap-3">
                  <Button type="button" variant="ghost">
                    Annuler
                  </Button>
                  <Button type="submit" color="primary">
                    Envoyer
                  </Button>
                </div>
              </form>
            </Form>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}
