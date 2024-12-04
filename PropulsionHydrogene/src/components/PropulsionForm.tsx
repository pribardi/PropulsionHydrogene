import React, { useState } from 'react';
import { PropulsionParameters } from '../types/PropulsionTypes';

interface PropulsionFormProps {
  onCalculate: (params: PropulsionParameters) => void;
}

export const PropulsionForm: React.FC<PropulsionFormProps> = ({ onCalculate }) => {
  const [parameters, setParameters] = useState<PropulsionParameters>({
    fuelCellPower: 100,
    hydrogenPressure: 700,
    hydrogenTemperature: 298,
    hydrogenFlowRate: 1.5,
    stackEfficiency: 60,
    coolingPower: 20
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onCalculate(parameters);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setParameters(prev => ({
      ...prev,
      [name]: parseFloat(value)
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded-lg shadow-md">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Puissance pile à combustible (kW)
            <input
              type="number"
              name="fuelCellPower"
              value={parameters.fuelCellPower}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </label>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Pression H2 (bar)
            <input
              type="number"
              name="hydrogenPressure"
              value={parameters.hydrogenPressure}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </label>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Température H2 (K)
            <input
              type="number"
              name="hydrogenTemperature"
              value={parameters.hydrogenTemperature}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </label>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Débit H2 (kg/h)
            <input
              type="number"
              name="hydrogenFlowRate"
              value={parameters.hydrogenFlowRate}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </label>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Rendement pile (%)
            <input
              type="number"
              name="stackEfficiency"
              value={parameters.stackEfficiency}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </label>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Puissance refroidissement (kW)
            <input
              type="number"
              name="coolingPower"
              value={parameters.coolingPower}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </label>
        </div>
      </div>
      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      >
        Calculer
      </button>
    </form>
  );
};