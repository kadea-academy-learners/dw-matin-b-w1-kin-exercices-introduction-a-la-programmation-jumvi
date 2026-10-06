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

// const : mon prénom ne change pas pendant le programme
const prenom = 'Grâce';
// const : mon âge n'est pas modifié dans ce programme
const age = 22;
// const : la commune reste la même
const commune = 'Lemba';
// const : mon statut d'inscription est fixé
const estInscrit = true;
// let : surnom n'a pas encore de valeur, il pourra être assigné plus tard
let surnom;
// const : null signifie volontairement « aucune ancienne formation »
const ancienneFormation = null;

console.log(`Je m'appelle ${prenom}, j'ai ${age} ans et j'habite à ${commune}.`);

console.log(typeof prenom);
console.log(typeof age);
console.log(typeof commune);
console.log(typeof estInscrit);
console.log(typeof surnom);
console.log(typeof ancienneFormation);


