export interface PropulsionParameters {
  fuelCellPower: number;         // Puissance de la pile à combustible (kW)
  hydrogenPressure: number;      // Pression de l'hydrogène (bar)
  hydrogenTemperature: number;   // Température de l'hydrogène (K)
  hydrogenFlowRate: number;      // Débit d'hydrogène (kg/h)
  stackEfficiency: number;       // Rendement de la pile (%)
  coolingPower: number;         // Puissance de refroidissement (kW)
}

export interface PropulsionResults {
  netPower: number;             // Puissance nette (kW)
  efficiency: number;           // Rendement global (%)
  hydrogenConsumption: number;  // Consommation d'hydrogène (kg/h)
  thermalLoss: number;         // Pertes thermiques (kW)
  electricalOutput: number;    // Sortie électrique (kW)
}