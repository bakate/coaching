export default function EntreprisePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="fade-in">
            <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Coaching pour Entreprises
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mb-12 leading-relaxed">
              J'accompagne les entreprises et leurs collaborateurs dans leur développement professionnel et organisationnel.
            </p>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
              <div className="bg-white p-8 rounded-2xl shadow-sm hover-lift border border-gray-100">
                <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                  Services aux Entreprises
                </h2>
                <ul className="space-y-4">
                  <li className="flex items-start space-x-3">
                    <span className="text-blue-500 text-xl">•</span>
                    <span className="text-gray-600">Leadership et management</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-blue-500 text-xl">•</span>
                    <span className="text-gray-600">Cohésion d'équipe</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-blue-500 text-xl">•</span>
                    <span className="text-gray-600">Gestion du changement</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-blue-500 text-xl">•</span>
                    <span className="text-gray-600">Communication interpersonnelle</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-blue-500 text-xl">•</span>
                    <span className="text-gray-600">Performance collective</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white p-8 rounded-2xl shadow-sm hover-lift border border-gray-100">
                <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                  Modalités d'Intervention
                </h2>
                <ul className="space-y-4">
                  <li className="flex items-start space-x-3">
                    <span className="text-blue-500 text-xl">•</span>
                    <span className="text-gray-600">Coaching individuel</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-blue-500 text-xl">•</span>
                    <span className="text-gray-600">Coaching d'équipe</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-blue-500 text-xl">•</span>
                    <span className="text-gray-600">Ateliers collectifs</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-blue-500 text-xl">•</span>
                    <span className="text-gray-600">Séminaires</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}