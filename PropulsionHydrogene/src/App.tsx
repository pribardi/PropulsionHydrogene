import React, { useState } from 'react';
import { PropulsionForm } from './components/PropulsionForm';
import { ResultsDisplay } from './components/ResultsDisplay';
import { PropulsionParameters, PropulsionResults } from './types/PropulsionTypes';
import { calculatePropulsion } from './utils/propulsionCalculations';

function App() {
  const [results, setResults] = useState<PropulsionResults | null>(null);

  const handleCalculate = (parameters: PropulsionParameters) => {
    const calculatedResults = calculatePropulsion(parameters);
    setResults(calculatedResults);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="max-w-4xl mx-auto space-y-8">
        <header className="text-center">
          <h1 className="text-3xl font-bold text-gray-900">
            Simulateur de Propulsion à Hydrogène
          </h1>
          <p className="mt-2 text-gray-600">
            Entrez les paramètres pour simuler les performances du système
          </p>
        </header>

        <PropulsionForm onCalculate={handleCalculate} />
        
        {results && <ResultsDisplay results={results} />}
      </div>
    </div>
  );
}

export default App;