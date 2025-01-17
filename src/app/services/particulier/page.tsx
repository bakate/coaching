export default function ParticulierPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="fade-in">
            <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Coaching pour Particuliers
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mb-12 leading-relaxed">
              En tant que coach professionnelle certifiée, je vous accompagne dans votre développement personnel pour atteindre vos objectifs et révéler votre plein potentiel.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              <div className="bg-white p-8 rounded-2xl shadow-sm hover-lift border border-gray-100">
                <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                  Mes Services
                </h2>
                <ul className="space-y-4">
                  <li className="flex items-start space-x-3">
                    <span className="text-blue-500 text-xl">•</span>
                    <span className="text-gray-600">Développement personnel et confiance en soi</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-blue-500 text-xl">•</span>
                    <span className="text-gray-600">Gestion du stress et des émotions</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-blue-500 text-xl">•</span>
                    <span className="text-gray-600">Équilibre vie professionnelle/vie personnelle</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-blue-500 text-xl">•</span>
                    <span className="text-gray-600">Accompagnement au changement</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-blue-500 text-xl">•</span>
                    <span className="text-gray-600">Orientation professionnelle</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white p-8 rounded-2xl shadow-sm hover-lift border border-gray-100">
                <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                  Mon Approche
                </h2>
                <p className="text-gray-600 mb-6">
                  Je propose un accompagnement personnalisé qui s'adapte à vos besoins spécifiques. Ma méthode repose sur l'écoute active, la bienveillance et des outils pratiques pour vous aider à atteindre vos objectifs.
                </p>
                <p className="text-gray-600">
                  Chaque séance est un espace de dialogue constructif où nous travaillons ensemble pour révéler votre potentiel et surmonter les obstacles qui vous empêchent d'avancer.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}