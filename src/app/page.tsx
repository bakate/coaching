import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="fade-in">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
                  Révélez Votre Potentiel
                  <br />
                  avec Caroline Vella
                </h1>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  Coach professionnelle certifiée, je vous accompagne dans votre
                  développement personnel et professionnel avec une approche
                  personnalisée et bienveillante.
                </p>
              </div>
              <div className="relative aspect-[3/4] w-full max-w-md mx-auto lg:max-w-none">
                <Image
                  src="/caroline_profile.jpeg"
                  alt="Caroline Vella - Coach Professionnelle"
                  fill
                  className="object-cover rounded-2xl shadow-lg"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
              <div className="bg-white p-8 rounded-2xl shadow-sm hover-lift border border-gray-100">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Développement Personnel
                </h3>
                <p className="text-gray-600">
                  Découvrez vos forces et développez votre confiance pour
                  atteindre vos objectifs.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-sm hover-lift border border-gray-100">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Coaching Professionnel
                </h3>
                <p className="text-gray-600">
                  Optimisez votre carrière et développez vos compétences de
                  leadership.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-sm hover-lift border border-gray-100">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Accompagnement d'Équipe
                </h3>
                <p className="text-gray-600">
                  Renforcez la cohésion et la performance de vos équipes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
