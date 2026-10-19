// ===== ÉNONCÉ (ne pas modifier) =====
const enonce = `
A1 — Kadea Express v2 : le calculateur de livraison (Niveau 3 — Avancé)

Objectif : écrire une fonction avec paramètre par défaut et plusieurs règles métier, et arrondir un résultat de calcul décimal.
Contexte : Kadea Express livre des colis dans Kinshasa (tarifs fictifs).

Consignes :
1. Écris calculerLivraison(distanceKm, poidsKg, estUrgent = false).
2. Tarif de base : jusqu'à 5 km, 2 000 FC ; jusqu'à 15 km, 4 000 FC ; au-delà, 7 000 FC.
3. Plus de 10 kg : + 1 500 FC. Urgent : tout le montant × 1,5.
4. Ajoute la TVA de 16 % et arrondis à l'entier avec Math.round().

Résultat attendu :
calculerLivraison(3, 2)         -> 2320
calculerLivraison(10, 12, true) -> 9570
calculerLivraison(20, 5)        -> 8120

Recherche (à rédiger dans RECHERCHES.md) :
Pourquoi 0.1 + 0.2 ne donne-t-il pas 0.3 en JavaScript ? Et pourquoi toFixed() est un piège si on veut continuer à calculer ?
`;
// ===== FIN ÉNONCÉ =====

// ✍️ Ton code ici 👇 (règles : const/let, ===, gabarits littéraux, fonctions fléchées, camelCase)

// debut des codes
const calculerLivraison = (distanceKm, poidsKg, estUrgent = false) => {
    let montant;

    // Déterminer le tarif de base selon la distance
    if (distanceKm <= 5) {
        montant = 2000;
    } else if (distanceKm <= 15) {
        montant = 4000;
    } else {
        montant = 7000;
    }

    // Ajouter le supplément pour un colis de plus de 10 kg
    if (poidsKg > 10) {
        montant += 1500;
    }

    // Appliquer le tarif urgent
    if (estUrgent) {
        montant *= 1.5;
    }

    // Ajouter la TVA de 16 %
    montant *= 1.16;

    // Arrondir le résultat à l'entier
    return Math.round(montant);
};

console.log(calculerLivraison(3, 2));
console.log(calculerLivraison(10, 12, true));
console.log(calculerLivraison(20, 5));