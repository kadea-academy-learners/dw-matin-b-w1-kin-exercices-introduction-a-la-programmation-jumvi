# RECHERCHES — Semaine 13

> Pour chaque exercice : reformule avec tes mots (pas de copier-coller), ajoute un test que tu as exécuté toi-même,
> et cite une source précise (une page, pas juste « Google »). MDN en français est la référence.
> Si tu as utilisé une IA, indique ton prompt et vérifie sa réponse sur MDN.
> Ne modifie pas les titres `## F1 — …` : ils servent à l'évaluation automatique.

## F1 — Ma carte d'apprenant

**Question :** Pourquoi typeof null renvoie-t-il 'object' alors que null n'est pas un objet ?

**Ma réponse (avec mes mots, 3 à 5 lignes) :**

C'est un bug historique de la toute première version de JavaScript. Les valeurs étaient stockées avec une
« étiquette de type » et celle des objets valait 0 ; null était représenté par le pointeur nul (que des 0),
donc typeof le lisait comme un objet. On n'a jamais corrigé pour ne pas casser les sites existants.
Pour tester null, il faut donc écrire `valeur === null`.

**Mon test dans la console :**

```js
typeof null;        // 'object'
null === null;      // true
```

**Source :** https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Operators/typeof#typeof_null

**IA utilisée ? (prompt + vérification sur MDN) :** non

## F2 — Le convertisseur de saisie

**Question :** Qu'est-ce que NaN, et pourquoi NaN === NaN renvoie false ? Quelle fonction utiliser pour le détecter ?

**Ma réponse (avec mes mots, 3 à 5 lignes) :**

NaN veut dire « Not a Number » : c'est le résultat d'un calcul ou d'une conversion numérique impossible,
comme Number('abc'). La norme des nombres à virgule (IEEE 754) dit que NaN n'est égal à rien, même pas à
lui-même, donc NaN === NaN vaut false. Pour le détecter, on utilise Number.isNaN(valeur).

**Mon test dans la console :**

```js
NaN === NaN;              // false
Number.isNaN(Number('abc')); // true
```

**Source :** https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Number/isNaN

**IA utilisée ? (prompt + vérification sur MDN) :** non

## F3 — Pair ou impair : le tirage des tickets

**Question :** Que renvoie -7 % 2 ? Déduis-en pourquoi il vaut mieux tester % 2 !== 0 plutôt que % 2 === 1 pour détecter un nombre impair.

**Ma réponse (avec mes mots, 3 à 5 lignes) :**

En JavaScript, le reste garde le signe du nombre de gauche : -7 % 2 renvoie -1 et pas 1. Donc le test
`n % 2 === 1` dirait que -7 n'est pas impair, ce qui est faux. Avec `n % 2 !== 0`, on accepte 1 et -1,
le test marche pour les nombres positifs et négatifs.

**Mon test dans la console :**

```js
-7 % 2;          // -1
-7 % 2 === 1;    // false
-7 % 2 !== 0;    // true
```

**Source :** https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Operators/Remainder

**IA utilisée ? (prompt + vérification sur MDN) :** non

## F4 — Le contrôleur du bus

**Question :** Peut-on enchaîner plusieurs ternaires ? Pourquoi est-ce souvent déconseillé ?

**Ma réponse (avec mes mots, 3 à 5 lignes) :**

Oui, on peut mettre un ternaire dans la partie « sinon » d'un autre ternaire, comme un else if.
Mais dès qu'il y a plus de deux conditions, la ligne devient difficile à lire et à corriger, surtout
pour quelqu'un d'autre. Dans ce cas un if / else if / else est plus clair.

**Mon test dans la console :**

```js
const age = 3;
const tarif = age < 5 ? 'gratuit' : age < 18 ? '500 FC' : '1000 FC';
tarif; // 'gratuit'
```

**Source :** https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Operators/Conditional_operator

**IA utilisée ? (prompt + vérification sur MDN) :** non

## F5 — Ma première fonction fléchée

**Question :** Quand peut-on enlever les parenthèses autour des paramètres, et quand peut-on enlever return et les accolades ?

**Ma réponse (avec mes mots, 3 à 5 lignes) :**

On peut enlever les parenthèses seulement quand il y a exactement un paramètre simple (pas zéro, pas deux,
pas de valeur par défaut). On peut enlever les accolades et le return quand le corps de la fonction est
une seule expression : sa valeur est alors renvoyée automatiquement (retour implicite).

**Mon test dans la console :**

```js
const carre = n => n * n;
carre(4); // 16
```

**Source :** https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Functions/Arrow_functions

**IA utilisée ? (prompt + vérification sur MDN) :** non

## F6 — Le compte à rebours

**Question :** À quoi sert le mot-clé continue ? Quelle différence avec break ?

**Ma réponse (avec mes mots, 3 à 5 lignes) :**

continue sert à passer directement au tour suivant de la boucle sans exécuter la fin du tour actuel.
break arrête complètement la boucle et on sort. Donc continue saute un élément, break arrête tout.

**Mon test dans la console :**

```js
// colle ici le test que tu as exécuté et le résultat obtenu
```

**Source :** 

**IA utilisée ? (prompt + vérification sur MDN) :** non

## M1 — FizzBuzz kinois

**Question :** Pourquoi FizzBuzz est-il célèbre dans les entretiens d'embauche de développeurs ?

**Ma réponse (avec mes mots, 3 à 5 lignes) :**

FizzBuzz est devenu célèbre parce qu'il permet de vérifier très vite si un candidat sait vraiment écrire
une boucle, utiliser le modulo et ordonner ses conditions. Beaucoup de candidats échouent quand même,
souvent parce qu'ils testent le 3 ou le 5 avant le cas « 3 et 5 ».

**Mon test dans la console :**

```js
15 % 3 === 0 && 15 % 5 === 0; // true -> MalewaWewa
```

**Source :** https://fr.wikipedia.org/wiki/Fizz_buzz

**IA utilisée ? (prompt + vérification sur MDN) :** non

## M2 — Le distributeur automatique (DAB)

**Question :** Comment afficher 75000 sous la forme 75 000 avec toLocaleString() ?

**Ma réponse (avec mes mots, 3 à 5 lignes) :**

toLocaleString() formate un nombre selon les habitudes d'une langue. En lui donnant la locale 'fr-FR',
les milliers sont séparés par une espace (insécable), ce qui donne 75 000. Attention, le résultat est
une chaîne de caractères : on ne doit plus faire de calcul avec.

**Mon test dans la console :**

```js
(75000).toLocaleString('fr-FR'); // '75 000'
```

**Source :** https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Number/toLocaleString

**IA utilisée ? (prompt + vérification sur MDN) :** non

## M3 — Le détecteur de champs vides (Truthy / Falsy)

**Question :** Quelle est la liste complète des valeurs falsy en JavaScript ? (Indice : il y en a plus que dans cet exercice.)

**Ma réponse (avec mes mots, 3 à 5 lignes) :**

Les valeurs falsy sont celles qui deviennent false dans une condition : false, 0, -0, 0n (BigInt),
la chaîne vide '', null, undefined et NaN. Toutes les autres valeurs sont truthy, même '0' ou [].

**Mon test dans la console :**

```js
Boolean(-0); // false
Boolean(0n); // false
```

**Source :** https://www.google.com/search?q=valeurs+falsy+javascript

**IA utilisée ? (prompt + vérification sur MDN) :** non

## M4 — Le score par défaut : || contre ??

**Question :** Que fait l'opérateur ?? (coalescence des nuls) et en quoi est-il différent de || ?

**Ma réponse (avec mes mots, 3 à 5 lignes) :**

...

**Mon test dans la console :**

```js
// colle ici le test que tu as exécuté et le résultat obtenu
```

**Source :** 

**IA utilisée ? (prompt + vérification sur MDN) :** non

## M5 — La vitre teintée (portée de bloc)

**Question :** Pourquoi var est-il banni du code moderne ? Cherche ce que sont la portée de fonction et le « hoisting ».

**Ma réponse (avec mes mots, 3 à 5 lignes) :**

var a une portée de fonction et pas de bloc, donc une variable déclarée dans un if existe en dehors.
En plus, avec le hoisting, la déclaration est remontée en haut et la variable vaut undefined avant sa ligne.

**Mon test dans la console :**

```js
// colle ici le test que tu as exécuté et le résultat obtenu
```

**Source :** 

**IA utilisée ? (prompt + vérification sur MDN) :** non

## M6 — Le détective du return

**Question :** Le troisième bug vient de l'« insertion automatique de point-virgule » (ASI). Explique ce mécanisme en 3 lignes.

**Ma réponse (avec mes mots, 3 à 5 lignes) :**

...

**Mon test dans la console :**

```js
// colle ici le test que tu as exécuté et le résultat obtenu
```

**Source :** 

**IA utilisée ? (prompt + vérification sur MDN) :** non

## M7 — La tirelire numérique

**Question :** Cite tous les opérateurs d'affectation composée (+=, -=…) et donne un exemple pour chacun.

**Ma réponse (avec mes mots, 3 à 5 lignes) :**

Un opérateur d'affectation composée fait un calcul puis range le résultat dans la même variable :
+= (x += 2), -= (x -= 2), *= (x *= 2), /= (x /= 2), %= (x %= 2), **= (x **= 2),
les opérateurs de bits <<=, >>=, >>>=, &=, |=, ^= et les logiques &&=, ||=, ??= (x ??= 5).

**Mon test dans la console :**

```js
let x = 10;
x += 5;  // 15
x **= 2; // 225
```

**Source :** https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Operators#op%C3%A9rateurs_daffectation

**IA utilisée ? (prompt + vérification sur MDN) :** non

## M8 — La batterie qui se décharge

**Question :** Quelle est la différence entre while et do...while ? Que donnerait l'étape 4 avec un do...while ?

**Ma réponse (avec mes mots, 3 à 5 lignes) :**

do...while fait au moins un tour.

**Mon test dans la console :**

```js
let n = 0;
do { n++; } while (n < 0);
n; // 1
```

**Source :** 

**IA utilisée ? (prompt + vérification sur MDN) :** non

## A1 — Kadea Express v2 : le calculateur de livraison

**Question :** Pourquoi 0.1 + 0.2 ne donne-t-il pas 0.3 en JavaScript ? Et pourquoi toFixed() est un piège si on veut continuer à calculer ?

**Ma réponse (avec mes mots, 3 à 5 lignes) :**

Les nombres sont stockés en binaire (norme IEEE 754) et 0.1 ou 0.2 ne peuvent pas être écrits exactement
en binaire, comme 1/3 en décimal. On obtient donc 0.30000000000000004. toFixed() règle l'affichage mais
renvoie une chaîne : si on continue à calculer avec, le + concatène au lieu d'additionner. Il vaut mieux
arrondir avec Math.round() qui renvoie un nombre.

**Mon test dans la console :**

```js
0.1 + 0.2;               // 0.30000000000000004
(0.1 + 0.2).toFixed(2) + 1; // '0.301'
```

**Source :** https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed

**IA utilisée ? (prompt + vérification sur MDN) :** non

## A2 — Le moteur de paie v2

**Question :** La méthode .reduce() n'a pas été vue en atelier. Explique ce qu'elle fait et réécris l'étape 2 avec elle.

**Ma réponse (avec mes mots, 3 à 5 lignes) :**

.reduce() parcourt un tableau en gardant une valeur qu'on appelle l'accumulateur. À chaque élément, la
fonction reçoit l'accumulateur et l'élément, et renvoie le nouvel accumulateur. Le second argument est la
valeur de départ. C'est l'équivalent de forEach + une variable total, mais en une seule expression.

**Mon test dans la console :**

```js
const heuresSemaine = [8, 9, 10, 8, 7, 6];
heuresSemaine.reduce((total, heures) => total + heures, 0); // 48
```

**Source :** https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce

**IA utilisée ? (prompt + vérification sur MDN) :** non

## A3 — L'inventaire en console

**Question :** Comment afficher seulement les colonnes nom et stock avec console.table() ? Et que renvoient .find() et .filter() quand rien ne correspond ?

**Ma réponse (avec mes mots, 3 à 5 lignes) :**

console.table() accepte un deuxième argument : un tableau avec le nom des colonnes à garder, par exemple
console.table(produits, ['nom', 'stock']). Quand rien ne correspond, .find() renvoie undefined (il cherche
un seul élément), alors que .filter() renvoie un tableau vide [] (il renvoie toujours un tableau).

**Mon test dans la console :**

```js
[1, 2].find((n) => n > 5);   // undefined
[1, 2].filter((n) => n > 5); // []
```

**Source :** https://developer.mozilla.org/fr/docs/Web/API/console/table_static

**IA utilisée ? (prompt + vérification sur MDN) :** non

## A4 — Le classement de la promo

**Question :** Comment classer le bulletin de la meilleure à la moins bonne moyenne avec .sort() ? Pourquoi .sort() modifie-t-il le tableau d'origine, et comment l'éviter ?

**Ma réponse (avec mes mots, 3 à 5 lignes) :**

On donne à .sort() une fonction de comparaison : (a, b) => b.moyenne - a.moyenne classe du plus grand
au plus petit. .sort() trie « sur place », c'est-à-dire qu'il change directement le tableau pour ne pas
en créer un nouveau. Pour garder l'original, on trie une copie avec [...bulletin].sort() ou toSorted().

**Mon test dans la console :**

```js
// colle ici le test que tu as exécuté et le résultat obtenu
```

**Source :** https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/sort

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
