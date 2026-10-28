# Pierre, papier, ciseaux

Petit jeu de **pierre, papier, ciseaux** réalisé en HTML, CSS et JavaScript, sans dépendance ni outil de compilation. Une partie se joue en cinq manches contre l’ordinateur.

## Lancer le jeu

Ouvrez `indexe.html` dans un navigateur. Pour utiliser le mode console, ouvrez plutôt `index-console.html`.

Le projet peut être joué localement directement depuis ces fichiers. Aucun serveur ni installation n’est nécessaire.

## Modes de jeu

### Mode classique

Dans `indexe.html`, cliquez sur **Pierre**, **Papier** ou **Ciseaux**. Le résultat et les scores s’affichent sur la page après chaque manche. Le gagnant est annoncé à la fin des cinq manches.

### Mode console

Dans `index-console.html` :

1. Ouvrez la console développeur du navigateur (`F12`, ou `Ctrl` + `Maj` + `J` sous Windows/Linux).
2. Cliquez dans le champ de saisie de la page et tapez le chiffre correspondant :
   - `1` : pierre
   - `2` : ciseaux
   - `3` : feuille (papier)
3. Répétez pour les cinq manches.

La console affiche le choix de l’ordinateur, le résultat de la manche, le score, puis le gagnant final. La saisie se fait dans le champ de la page, pas en tapant le chiffre seul dans la console du navigateur.

## Règles

- La pierre bat les ciseaux.
- Les ciseaux battent le papier.
- Le papier bat la pierre.
- En cas de choix identiques, la manche est une égalité et aucun point n’est attribué.
- Le joueur ou l’ordinateur ayant le plus de points après cinq manches gagne la partie.

## Fichiers

| Fichier | Rôle |
| --- | --- |
| `indexe.html` | Page du mode classique, avec les boutons et le score affiché. |
| `script.js` | Choix aléatoire de l’ordinateur et logique du mode classique. |
| `index-console.html` | Page explicative et champ de saisie du mode console. |
| `console.js` | Gestion des entrées numériques, des manches et des messages envoyés à la console. |

## Vérification

Pour vérifier la syntaxe du script du mode console avec Node.js :

```sh
node --check console.js
```

Le mode classique peut être testé directement dans le navigateur en jouant une partie complète.
# chifoumi
