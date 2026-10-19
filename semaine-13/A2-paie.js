// ===== ÉNONCÉ (ne pas modifier) =====
const enonce = `
A2 — Le moteur de paie v2 (Niveau 3 — Avancé)

Objectif : parcourir un tableau avec .forEach(), accumuler un total et appliquer une règle d'heures supplémentaires.
Contexte : Kadea Tech paie ses techniciens 2 500 FC de l'heure ; au-delà de 40 h par semaine, chaque heure est payée 1,5 fois.

Consignes :
1. Pars de const heuresSemaine = [8, 9, 10, 8, 7, 6]; (du lundi au samedi).
2. Calcule le total des heures avec .forEach() et un accumulateur.
3. Écris calculerSalaire(heures, tauxHoraire = 2500) qui gère les heures supplémentaires.
4. Avec une boucle for, trouve le jour le plus chargé.

Résultat attendu :
Total : 48 h — Salaire : 130000 FC ; jour le plus chargé : mercredi (10 h).

Recherche (à rédiger dans RECHERCHES.md) :
La méthode .reduce() n'a pas été vue en atelier. Explique ce qu'elle fait et réécris l'étape 2 avec elle.
`;
// ===== FIN ÉNONCÉ =====

// ✍️ Ton code ici 👇 (règles : const/let, ===, gabarits littéraux, fonctions fléchées, camelCase)

// debut des codes
const heuresSemaine = [8, 9, 10, 8, 7, 6];
const jours = ["lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"];

// Calcul du total des heures avec forEach() et un accumulateur
let totalHeures = 0;

heuresSemaine.forEach((heures) => {
    totalHeures += heures;
});

// Calcul du salaire avec gestion des heures supplémentaires
const calculerSalaire = (heures, tauxHoraire = 2500) => {
    if (heures <= 40) {
        return heures * tauxHoraire;
    }

    const heuresSupplementaires = heures - 40;
    const salaireNormal = 40 * tauxHoraire;
    const salaireSupplementaire = heuresSupplementaires * tauxHoraire * 1.5;

    return salaireNormal + salaireSupplementaire;
};

const salaire = calculerSalaire(totalHeures);

// Recherche du jour le plus chargé avec une boucle for
let indexJourCharge = 0;

for (let i = 1; i < heuresSemaine.length; i++) {
    if (heuresSemaine[i] > heuresSemaine[indexJourCharge]) {
        indexJourCharge = i;
    }
}

console.log( `Total : ${totalHeures} h — Salaire : ${salaire} FC ; jour le plus chargé : ${jours[indexJourCharge]} (${heuresSemaine[indexJourCharge]} h).`);
