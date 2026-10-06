# 📊 Évaluation automatique — Semaine 13 (JavaScript)

> Générée le 2026-10-06 14:16 UTC · commit `d743e66` · évaluation déterministe basée uniquement sur le cahier d'exercices et le barème.

## Note finale : **9 / 15**

Exercices : **64 / 95** · Parfaits : 7 / 19 · Non rendus : 2

## 1. Résultat par exercice

| Exercice | Note /5 | Statut | Tests | Recherche /3 | Commit | Feedback |
|---|:-:|---|:-:|:-:|:-:|---|
| **F1** — Ma carte d'apprenant | **5** | ✅ Parfait | 5/5 | 3 | ✅ | Parfait ! Choix const/let justifiés, 5 types primitifs reconnus et fiche construite avec un seul gabarit littéral.<br>📚 Recherche complète, testée et sourcée (MDN). |
| **F2** — Le convertisseur de saisie | **4** | 🟡 Règles non respectées | 3/3 | 3 | ✅ | Résultat correct, mais il manque une notion imposée : Number() ou tes explications/prédictions en commentaire.<br>• Explique en commentaire pourquoi le résultat est faux et note tes prédictions avant de tester.<br>📚 Recherche complète, testée et sourcée (MDN). |
| **F3** — Pair ou impair : le tirage des tickets | **5** | ✅ Parfait | 3/3 | 3 | ✅ | Parfait ! Modulo et égalité stricte maîtrisés, les cas 17, 24 et 0 sont corrects.<br>📚 Recherche complète, testée et sourcée (MDN). |
| **F4** — Le contrôleur du bus | **4** | 🟡 Règles non respectées | 5/5 | 3 | ✅ | Le calcul est juste, mais il faut un ternaire pour le statut, un `if / else if / else` pour le tarif et un gabarit littéral.<br>• Crée `statut` avec un ternaire `condition ? a : b`.<br>📚 Recherche complète, testée et sourcée (MDN). |
| **F5** — Ma première fonction fléchée | **5** | ✅ Parfait | 4/4 | 3 | ✅ | Parfait ! Fonctions fléchées concises avec retour implicite et gabarit littéral.<br>📚 Recherche complète, testée et sourcée (MDN). |
| **F6** — Le compte à rebours | **3** | 🟠 Résultat incorrect | 1/2 | 1 | ✅ | La séquence affichée est fausse : vérifie le départ (10), la condition (>= 1), le pas et le saut du 5.<br>• On attend 10, 9, 8, 7, 6, 4, 3, 2, 1, Décollage ! (le 5 est sauté).<br>• Saute le 5 avec `continue`, sans changer la condition de la boucle.<br>📚 Recherche incomplète : aucun test exécuté dans la console ; pas de lien précis vers une page source (MDN de préférence). |
| **M1** — FizzBuzz kinois | **4** | 🟡 Règles non respectées | 3/3 | 3 | ✅ | Le FizzBuzz est juste, mais respecte les consignes : boucle for, %, === et explication de l'ordre en commentaire.<br>• `==`, `==`, `==` utilisé (ligne 26, 28, 30) : remplace par `===` / `!==`.<br>• Compare les restes avec `===`.<br>📚 Recherche complète ; privilégie une source MDN. |
| **M2** — Le distributeur automatique (DAB) | **5** | ✅ Parfait | 9/9 | 3 | ✅ | Parfait ! Règles vérifiées dans le bon ordre, cas limites gérés, la fonction renvoie son message.<br>📚 Recherche complète, testée et sourcée (MDN). |
| **M3** — Le détecteur de champs vides (Truthy / Falsy) | **3** | 🟠 Résultat incorrect | 9/11 | 2 | ✅ | Au moins une valeur est mal classée : ' ' et '0' sont truthy (chaînes non vides), 0, NaN, null, undefined, '' et false sont falsy.<br>• `estRempli(' ')` renvoie 'vide' au lieu de 'rempli'.<br>• Affiche le résultat des 10 tests dans l'ordre de la consigne.<br>📚 Recherche incomplète : pas de lien précis vers une page source (MDN de préférence). |
| **M4** — Le score par défaut : \|\| contre ?? | **0** | ⬜ Non rendu | — | 0 | ❌ | Exercice non commencé : écris ton code dans `semaine-13/M4-score-defaut.js` sous l'énoncé.<br>📚 Recherche non rédigée. |
| **M5** — La vitre teintée (portée de bloc) | **1** | ❌ Erreur d'exécution | — | 1 | ✅ | Le programme s'arrête encore sur une erreur : une variable déclarée avec const dans un bloc { } n'existe pas en dehors. Une ReferenceError stoppe tout le script, c'est pour ça que afficher() ne s'exécutait jamais.<br>• ReferenceError: commune is not defined<br>📚 Recherche incomplète : aucun test exécuté dans la console ; pas de lien précis vers une page source (MDN de préférence). |
| **M6** — Le détective du return | **0** | ⬜ Non rendu | — | 0 | ❌ | Exercice non commencé : écris ton code dans `semaine-13/M6-detective-return.js` sous l'énoncé.<br>📚 Recherche non rédigée. |
| **M7** — La tirelire numérique | **5** | ✅ Parfait | 3/3 | 3 | ✅ | Parfait ! Accumulateur bien initialisé, 12 tours exacts et bonus toutes les 4 semaines : 27000 FC.<br>📚 Recherche complète, testée et sourcée (MDN). |
| **M8** — La batterie qui se décharge | **2** | 🟠 Résultat incorrect | 1/3 | 1 | ✅ | Le résultat final est faux : la boucle doit continuer tant que batterie > 20, retirer 15 et compter les heures (6 h, 10 %).<br>• On attend « Après 6 h, batterie à 10 % : branche ton téléphone ! »<br>• En partant de 15 %, la boucle ne doit faire aucun tour (Après 0 h, batterie à 15 %).<br>📚 Recherche incomplète : réponse reformulée trop courte ou vide (min. 120 caractères) ; pas de lien précis vers une page source (MDN de préférence). |
| **A1** — Kadea Express v2 : le calculateur de livraison | **5** | ✅ Parfait | 9/9 | 3 | ✅ | Parfait ! Règles métier, paramètre par défaut, TVA et arrondi corrects, y compris aux bornes.<br>📚 Recherche complète, testée et sourcée (MDN). |
| **A2** — Le moteur de paie v2 | **4** | 🟡 Règles non respectées | 7/7 | 3 | ✅ | Les résultats sont justes, mais utilise .forEach(), une boucle for, une fonction fléchée avec `tauxHoraire = 2500` et des gabarits littéraux.<br>• Mot-clé `function` utilisé (`calculerSalaire` l.32) : écris une fonction fléchée.<br>• `calculerSalaire` doit être une fonction fléchée.<br>📚 Recherche complète, testée et sourcée (MDN). |
| **A3** — L'inventaire en console | **5** | ✅ Parfait | 7/7 | 3 | ✅ | Parfait ! Tableau d'objets maîtrisé avec filter, map et find, cas undefined géré et vérifié avec console.table().<br>📚 Recherche complète, testée et sourcée (MDN). |
| **A4** — Le classement de la promo | **3** | 🟠 Résultat incorrect | 6/9 | 2 | ✅ | Un résultat est faux : arrondis la moyenne à une décimale en gardant un nombre (Math.round(x * 10) / 10), et vérifie les seuils 16 et 10 (>=).<br>• `calculerMoyenne([8, 11, 9])` renvoie 9.333333333333334 au lieu de 9.3.<br>• `calculerMoyenne([16, 15, 19])` renvoie 16.666666666666668 au lieu de 16.7.<br>• Le bulletin créé avec .map() doit contenir nom, moyenne (15, 17, 9.3, 12, 16.7) et mention (Admis, Excellent, Rattrapage, Admis, Excellent).<br>📚 Recherche incomplète : aucun test exécuté dans la console. |
| **A5** — Le nombre mystère | **1** | ❌ Erreur d'exécution | — | 0 | ✅ | Le jeu plante ou tourne à l'infini : la boucle doit s'arrêter quand le nombre est trouvé OU quand les 7 essais sont utilisés.<br>• TypeError: Assignment to constant variable.<br>📚 Recherche non rédigée. |

## 2. Barème officiel (/15)

| Critère | Niveau | Points /3 | Feedback |
|---|---|:-:|---|
| Fondations : variables, types primitifs et conversions | Compétent : Satisfaisant (82 %) | **2** | Déclarations correctes avec const / let, aucun var. Les 5 types primitifs sont reconnus. Le piège '5' + 3 est identifié et corrigé avec Number().<br>_Preuves : F1, F2, M3_ |
| Logique conditionnelle et opérateurs | Compétent : Satisfaisant (74 %) | **2** | if / else if / else corrects, égalité stricte === systématique, modulo maîtrisé (pair / impair, multiples). Ternaire simple fonctionnel.<br>_Preuves : F3, F4, M1, M2, M4_ |
| Fonctions, return et portée | En développement : À améliorer (56 %) | **1** | Confusion entre return et console.log() qui produit des undefined ou des NaN en chaîne. Fonctions appelées sans () ou avec les arguments dans le désordre.<br>_Preuves : F5, M2, M5, M6_ |
| Boucles, accumulateurs et méthodes de tableau | Compétent : Satisfaisant (70 %) | **2** | Boucle for correcte (départ, condition, pas), accumulateur initialisé avant la boucle, while avec une condition d'arrêt sûre. Résultats attendus exacts (27000 FC pour M7, 6 h pour M8).<br>_Preuves : F6, M1, M7, M8 ; niveau Avancé : A2, A3, A4, A5_ |
| Recherche, qualité du code et restitution | Compétent : Satisfaisant (77 %) | **2** | Recherches reformulées et sourcées pour la majorité des exercices. Règles de code respectées (const, ===, fléchées, backticks).<br>_Recherches 70 % · commits par exercice 89 % · règles de code 76 %_ |
| **Total** | | **9 / 15** | |

## Comment lire cette évaluation

| Statut | Signification | Note /5 |
|---|---|:-:|
| ⬜ Non rendu | Fichier absent ou zone de travail vide / non modifiée | 0 |
| ❌ Erreur d'exécution | SyntaxError, ReferenceError, exception ou boucle infinie (> 2 s) | 1 |
| 🟠 Résultat incorrect | Au moins un résultat attendu du cahier n'est pas obtenu | 2 (3 si au moins la moitié des tests passe) |
| 🟡 Règles non respectées | Résultats justes, mais var, ==, concaténation, `function`, `let` inutile ou notion imposée absente | 4 |
| ✅ Parfait | Résultats justes et toutes les règles respectées | 5 |

Recherche /3 : 1 point pour une réponse rédigée (≥ 120 caractères), 1 point pour un test exécuté, 1 point pour un lien source précis. Commit : un commit dont le message cite l'exercice (ex. `feat: M2 dab`).

> ℹ️ L'explication orale de ton code reste évaluée par ton coach. Corrige, commit, merge sur `develop` et push : l'évaluation est relancée automatiquement.
