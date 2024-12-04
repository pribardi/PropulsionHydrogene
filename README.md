# Simulateur de Propulsion à Hydrogène

Un simulateur interactif pour calculer et visualiser les performances des systèmes de propulsion à hydrogène. Cette application permet aux utilisateurs de modifier les paramètres clés et de voir en temps réel l'impact sur les performances du système.

## 🚀 Fonctionnalités

- Simulation en temps réel des performances
- Visualisation graphique des résultats
- Calculs basés sur des principes physiques réels
- Interface utilisateur intuitive et responsive

## 📊 Paramètres de simulation

- **Puissance de la pile à combustible (kW)**
  - Puissance nominale du système
- **Pression H2 (bar)**
  - Pression de l'hydrogène dans le système
- **Température H2 (K)**
  - Température opérationnelle de l'hydrogène
- **Débit H2 (kg/h)**
  - Taux de consommation d'hydrogène
- **Rendement pile (%)**
  - Efficacité de la pile à combustible
- **Puissance refroidissement (kW)**
  - Puissance nécessaire pour le système de refroidissement

## 🔧 Technologies utilisées

- React 18
- TypeScript
- Tailwind CSS
- Chart.js
- Vite

## 🛠️ Installation

1. Clonez le dépôt :
```bash
git clone [url-du-repo]
```

2. Installez les dépendances :
```bash
npm install
```

3. Lancez le serveur de développement :
```bash
npm run dev
```

## 📈 Résultats calculés

Le simulateur fournit les métriques suivantes :

- **Puissance nette (kW)**
  - Puissance effective disponible après pertes
- **Rendement global (%)**
  - Efficacité totale du système
- **Consommation H2 (kg/h)**
  - Consommation réelle d'hydrogène
- **Pertes thermiques (kW)**
  - Énergie perdue sous forme de chaleur

## 🧮 Formules et calculs

Les calculs sont basés sur les principes physiques suivants :

- Pouvoir calorifique de l'hydrogène : 120 MJ/kg
- Constante de Faraday : 96485.3321233100184 C/mol
- Masse molaire de l'hydrogène : 2.01588 g/mol

## 🤝 Contribution

Les contributions sont les bienvenues ! N'hésitez pas à :

1. Fork le projet
2. Créer une branche pour votre fonctionnalité
3. Commiter vos changements
4. Pousser vers la branche
5. Ouvrir une Pull Request

## 📝 License

MIT License - voir le fichier LICENSE pour plus de détails.

## 👥 Contact

Pour toute question ou suggestion, n'hésitez pas à ouvrir une issue dans le projet.
