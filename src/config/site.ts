import { Brain, Mail, MapPin, Target, Users } from "lucide-react";

export const siteConfig = {
  title: "Caroline Vella - Coach Professionnelle",
  description:
    "Coach professionnelle certifiée en France, accompagnement personnalisé pour particuliers et entreprises",
  keywords: [
    "coaching",
    "développement personnel",
    "coaching professionnel",
    "coaching d'équipe",
    "Caroline Vella",
  ],
  author: "Caroline Vella",
  links: {
    url: "https://www.caroline-vella.com",
    linkedin: "https://www.linkedin.com/in/caroline-vella-57ba6b98/",
  },
  image: "/caroline_profile.jpeg",
  privateClientsPage: {
    title: "Coaching pour Particuliers",
    description:
      "En tant que coach professionnelle certifiée, je vous accompagne dans votre développement personnel pour atteindre vos objectifs et révéler votre plein potentiel.",
    services: {
      title: "Mes Services",
      servicesItems: [
        "Développement personnel et confiance en soi",
        "Gestion du stress et des émotions",
        "Équilibre vie professionnelle/vie personnelle",
        "Accompagnement au changement",
        "Orientation professionnelle",
      ],
    },
    approach: {
      title: "Mon Approche",
      texts: [
        "Je propose un accompagnement personnalisé qui s'adapte à vos besoins spécifiques. Ma méthode repose sur l'écoute active, la bienveillance et des outils pratiques pour vous aider à atteindre vos objectifs.",
        "Chaque séance est un espace de dialogue constructif où nous travaillons ensemble pour révéler votre potentiel et surmonter les obstacles qui vous empêchent d'avancer.",
      ],
    },
  },

  corporateClientsPage: {
    title: "Coaching pour Entreprises",
    description:
      "J'accompagne les entreprises et leurs collaborateurs dans leur développement professionnel et organisationnel.",
    services: {
      title: "Mes Services aux Entreprises",
      servicesItems: [
        "Leadership et management",
        "Cohésion d'équipe",
        "Gestion du changement",
        "Communication interpersonnelle",
        "Performance collective",
      ],
    },
    modalities: {
      title: "Modalités d'Intervention",
      modalitiesItems: [
        "Coaching individuel",
        "Coaching d'équipe",
        "Ateliers collectifs",
        "Séminaires",
      ],
    },
  },
  homePage: {
    title: "Activez Votre Potentiel",
    description:
      "Coach professionnelle certifiée, je vous accompagne dans votre développement personnel et professionnel avec une approche sur-mesure.",
    CTA: "Commencez votre voyage",
    mission: {
      title:
        "Un accompagnement pour transformer vos aspirations en actions concrètes",
      paragraphs: [
        "Que vous soyez un particulier à un tournant de votre vie ou une entreprise confrontée à des enjeux stratégiques, le coaching est une clé puissante pour passer de l'intention à l'action et définir une stratégie qui vous ressemble.",
        "C'est une démarche qui permet de clarifier vos priorités, de lever les freins et de poser des bases solides pour un changement durable, aligné avec vos valeurs et respectueux de votre environnement.",
        "Ici, vous trouverez un espace d'écoute où chaque projet devient une opportunité de sens et d'impact.",
        "Ensemble, nous rendons le changement tangible, aligné et durable.",
      ],
    },
    services: [
      {
        title: "Développement Personnel",
        description:
          "Découvrez vos forces et développez votre confiance pour atteindre vos objectifs.",
        icon: Brain,
        CTA: "En savoir plus",
        link: "/services/particulier",
      },
      {
        title: "Coaching Individuel",
        description:
          "Optimisez votre carrière et développez vos compétences de leadership.",
        icon: MapPin,
        CTA: "En savoir plus",
        link: "/services/particulier",
      },
      {
        title: "Accompagnement d'Équipe",
        description: "Renforcez la cohésion et la performance de vos équipes.",
        icon: Users,
        CTA: "En savoir plus",
        link: "/services/entreprise",
      },
      {
        title: "Accompagnement collectif",
        description:
          "Découvrez la puissance de l'intelligence collective pour atteindre vos objectfis individuele.",
        icon: Target,
        CTA: "En savoir plus",
        link: "/services/entreprise",
      },
    ],
    footerCTA: {
      title: "Commencez votre voyage",
      description:
        "Prenez rendez-vous pour une séance de découverte et commencez votre voyage vers l'excellence.",
      link: "/contact",
      CTA: "Contactez-moi",
    },
  },

  contactPage: {
    title: "Contact",
    description:
      "Je suis à votre écoute pour discuter de vos besoins en coaching. N\'hésitez pas à me contacter pour plus d\'informations ou pour prendre rendez-vous",
    infoLabel: "Coordonnées",
    infoItems: [
      {
        label: "cv.energeia@gmail.com",
        icon: Mail,
      },
      {
        label: "Clamart, France",
        icon: MapPin,
      },
    ],
    businessHours: {
      title: "Horaires",
      weekDescription: "Lundi - Vendredi: 9h00 - 19h00",
      saturdayDescription: "Samedi: Sur rendez-vous",
    },
  },
} as const;

export type SiteConfig = typeof siteConfig;
