# RECHERCHES — Semaine 13

> Pour chaque exercice : reformule avec tes mots (pas de copier-coller), ajoute un test que tu as exécuté toi-même,
> et cite une source précise (une page, pas juste « Google »). MDN en français est la référence.
> Si tu as utilisé une IA, indique ton prompt et vérifie sa réponse sur MDN.
> Ne modifie pas les titres `## F1 — …` : ils servent à l'évaluation automatique.

## F1 — Ma carte d'apprenant

**Question :** Pourquoi typeof null renvoie-t-il 'object' alors que null n'est pas un objet ?

**Ma réponse (avec mes mots, 3 à 5 lignes) :**

`null` représente l'absence volontaire d'une valeur en JavaScript.
Pourtant, lorsque j'utilise `typeof null`, JavaScript retourne `"object"`.
Ce comportement vient d'une ancienne particularité de JavaScript qui a été conservée pour des raisons de compatibilité.
Donc `null` n'est pas réellement un objet, même si `typeof` affiche `"object"`.

**Mon test dans la console :**

```js
const ancienneFormation = null;

console.log(typeof ancienneFormation);
// Résultat : object

console.log(ancienneFormation === null);
// Résultat : true

**Source :** MDN Web Docs — `typeof` : https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Operators/typeof

**IA utilisée ? (prompt + vérification sur MDN) :** Oui — Prompt : « Pourquoi `typeof null` renvoie-t-il `"object"` alors que `null` n'est pas un objet ? » Réponse vérifiée sur MDN Web Docs (`typeof`).

## F2 — Le convertisseur de saisie

**Question :** Qu'est-ce que NaN, et pourquoi NaN === NaN renvoie false ? Quelle fonction utiliser pour le détecter ?

**Ma réponse (avec mes mots, 3 à 5 lignes) :** 

...

**Mon test dans la console :**

```js
// colle ici le test que tu as exécuté et le résultat obtenu
```
const resultat = Number("abc");
console.log(resultat);
> NaN

console.log(NaN === NaN);
> false

console.log(Number.isNaN(resultat));
> true

**Source :** 

Tu peux consulter la source ici : [MDN — Number.isNaN()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Number/isNaN)

Ensuite, **avant le commit**, teste ton fichier F2 avec Node. Si tu obtiens bien `2500500`, `3000`, `0`, `NaN`, `42`, `1`, F2 sera prêt à être commité.

**IA utilisée ? (prompt + vérification sur MDN) :** Oui — Prompt : « Qu'est-ce que NaN, pourquoi NaN === NaN retourne false et quelle fonction permet de détecter NaN ? » Réponse vérifiée sur MDN Web Docs.

## F3 — Pair ou impair : le tirage des tickets

**Question :** Que renvoie -7 % 2 ? Déduis-en pourquoi il vaut mieux tester % 2 !== 0 plutôt que % 2 === 1 pour détecter un nombre impair.

**Ma réponse (avec mes mots, 3 à 5 lignes) :**

`-7 % 2` renvoie `-1`.
Un nombre impair positif peut avoir un reste de `1`, mais un nombre impair négatif peut avoir un reste de `-1`.
Donc tester `nombre % 2 === 1` ne fonctionne pas correctement avec tous les nombres négatifs.
Il vaut mieux utiliser `nombre % 2 !== 0` pour détecter un nombre impair.
...

**Mon test dans la console :**

```js
// colle ici le test que tu as exécuté et le résultat obtenu
```
const numeroTicket = 17;
if (numeroTicket % 2 === 0) {
    console.log(`Ticket ${numeroTicket} : pair, tu gagnes un tote bag.`);
} else {
    console.log(`Ticket ${numeroTicket} : impair, tu gagnes un stylo.`);
}
> "Ticket 17 : impair, tu gagnes un stylo."

const numeroTicket = 24;
if (numeroTicket % 2 === 0) {
    console.log(`Ticket ${numeroTicket} : pair, tu gagnes un tote bag.`);
} else {
    console.log(`Ticket ${numeroTicket} : impair, tu gagnes un stylo.`);
}
> "Ticket 24 : pair, tu gagnes un tote bag."

const numeroTicket = 0;
if (numeroTicket % 2 === 0) {
    console.log(`Ticket ${numeroTicket} : pair, tu gagnes un tote bag.`);
} else {
    console.log(`Ticket ${numeroTicket} : impair, tu gagnes un stylo.`);
}
> "Ticket 0 : pair, tu gagnes un tote bag."

**Source :** 
La documentation officielle est ici : [MDN — opérateur reste (%)](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Operators/Remainder)

**IA utilisée ? (prompt + vérification sur MDN) :** Oui — Prompt : « Que renvoie -7 % 2 et pourquoi vaut-il mieux utiliser % 2 !== 0 pour détecter un nombre impair ? » Réponse vérifiée sur MDN Web Docs.

## F4 — Le contrôleur du bus

**Question :** Peut-on enchaîner plusieurs ternaires ? Pourquoi est-ce souvent déconseillé ?

**Ma réponse (avec mes mots, 3 à 5 lignes) :**

...

Oui, il est possible d'enchaîner plusieurs opérateurs ternaires en JavaScript.
Cependant, plusieurs ternaires imbriqués peuvent rendre le code difficile à lire et à comprendre.
Le ternaire est surtout pratique pour une condition simple avec deux résultats.
Pour plusieurs conditions, je préfère utiliser `if / else if / else` afin de garder le code plus clair.

**Mon test dans la console :**

```js
// colle ici le test que tu as exécuté et le résultat obtenu
```
const age = 16;

// Détermination du statut selon l'âge avec un ternaire
const statut = age >= 18 ? "majeur" : "mineur";

// Détermination du tarif selon la tranche d'âge
let tarif;

if (age < 5) {
    tarif = 0;
} else if (age < 18) {
    tarif = 500;
} else {
    tarif = 1000;
}

// Résultat attendu
console.log(`Statut : ${statut} — Tarif : ${tarif} FC`);

> "Statut : mineur — Tarif : 500 FC"

**Source :** 
Source officielle : [MDN — opérateur conditionnel (ternaire)](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Operators/Conditional_operator)

**IA utilisée ? (prompt + vérification sur MDN) :** Oui — Prompt : « Peut-on enchaîner plusieurs opérateurs ternaires en JavaScript et pourquoi est-ce souvent déconseillé ? » Réponse vérifiée sur MDN Web Docs.

## F5 — Ma première fonction fléchée

**Question :** Quand peut-on enlever les parenthèses autour des paramètres, et quand peut-on enlever return et les accolades ?

**Ma réponse (avec mes mots, 3 à 5 lignes) :**

...
Avec une fonction fléchée, on peut enlever les parenthèses lorsqu’il y a un seul paramètre.
S’il n’y a aucun paramètre, les parenthèses sont obligatoires, et elles le sont aussi lorsqu’il y a plusieurs paramètres.
On peut également enlever return et les accolades lorsque la fonction contient une seule expression à retourner.
Par contre, avec plusieurs instructions, il faut garder les accolades et utiliser return si on veut retourner une valeur.

**Mon test dans la console :**

```js
// colle ici le test que tu as exécuté et le résultat obtenu
```
// Version classique donnée dans l'énoncé
function saluerClassique(prenom) {
    return "Mbote " + prenom + " !";
}

// Version fléchée avec un gabarit littéral comme demandée dans l'énoncé
const saluer = prenom => `Mbote ${prenom} !`;

// Fonction fléchée qui retourne le carré d'un nombre
const carre = nombre => nombre * nombre;

// Affichage des résultats
console.log(`${saluer("Lys")} puis ${carre(7)}`);

> Mbote Lys ! puis 49

**Source :** 

MDN Web Docs — Fonctions fléchées: https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Functions/Arrow_functions

**IA utilisée ? (prompt + vérification sur MDN) :** Oui — Prompt : « Quand peut-on enlever les parenthèses autour des paramètres d'une fonction fléchée, et quand peut-on enlever return et les accolades ? » Réponse vérifiée sur MDN Web Docs.

## F6 — Le compte à rebours

**Question :** À quoi sert le mot-clé continue ? Quelle différence avec break ?

**Ma réponse (avec mes mots, 3 à 5 lignes) :**

...
Le mot-clé continue permet de sauter le tour actuel d'une boucle et de passer directement au tour suivant.
Par exemple, je peux l'utiliser pour ne pas afficher le nombre 5 sans arrêter le compte à rebours.
break, par contre, arrête complètement l'exécution de la boucle.
Donc continue poursuit la boucle, tandis que break y met fin.


**Mon test dans la console :**

```js
// colle ici le test que tu as exécuté et le résultat obtenu
```
let resultat = "";

for (let nombre = 10; nombre >= 1; nombre--) {
    if (nombre === 5) {
        continue;
    }

    resultat += `${nombre}, `;
}

console.log(`${resultat}Décollage !`);

> 10, 9, 8, 7, 6, 4, 3, 2, 1, Décollage !

**Source :** source la documentation officielle : MDN — continue et MDN — break

https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Statements/continue

https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Statements/break

**IA utilisée ? (prompt + vérification sur MDN) :** Oui — Prompt : « À quoi sert continue en JavaScript et quelle est la différence avec break ? » Réponse vérifiée sur MDN Web Docs.

## M1 — FizzBuzz kinois

**Question :** Pourquoi FizzBuzz est-il célèbre dans les entretiens d'embauche de développeurs ?

**Ma réponse (avec mes mots, 3 à 5 lignes) :**

...
FizzBuzz est célèbre dans les entretiens parce que c'est un exercice simple qui permet de vérifier les bases de la programmation.
Il permet de voir si le candidat maîtrise les boucles, les conditions et l'opérateur modulo.
Il permet aussi de vérifier comment le développeur organise sa logique, notamment l'ordre de ses conditions.
Malgré sa simplicité, il permet donc d'évaluer rapidement la compréhension des notions fondamentales.

**Mon test dans la console :**

```js
// colle ici le test que tu as exécuté et le résultat obtenu
ilet resultat = "";
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

```
> 1, 2, Malewa, 4, Wewa, Malewa, 7, 8, Malewa, Wewa, 11, Malewa, 13, 14, MalewaWewa, 16, 17, Malewa, 19, Wewa, Malewa, 22, 23, Malewa, Wewa, 26, Malewa, 28, 29, MalewaWewa,
**Source :** 
Pour la source technique sur `%` : [MDN — Opérateur reste (%)](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Operators/Remainder.

**Petite remarque :** MDN explique bien le modulo et les notions JavaScript utilisées dans FizzBuzz, mais ce n'est pas vraiment une source sur **l'histoire de FizzBuzz dans les entretiens**. Donc si ton exercice exige une source précise sur cette question, on peut choisir une source plus directement adaptée.

**IA utilisée ? (prompt + vérification sur MDN) :** Oui — Prompt : « Pourquoi FizzBuzz est-il célèbre dans les entretiens d'embauche de développeurs ? » Réponse vérifiée avec la documentation MDN sur les notions utilisées.

## M2 — Le distributeur automatique (DAB)

**Question :** Comment afficher 75000 sous la forme 75 000 avec toLocaleString() ?

**Ma réponse (avec mes mots, 3 à 5 lignes) :**

...
La méthode `toLocaleString()` permet de formater un nombre selon les règles d'une langue ou d'un pays.
En utilisant la locale française `fr-FR`, les milliers sont séparés par un espace.
Ainsi, le nombre `75000` peut être affiché sous la forme `75 000`.
Cette méthode change seulement l'affichage du nombre et non sa valeur.

**Mon test dans la console :**

```js
// colle ici le test que tu as exécuté et le résultat obtenu
```
const retirer = (solde, montant) => {
    // Vérification du montant demandé
    if (montant < 0 || montant % 5000 !== 0) {
        return `Montant invalide : multiples de 5 000 FC uniquement`;
    }

    // Vérification du plafond de retrait
    if (montant > 500000) {
        return `Plafond dépassé : 500 000 FC maximum`;
    }

    // Vérification du solde disponible
    if (montant > solde) {
        return `Solde insuffisant`;
    }

    // Calcul du nouveau solde
    const nouveauSolde = solde - montant;

    return `Retrait accepté. Nouveau solde : ${nouveauSolde} FC`;
};

console.log(retirer(100000, 25000));
console.log(retirer(100000, 12000));
console.log(retirer(1000000, 600000));
console.log(retirer(20000, 50000));

> Retrait accepté. Nouveau solde : 75000 FC
> Montant invalide : multiples de 5 000 FC uniquement
> Plafond dépassé : 500 000 FC maximum
> Solde insuffisant

**Source :** 
La documentation correspondante est [MDN — Number.prototype.toLocaleString()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Number/toLocaleString).

### Attention pour ton code M2

La recherche te fait découvrir `toLocaleString()`, mais le **résultat attendu du programme** demande :

```text id="zc8ru7"
Retrait accepté. Nouveau solde : 75000 FC

**IA utilisée ? (prompt + vérification sur MDN) :** Oui — Prompt : « Comment afficher 75000 sous la forme 75 000 avec toLocaleString() en JavaScript ? » Réponse vérifiée sur MDN Web Docs.

## M3 — Le détecteur de champs vides (Truthy / Falsy)

**Question :** Quelle est la liste complète des valeurs falsy en JavaScript ? (Indice : il y en a plus que dans cet exercice.)

**Ma réponse (avec mes mots, 3 à 5 lignes) :**

...
Une valeur falsy est une valeur que JavaScript considère comme fausse lorsqu'elle est utilisée dans une condition.
Les valeurs falsy sont `false`, `0`, `-0`, `0n`, `""`, `null`, `undefined` et `NaN`.
Il existe aussi `document.all`, qui est un cas particulier historique utilisé dans les navigateurs.
Les autres valeurs sont truthy, même `"0"` et `" "` qui sont des chaînes de caractères non vides.

**Mon test dans la console :**

```js
// colle ici le test que tu as exécuté et le résultat obtenu
```
const estRempli = valeur => valeur ? "rempli" : "vide";

console.log(`${estRempli("")}, ${estRempli("Esther")}, ${estRempli(0)}, ${estRempli(42)}, ${estRempli(null)}, ${estRempli(undefined)}, ${estRempli(NaN)}, ${estRempli(" ")}, ${estRempli("0")}, ${estRempli(false)}`);

> vide, rempli, vide, rempli, vide, vide, vide, rempli, rempli, vide

**Source :** https://developer.mozilla.org/fr/docs/Glossary/Falsy

**IA utilisée ? (prompt + vérification sur MDN) :** Oui — Prompt : « Quelle est la liste complète des valeurs falsy en JavaScript ? » Réponse vérifiée sur MDN Web Docs.

## M4 — Le score par défaut : || contre ??

**Question :** Que fait l'opérateur ?? (coalescence des nuls) et en quoi est-il différent de || ?

**Ma réponse (avec mes mots, 3 à 5 lignes) :**

...
L'opérateur `??` permet d'utiliser une valeur par défaut lorsque la valeur de gauche est `null` ou `undefined`.
L'opérateur `||`, lui, utilise la valeur par défaut lorsque la valeur de gauche est falsy.
Avec `||`, des valeurs valides comme `0`, `false` ou `""` peuvent donc être remplacées.
Avec `??`, ces valeurs sont conservées car elles ne sont ni `null` ni `undefined`.

**Mon test dans la console :**

```js
// colle ici le test que tu as exécuté et le résultat obtenu
```
// Première version avec || : elle contient un problème avec le score 0
const afficherScoreBug = score => `Score : ${score || "aucun"}`;

console.log(`${afficherScoreBug(15)}, ${afficherScoreBug(0)}, ${afficherScoreBug(undefined)}`);

// Version corrigée avec ??
const afficherScore = score => `Score : ${score ?? "aucun"}`;

console.log(`${afficherScore(15)}, ${afficherScore(0)}, ${afficherScore(undefined)}`);

// Bonus : le message s'affiche uniquement si estConnecte est truthy
const estConnecte = true;

estConnecte && console.log(`Bienvenue !`);

> Score : 15, Score : aucun, Score : aucun
> Score : 15, Score : 0, Score : aucun
> Bienvenue !

**Source :** 
La source officielle est [MDN — Opérateur de coalescence des nuls (??)](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing).

**IA utilisée ? (prompt + vérification sur MDN) :** Oui — Prompt : « Que fait l'opérateur ?? en JavaScript et quelle est la différence avec || ? »
Réponse vérifiée sur MDN Web Docs.

## M5 — La vitre teintée (portée de bloc)

**Question :** Pourquoi var est-il banni du code moderne ? Cherche ce que sont la portée de fonction et le « hoisting ».

**Ma réponse (avec mes mots, 3 à 5 lignes) :**

...
`var` est généralement évité dans le code JavaScript moderne car il a une portée de fonction et non une portée de bloc comme `let` et `const`.
Une variable déclarée avec `var` dans un bloc `if` peut donc rester accessible en dehors de ce bloc, ce qui peut provoquer des erreurs difficiles à repérer.
De plus, les déclarations avec `var` sont remontées au début de leur portée par le mécanisme appelé hoisting.
Aujourd'hui, on préfère `const` par défaut et `let` lorsqu'une variable doit être réassignée.


**Mon test dans la console :**

```js
// colle ici le test que tu as exécuté et le résultat obtenu
```

const ville = "Kinshasa";

if (true) {
    const commune = "Gombe";
    console.log(ville);
    console.log(commune);
}

const afficher = () => {
    const secret = "pondu";
    return secret;
};

console.log(afficher());

> Kinshasa
> Gombe
> pondu

**Source :** 
La source officielle : [MDN — var](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Statements/var)

**IA utilisée ? (prompt + vérification sur MDN) :** Oui — Prompt : « Pourquoi var est-il évité en JavaScript moderne ? Explique la portée de fonction et le hoisting. »

## M6 — Le détective du return

**Question :** Le troisième bug vient de l'« insertion automatique de point-virgule » (ASI). Explique ce mécanisme en 3 lignes.

**Ma réponse (avec mes mots, 3 à 5 lignes) :**

...
L'ASI (Automatic Semicolon Insertion) est un mécanisme par lequel JavaScript peut ajouter automatiquement des points-virgules à certains endroits du code.
Lorsqu'on met un retour à la ligne juste après `return`, JavaScript peut considérer l'instruction comme terminée et interpréter cela comme `return;`.
La fonction retourne alors `undefined`, c'est pourquoi il faut placer la valeur à retourner sur la même ligne que `return`.


**Mon test dans la console :**

```js
// colle ici le test que tu as exécuté et le résultat obtenu
```
const doubler = (n) => {
    return n * 2;
};

console.log(doubler(4));


const calculerTva = (prix) => {
    return prix * 0.16;
};

const total = calculerTva(1000) + 500;
console.log(total);


const saluer = (prenom) => {
    return `Mbote ${prenom}`;
};

console.log(saluer("Ney"));

> 8
> 660
> Mbote Ney

**Source :** 

[MDN — Automatic semicolon insertion](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#automatic_semicolon_insertion)

**IA utilisée ? (prompt + vérification sur MDN) :** Oui — Prompt : « Explique l'insertion automatique de point-virgule (ASI) en JavaScript et son effet lorsqu'un retour à la ligne est placé après return. »

## M7 — La tirelire numérique

**Question :** Cite tous les opérateurs d'affectation composée (+=, -=…) et donne un exemple pour chacun.

**Ma réponse (avec mes mots, 3 à 5 lignes) :**

...
Les opérateurs d'affectation composée permettent de modifier une variable en utilisant sa valeur actuelle.
Par exemple, `total += 2000` est une écriture plus courte de `total = total + 2000`.

- `+=` : addition → `x += 2`
- `-=` : soustraction → `x -= 2`
- `*=` : multiplication → `x *= 2`
- `/=` : division → `x /= 2`
- `%=` : reste de division → `x %= 2`
- `**=` : puissance → `x **= 2`
- `<<=` : décalage binaire à gauche → `x <<= 1`
- `>>=` : décalage binaire à droite → `x >>= 1`
- `>>>=` : décalage binaire à droite non signé → `x >>>= 1`
- `&=` : ET binaire → `x &= 3`
- `^=` : OU exclusif binaire → `x ^= 3`
- `|=` : OU binaire → `x |= 3`
- `&&=` : affectation ET logique → `x &&= 10`
- `||=` : affectation OU logique → `x ||= 10`
- `??=` : affectation si null ou undefined → `x ??= 10`

**Mon test dans la console :**

```js
// colle ici le test que tu as exécuté et le résultat obtenu
```
let total = 0;

const epargneHebdomadaire = 2000;
const bonus = 1000;

for (let semaine = 1; semaine <= 12; semaine++) {
    // Patience épargne 2 000 FC chaque semaine
    total += epargneHebdomadaire;

    // Toutes les 4 semaines, sa tante ajoute un bonus de 1 000 FC
    if (semaine % 4 === 0) {
        total += bonus;
        console.log(`Semaine ${semaine} : ${total} FC (bonus !)`);
    } else {
        console.log(`Semaine ${semaine} : ${total} FC`);
    }
}

console.log(`Total après 12 semaines : ${total} FC`);

> Semaine 1 : 2000 FC
> Semaine 2 : 4000 FC
> Semaine 3 : 6000 FC
> Semaine 4 : 9000 FC (bonus !)
> Semaine 5 : 11000 FC
> Semaine 6 : 13000 FC
> Semaine 7 : 15000 FC
> Semaine 8 : 18000 FC (bonus !)
> Semaine 9 : 20000 FC
> Semaine 10 : 22000 FC
> Semaine 11 : 24000 FC
> Semaine 12 : 27000 FC (bonus !)
> Total après 12 semaines : 27000 FC


**Source :** 
[MDN — Opérateurs d'affectation](https://developer.mozilla.org/fr/docs/Web/JavaScript/Guide/Expressions_and_operators#op%C3%A9rateurs_daffectation)

**IA utilisée ? (prompt + vérification sur MDN) :** Oui — Prompt : « Quels sont les opérateurs d'affectation composée en JavaScript ? Donne un exemple pour chacun. »

## M8 — La batterie qui se décharge

**Question :** Quelle est la différence entre while et do...while ? Que donnerait l'étape 4 avec un do...while ?

**Ma réponse (avec mes mots, 3 à 5 lignes) :**

...
La boucle `while` vérifie la condition avant d'exécuter son bloc de code.
La boucle `do...while` exécute d'abord le bloc une fois, puis vérifie la condition.
Ainsi, avec une batterie qui commence à 15 %, `while` fait 0 tour car `15 > 20` est faux dès le départ.
Avec `do...while`, la boucle ferait quand même 1 tour avant de vérifier la condition.

**Mon test dans la console :**

```js
// colle ici le test que tu as exécuté et le résultat obtenu
```
let batterie = 100;
let heures = 0;

while (batterie > 20) {
    batterie -= 15;
    heures += 1;
}

console.log(`Après ${heures} h, batterie à ${batterie} % : branche ton téléphone !`);

> Après 6 h, batterie à 10 % : branche ton téléphone !

**Source :**

while :
https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Statements/while

do...while :
https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Statements/do...while

**IA utilisée ? (prompt + vérification sur MDN) :** non

## A1 — Kadea Express v2 : le calculateur de livraison

**Question :** Pourquoi 0.1 + 0.2 ne donne-t-il pas 0.3 en JavaScript ? Et pourquoi toFixed() est un piège si on veut continuer à calculer ?

**Ma réponse (avec mes mots, 3 à 5 lignes) :**

...
JavaScript représente les nombres décimaux en binaire et certains nombres comme `0.1` et `0.2` ne peuvent pas être représentés exactement.
C'est pourquoi `0.1 + 0.2` peut donner `0.30000000000000004` au lieu de exactement `0.3`.
`toFixed()` permet d'arrondir l'affichage à un nombre de décimales choisi, mais il retourne une chaîne de caractères (`string`).
C'est donc un piège si on veut continuer à faire des calculs sans reconvertir le résultat en nombre.


**Mon test dans la console :**

```js
// colle ici le test que tu as exécuté et le résultat obtenu
```
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

> 2320
> 9570
> 8120

**Source :** 

Voici les liens exacts de MDN :
Pour comprendre les nombres en JavaScript (0.1 + 0.2) :
https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Number
Pour toFixed() :
https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed
Pour Math.round() :
https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Math/round

**IA utilisée ? (prompt + vérification sur MDN) :** Oui — Prompt : « Pourquoi 0.1 + 0.2 ne donne-t-il pas exactement 0.3 en JavaScript et pourquoi toFixed() peut-il poser problème pour continuer des calculs ? »

## A2 — Le moteur de paie v2

**Question :** La méthode .reduce() n'a pas été vue en atelier. Explique ce qu'elle fait et réécris l'étape 2 avec elle.

**Ma réponse (avec mes mots, 3 à 5 lignes) :**

...
La méthode `.reduce()` parcourt les éléments d'un tableau pour les combiner et obtenir une seule valeur finale.
Elle utilise un accumulateur qui conserve le résultat obtenu après chaque élément parcouru.
Par exemple, elle peut servir à calculer la somme de toutes les heures d'un tableau.
Elle permet donc ici de remplacer le `.forEach()` et l'accumulateur `totalHeures`.

**Mon test dans la console :**

```js
// colle ici le test que tu as exécuté et le résultat obtenu
```
const heuresSemaine = [8, 9, 10, 8, 7, 6];
const jours = ["lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"];

// Étape 2 : calcul du total avec forEach() comme demandé dans la consigne
let totalHeures = 0;

heuresSemaine.forEach((heures) => {
    totalHeures += heures;
});

// Recherche : réécriture de l'étape 2 avec reduce()
const totalHeuresReduce = heuresSemaine.reduce((total, heures) => {
    return total + heures;
}, 0);

// Calcul du salaire avec les heures supplémentaires
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

// Résultat principal demandé
console.log(
    `Total : ${totalHeures} h — Salaire : ${salaire} FC ; jour le plus chargé : ${jours[indexJourCharge]} (${heuresSemaine[indexJourCharge]} h).`
);

// Vérification de la réécriture avec reduce()
console.log(`Total avec reduce() : ${totalHeuresReduce} h`);

> Total : 48 h — Salaire : 130000 FC ; jour le plus chargé : mercredi (10 h).
> Total avec reduce() : 48 h

**Source :** 
https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce

**IA utilisée ? (prompt + vérification sur MDN) :** Oui — Prompt : « Que fait la méthode reduce() en JavaScript et comment l'utiliser pour calculer le total des valeurs d'un tableau ? »

## A3 — L'inventaire en console

**Question :** Comment afficher seulement les colonnes nom et stock avec console.table() ? Et que renvoient .find() et .filter() quand rien ne correspond ?

**Ma réponse (avec mes mots, 3 à 5 lignes) :**

...
`console.table()` accepte un deuxième argument qui permet de choisir les colonnes à afficher.
Par exemple, `console.table(produits, ["nom", "stock"])` affiche uniquement les colonnes `nom` et `stock`.
La méthode `.find()` renvoie `undefined` lorsqu'aucun élément ne correspond à la condition.
La méthode `.filter()` renvoie un tableau vide `[]` lorsqu'aucun élément ne correspond.

**Mon test dans la console :**

```js
// colle ici le test que tu as exécuté et le résultat obtenu
```
const produits = [
    {
        id: 101,
        nom: "Clé USB 32 Go",
        categorie: "Informatique",
        prixFC: 14000,
        stock: 25
    },
    {
        id: 102,
        nom: "Sac à dos Kadea",
        categorie: "Accessoires",
        prixFC: 42000,
        stock: 0
    },
    {
        id: 103,
        nom: "Souris sans fil",
        categorie: "Informatique",
        prixFC: 28000,
        stock: 12
    },
    {
        id: 104,
        nom: "Gourde isotherme",
        categorie: "Accessoires",
        prixFC: 21000,
        stock: 8
    },
    {
        id: 105,
        nom: "Casque audio",
        categorie: "Informatique",
        prixFC: 70000,
        stock: 0
    },
    {
        id: 106,
        nom: "Carnet de notes",
        categorie: "Papeterie",
        prixFC: 7000,
        stock: 40
    }
];

// 2. Afficher l'inventaire
console.table(produits);

// 3. Garder uniquement les produits de la catégorie Informatique
const produitsInformatique = produits.filter(
    (produit) => produit.categorie === "Informatique"
);

console.log(produitsInformatique);

// 4. Ajouter le prix en USD
const TAUX = 2800;

const produitsAvecPrixUSD = produits.map((produit) => {
    return {
        ...produit,
        prixUSD: Math.round(produit.prixFC / TAUX)
    };
});

console.table(produitsAvecPrixUSD);

// 5. Rechercher un produit avec son id
const chercherProduit = (id) => {
    const produit = produits.find((produit) => produit.id === id);

    return produit ?? "Produit introuvable";
};

console.table(chercherProduit(104));
console.table(chercherProduit(999));

// 6. Compter les produits en rupture de stock
const produitsEnRupture = produits.filter(
    (produit) => produit.stock === 0
);

console.log(`${produitsEnRupture.length} produits en rupture.`);

// Resultat
┌─────────┬─────┬────────────────────┬────────────────┬────────┬───────┐
│ (index) │ id  │ nom                │ categorie      │ prixFC │ stock │
├─────────┼─────┼────────────────────┼────────────────┼────────┼───────┤
│ 0       │ 101 │ 'Clé USB 32 Go'    │ 'Informatique' │ 14000  │ 25    │
│ 1       │ 102 │ 'Sac à dos Kadea'  │ 'Accessoires'  │ 42000  │ 0     │
│ 2       │ 103 │ 'Souris sans fil'  │ 'Informatique' │ 28000  │ 12    │
│ 3       │ 104 │ 'Gourde isotherme' │ 'Accessoires'  │ 21000  │ 8     │
│ 4       │ 105 │ 'Casque audio'     │ 'Informatique' │ 70000  │ 0     │
│ 5       │ 106 │ 'Carnet de notes'  │ 'Papeterie'    │ 7000   │ 40    │
└─────────┴─────┴────────────────────┴────────────────┴────────┴───────┘
┌─────────┬─────┬───────────────────┬────────────────┬────────┬───────┐
│ (index) │ id  │ nom               │ categorie      │ prixFC │ stock │
├─────────┼─────┼───────────────────┼────────────────┼────────┼───────┤
│ 0       │ 101 │ 'Clé USB 32 Go'   │ 'Informatique' │ 14000  │ 25    │
│ 1       │ 103 │ 'Souris sans fil' │ 'Informatique' │ 28000  │ 12    │
│ 2       │ 105 │ 'Casque audio'    │ 'Informatique' │ 70000  │ 0     │
└─────────┴─────┴───────────────────┴────────────────┴────────┴───────┘
┌─────────┬─────┬────────────────────┬────────────────┬────────┬───────┬─────────┐
│ (index) │ id  │ nom                │ categorie      │ prixFC │ stock │ prixUSD │
├─────────┼─────┼────────────────────┼────────────────┼────────┼───────┼─────────┤
│ 0       │ 101 │ 'Clé USB 32 Go'    │ 'Informatique' │ 14000  │ 25    │ 5       │
│ 1       │ 102 │ 'Sac à dos Kadea'  │ 'Accessoires'  │ 42000  │ 0     │ 15      │
│ 2       │ 103 │ 'Souris sans fil'  │ 'Informatique' │ 28000  │ 12    │ 10      │
│ 3       │ 104 │ 'Gourde isotherme' │ 'Accessoires'  │ 21000  │ 8     │ 8       │
│ 4       │ 105 │ 'Casque audio'     │ 'Informatique' │ 70000  │ 0     │ 25      │
│ 5       │ 106 │ 'Carnet de notes'  │ 'Papeterie'    │ 7000   │ 40    │ 3       │
└─────────┴─────┴────────────────────┴────────────────┴────────┴───────┴─────────┘
┌───────────┬────────────────────┐
│ (index)   │ Values             │
├───────────┼────────────────────┤
│ id        │ 104                │
│ nom       │ 'Gourde isotherme' │
│ categorie │ 'Accessoires'      │
│ prixFC    │ 21000              │
│ stock     │ 8                  │
└───────────┴────────────────────┘
Produit introuvable
2 produits en rupture.

**Source :** 

https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/find

https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/filter

https://developer.mozilla.org/fr/docs/Web/API/console/table_static

**IA utilisée ? (prompt + vérification sur MDN) :** Oui — Prompt : « Comment afficher certaines colonnes avec console.table() et que renvoient find() et filter() lorsqu'aucun élément ne correspond ? »

## A4 — Le classement de la promo

**Question :** Comment classer le bulletin de la meilleure à la moins bonne moyenne avec .sort() ? Pourquoi .sort() modifie-t-il le tableau d'origine, et comment l'éviter ?

**Ma réponse (avec mes mots, 3 à 5 lignes) :**

...

**Mon test dans la console :**

```js
// colle ici le test que tu as exécuté et le résultat obtenu
```

**Source :** 

**IA utilisée ? (prompt + vérification sur MDN) :** non

## A5 — Le nombre mystère

**Question :** Explique la « recherche dichotomique » et pourquoi 7 essais suffisent toujours pour trouver un nombre entre 1 et 100.

**Ma réponse (avec mes mots, 3 à 5 lignes) :**

...

**Mon test dans la console :**

```js
// colle ici le test que tu as exécuté et le résultat obtenu
```

**Source :** 

**IA utilisée ? (prompt + vérification sur MDN) :** non
