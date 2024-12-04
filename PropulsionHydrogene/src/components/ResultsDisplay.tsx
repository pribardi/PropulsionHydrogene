import React from 'react';
import { PropulsionResults } from '../types/PropulsionTypes';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface ResultsDisplayProps {
  results: PropulsionResults | null;
}

export const ResultsDisplay: React.FC<ResultsDisplayProps> = ({ results }) => {
  if (!results) return null;

  const chartData = {
    labels: ['Puissance théorique', 'Pertes thermiques', 'Puissance nette'],
    datasets: [
      {
        label: 'Distribution de puissance (kW)',
        data: [results.electricalOutput + results.thermalLoss, results.thermalLoss, results.netPower],
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1
      }
    ]
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Distribution de la puissance'
      }
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md space-y-6">
      <h2 className="text-xl font-bold text-gray-800">Résultats de la simulation</h2>
      
      <div className="grid grid-cols-2 gap-4">
        <div className="p-4 bg-gray-50 rounded-md">
          <h3 className="font-semibold text-gray-700">Puissance nette</h3>
          <p className="text-2xl font-bold text-blue-600">{results.netPower} kW</p>
        </div>
        
        <div className="p-4 bg-gray-50 rounded-md">
          <h3 className="font-semibold text-gray-700">Rendement global</h3>
          <p className="text-2xl font-bold text-green-600">{results.efficiency}%</p>
        </div>
        
        <div className="p-4 bg-gray-50 rounded-md">
          <h3 className="font-semibold text-gray-700">Consommation H2</h3>
          <p className="text-2xl font-bold text-purple-600">{results.hydrogenConsumption} kg/h</p>
        </div>
        
        <div className="p-4 bg-gray-50 rounded-md">
          <h3 className="font-semibold text-gray-700">Pertes thermiques</h3>
          <p className="text-2xl font-bold text-red-600">{results.thermalLoss} kW</p>
        </div>
      </div>

      <div className="mt-6">
        <Line data={chartData} options={options} />
      </div>
    </div>
  );
};