// ===== ÉNONCÉ (ne pas modifier) =====
const enonce = `
F1 — Ma carte d'apprenant (Niveau 1 — Facile)

Objectif : choisir le bon mot-clé (const ou let) et reconnaître les 5 types primitifs.
Contexte : Kadea prépare les badges de la promo et a besoin de ta fiche.

Consignes :
1. Déclare prenom, age, commune, estInscrit, surnom (sans valeur) et ancienneFormation (valeur null).
2. Choisis const ou let pour chacune et justifie ton choix en commentaire.
3. Affiche ta fiche avec un seul gabarit littéral (une seule chaîne construite par interpolation).
4. Affiche le typeof de chaque variable.

Résultat attendu :
Je m'appelle Grâce, j'ai 22 ans et j'habite à Lemba.
puis : string, number, string, boolean, undefined, object

Recherche (à rédiger dans RECHERCHES.md) :
Pourquoi typeof null renvoie-t-il 'object' alors que null n'est pas un objet ?
`;
// ===== FIN ÉNONCÉ =====

// ✍️ Ton code ici 👇 (règles : const/let, ===, gabarits littéraux, fonctions fléchées, camelCase)

//-----------------------------------------------------
// on commence la declaration de variables let et const
//-----------------------------------------------------

//const est necessaire pour ces variables car ils ont des valeurs par defaut
const prenom = "Grâce";
const age = 22;
const commune = "Lemba";
const estInscrit = true;

// let est nécessaire car la variable est déclarée sans valeur initiale
let surnom;

// La valeur est explicitement définie à null et ne sera pas réassignée
const ancienneFormation = null;

// Affichage de la fiche avec un seul gabarit littéral
console.log(`Je m'appelle ${prenom}, j'ai ${age} ans et j'habite à ${commune}.`);

// Affichage du type de chaque variable
console.log(`puis: ${typeof prenom}, ${typeof age}, ${typeof commune}, ${typeof estInscrit}, ${typeof surnom}, ${typeof ancienneFormation}`);