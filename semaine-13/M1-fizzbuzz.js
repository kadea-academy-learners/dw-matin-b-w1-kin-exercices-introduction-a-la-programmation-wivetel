// ===== ÉNONCÉ (ne pas modifier) =====
const enonce = `
M1 — FizzBuzz kinois (Niveau 2 — Moyen)

Objectif : combiner boucle for, modulo et ordre des conditions.
Contexte : un jeu de rapidité pour réveiller la promo le lundi matin.

Consignes :
1. Parcours les nombres de 1 à 30.
2. Multiple de 3 : affiche Malewa. Multiple de 5 : Wewa. Multiple de 3 et de 5 : MalewaWewa. Sinon, le nombre.
3. Explique en commentaire pourquoi l'ordre de tes conditions est important.

Résultat attendu (15 premiers) :
1, 2, Malewa, 4, Wewa, Malewa, 7, 8, Malewa, Wewa, 11, Malewa, 13, 14, MalewaWewa

Recherche (à rédiger dans RECHERCHES.md) :
Pourquoi FizzBuzz est-il célèbre dans les entretiens d'embauche de développeurs ?
`;
// ===== FIN ÉNONCÉ =====

// ✍️ Ton code ici 👇 (règles : const/let, ===, gabarits littéraux, fonctions fléchées, camelCase)

// debut de mes codes

let resultat = "";
for (let nombre = 1; nombre <= 30; nombre++) {
  let valeur;
  // Le cas multiple de 3 et de 5 doit être vérifié en premier,
  // sinon 15 serait déjà considéré comme un simple multiple de 3 si on commence par chercher que le multiple de 3 avant.
  // et cela affichera directement: Malewa au lieu de MalewaWewa.

  if (nombre % 3 === 0 && nombre % 5 === 0) {
    valeur = "MalewaWewa";
  } else if (nombre % 3 === 0) {
    valeur = "Malewa";
  } else if (nombre % 5 === 0) {
    valeur = "Wewa";
  } else {
    valeur = nombre;
  }

  resultat = `${resultat}${valeur}, `;
}

console.log(resultat);
