import { subtitle, title } from "@/components/primitives";
import { cn } from "@/lib/utils";
import { Button } from "@nextui-org/button";
import { Card, CardBody, CardHeader } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import { Link } from "@nextui-org/link";
import { Rocket } from "lucide-react";

export default async function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10 space-y-4 md:space-y-12">
      <Card
        isBlurred
        shadow="lg"
        className="border-none bg-background/60 dark:bg-default-100/50 max-w-full"
      >
        <CardHeader className="justify-between">
          <h2 className={title()}>
            Caroline Vella, Votre coach pour transformer vos aspirations en
            réalisations concrètes
          </h2>
        </CardHeader>
      </Card>
      <Card shadow="lg">
        <CardBody className="overflow-visible p-0 grid grid-cols-1 md:grid-cols-2 gap-16 justify-between items-center">
          <div className="flex flex-col items-center justify-center gap-4">
            <h3 className={cn(subtitle(), "text-center p-3 md:pl-5")}>
              Vous vous sentez débordé(e), vos projets et aspirations passent en
              second plan et finissent par ne jamais dépasser le stade de
              l&apos;intention ou de la to-do list. Avec le coaching, remettez
              la priorité sur vous. Il est temps de clarifier vos objectifs,
              surmonter vos obstacles internes et transformer vos rêves en
              réalité. Ensemble, faisons de chaque étape une avancée vers votre
              succès personnel et professionnel.
            </h3>
            <Link href={"/contact"}>
              <Button
                color="primary"
                className="w-full"
                size="lg"
                endContent={<Rocket />}
              >
                Commençons
              </Button>
            </Link>
          </div>
          <Image
            shadow="sm"
            radius="lg"
            width="100%"
            height="100%"
            alt="photo de Caroline Vella"
            className="w-full object-cover h-[900px]"
            src={`caroline_profile.jpeg`}
          />
        </CardBody>
      </Card>
    </section>
  );
}
