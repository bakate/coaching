"use client";

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const formSchema = z.object({
  name: z.string().min(2, "Le nom doit contenir au moins 2 caractères"),
  email: z.string().email("Veuillez entrer une adresse email valide"),
  phone: z.string().min(10, "Veuillez entrer un numéro de téléphone valide"),
  subject: z.string().min(5, "Le sujet doit contenir au moins 5 caractères"),
  message: z.string().min(10, "Le message doit contenir au moins 10 caractères"),
});

type FormData = z.infer<typeof formSchema>;

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<FormData>({
    resolver: zodResolver(formSchema)
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      // Here you would typically send the data to your backend
      console.log(data);
      setSubmitSuccess(true);
      reset();
    } catch (error) {
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="fade-in">
            <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Contact
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mb-12 leading-relaxed">
              Je suis à votre écoute pour discuter de vos besoins en coaching. N'hésitez pas à me contacter pour plus d'informations ou pour prendre rendez-vous.
            </p>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
              <div className="space-y-8">
                <div className="bg-white p-8 rounded-2xl shadow-sm hover-lift border border-gray-100">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center gap-2">
                    <Mail className="h-6 w-6 text-blue-500" />
                    Coordonnées
                  </h2>
                  <ul className="space-y-4">
                    <li className="flex items-center space-x-3">
                      <Mail className="h-5 w-5 text-blue-500" />
                      <span className="text-gray-600">contact@caroline-vella.com</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <Phone className="h-5 w-5 text-blue-500" />
                      <span className="text-gray-600">+33 (0)6 XX XX XX XX</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <MapPin className="h-5 w-5 text-blue-500" />
                      <span className="text-gray-600">Paris, France</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-white p-8 rounded-2xl shadow-sm hover-lift border border-gray-100">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center gap-2">
                    <Clock className="h-6 w-6 text-blue-500" />
                    Horaires
                  </h2>
                  <ul className="space-y-4">
                    <li className="flex items-center space-x-3">
                      <span className="text-blue-500 text-xl">•</span>
                      <span className="text-gray-600">Lundi - Vendredi: 9h00 - 19h00</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <span className="text-blue-500 text-xl">•</span>
                      <span className="text-gray-600">Samedi: Sur rendez-vous</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <span className="text-blue-500 text-xl">•</span>
                      <span className="text-gray-600">Dimanche: Fermé</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                  Formulaire de Contact
                </h2>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Nom complet
                    </label>
                    <input
                      {...register('name')}
                      type="text"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Votre nom"
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <input
                      {...register('email')}
                      type="email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      placeholder="votre@email.com"
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Téléphone
                    </label>
                    <input
                      {...register('phone')}
                      type="tel"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Votre numéro de téléphone"
                    />
                    {errors.phone && (
                      <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                      Sujet
                    </label>
                    <input
                      {...register('subject')}
                      type="text"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Sujet de votre message"
                    />
                    {errors.subject && (
                      <p className="mt-1 text-sm text-red-600">{errors.subject.message}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message
                    </label>
                    <textarea
                      {...register('message')}
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Votre message"
                    />
                    {errors.message && (
                      <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors disabled:opacity-50"
                  >
                    {isSubmitting ? 'Envoi en cours...' : 'Envoyer le message'}
                  </button>

                  {submitSuccess && (
                    <p className="text-green-600 text-center mt-4">
                      Votre message a été envoyé avec succès. Je vous répondrai dans les plus brefs délais.
                    </p>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}