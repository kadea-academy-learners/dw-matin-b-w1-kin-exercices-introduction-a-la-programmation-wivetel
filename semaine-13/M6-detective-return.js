// ===== ÉNONCÉ (ne pas modifier) =====
const enonce = `
M6 — Le détective du return (Niveau 2 — Moyen)

Objectif : distinguer return et console.log() et traquer les undefined.

Consignes : chacune des trois fonctions de la zone de travail a un bug.
Trouve-le, explique-le en commentaire, corrige-le.

Code fourni :
const doubler = (n) => { n * 2; };
console.log(doubler(4));           // undefined ?!

const calculerTva = (prix) => { console.log(prix * 0.16); };
const total = calculerTva(1000) + 500;
console.log(total);                // NaN ?!

const saluer = (prenom) => {
  return
    \`Mbote \${prenom}\`;
};
console.log(saluer('Ney'));        // undefined ?!

Résultat attendu après correction :
8, 660, Mbote Ney

Recherche (à rédiger dans RECHERCHES.md) :
Le troisième bug vient de l'« insertion automatique de point-virgule » (ASI). Explique ce mécanisme en 3 lignes.
`;
// ===== FIN ÉNONCÉ =====

// ✍️ Ton code ici 👇 (règles : const/let, ===, gabarits littéraux, fonctions fléchées, camelCase)

/*
const doubler = (n) => { n * 2; };
console.log(doubler(4)); // undefined

const calculerTva = (prix) => { console.log(prix * 0.16); };
const total = calculerTva(1000) + 500;
console.log(total); // NaN

const saluer = (prenom) => {
    return
        `Mbote ${prenom}`;
};
console.log(saluer("Ney")); // undefined
*/


// Debut des codes

// Bug 1 : n * 2 était calculé mais pas retourné.
// Avec les accolades, il faut utiliser return.
const doubler = (n) => {
    return n * 2;
};

console.log(doubler(4));


// Bug 2 : console.log() affichait la TVA mais ne la retournait pas.
// return permet de récupérer le résultat pour calculer le total.
const calculerTva = (prix) => {
    return prix * 0.16;
};

const total = calculerTva(1000) + 500;
console.log(total);


// Bug 3 : le retour à la ligne après return provoquait l'ASI.
// JavaScript considérait alors return comme terminé.
const saluer = (prenom) => {
    return `Mbote ${prenom}`;
};

console.log(saluer("Ney"));