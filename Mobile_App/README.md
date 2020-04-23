#  MyProject
[![js-standard-style](
  https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat
)](http://standardjs.com/)

## :+1: Les librairies utilisées

- **React Native : pour faire des applications mobile iOS / Android avec React et JavaScript**
- Redux : pour gérer les données de l'application
- Redux Rest Resource : pour simplifier les interactions avec une API REST avec Redux
- Sagas : pour gérer les flux complexes dans une application
- React Navigation : pour la navigation
- React Native Firebase : pour les push notifications
- ...

Pour le reste je vous laisse regarder dans le `package.json` :laughing:

## :arrow_down: Installation des dépendances

```
  yarn
```

## :arrow_forward: Lancer l'application

### Serveur JS

```
  react-native start
```

Si vous avez oublié de le lancer avant de lancer l'application,
il s'executera automatiquement dans une nouvelle fenêtre du terminal.

### iOS

```
  react-native run-ios
```

### Android

```
  react-native run-android
```

## :metal: Let's start coding !

### Créer un `module`

Va permettre de créer un module.
Un module est composé de composants React
qui peuvent être soit des écrans, soit des composants "classiques".
Les styles associés aux composants sont aussi présents dans un dossier dédié.

```
  ignite generate module foo
```

Un module peut être lié à la navigation.
Si c'est le cas, il vous demandera de préciser si c'est un module
avant connexion (BeforeAuth) ou après connexion (AfterAuth).
Il générera pour vous : un navigator, un screen et un README.

### Créer un `screen`

Va permettre de créer un écran.
Un écran est un composant React "intelligent" qui sera connecté à Redux
pour pouvoir manipuler et traiter les données de l'application.
Il pourra aussi utiliser la navigation pour rediriger vers d'autres écrans.

```
  ignite generate screen foo
```

Le générateur vous demandera à quel module doit appartenir votre écran.

### Créer un `component`

Va permettre de créer un composant React "classique".
C'est un composant qui prend en entrée des `props` et
qui interagit avec son composant parent via des callbacks (`onX`).

**Un composant ne va JAMAIS interagir avec la navigation ou redux.**

```
  ignite generate component foo
```

Le générateur vous demandera à quel module doit appartenir votre écran.

### Créer une `resource`

Va permettre de créer une resource pour dialoguer avec l'API.
Une resource est étroitement liée à la librairie redux-rest-resource et
permet d'automatiser les interactions entre une API et Redux.

```
  ignite generate resource foo
```

## :point_right: Qualité de code

[![js-standard-style](
  https://cdn.rawgit.com/feross/standard/master/badge.svg
)](https://github.com/feross/standard)
Ce projet adhère à Standard JS. Ce sont des règles de qualié de code.
Si votre code n'est pas conforme, vous ne pourrez ni commit, ni push :D
