import { PropulsionParameters, PropulsionResults } from '../types/PropulsionTypes';

export const calculatePropulsion = (params: PropulsionParameters): PropulsionResults => {
  // Constantes physiques
  const HYDROGEN_HEATING_VALUE = 120; // MJ/kg
  const FARADAY_CONSTANT = 96485.3321233100184; // C/mol
  const HYDROGEN_MOLAR_MASS = 2.01588; // g/mol

  // Calculs de base
  const theoreticalPower = (params.hydrogenFlowRate * HYDROGEN_HEATING_VALUE) / 3.6; // kW
  const actualPower = theoreticalPower * (params.stackEfficiency / 100);
  
  // Pertes thermiques
  const thermalLoss = theoreticalPower - actualPower;
  
  // Puissance nette (après refroidissement)
  const netPower = actualPower - params.coolingPower;
  
  // Rendement global
  const efficiency = (netPower / theoreticalPower) * 100;
  
  // Calcul de la consommation réelle d'hydrogène
  const hydrogenConsumption = params.hydrogenFlowRate * (params.stackEfficiency / 100);

  return {
    netPower: Number(netPower.toFixed(2)),
    efficiency: Number(efficiency.toFixed(2)),
    hydrogenConsumption: Number(hydrogenConsumption.toFixed(3)),
    thermalLoss: Number(thermalLoss.toFixed(2)),
    electricalOutput: Number(actualPower.toFixed(2))
  };
};