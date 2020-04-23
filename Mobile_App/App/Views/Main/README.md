### Containers/Main
C'est le module principal de l'application. Dans ce dossier se trouvent les 2 principaux composants de l'application :

* `App.js` qui est le premier composant chargé après` index.ios.js` ou `index.android.js`. Le but de ce fichier est de configurer Redux ou tout autre module "global" non visuel. Avoir la configuration de Redux ici aide le processus de rechargement à chaud dans React Native pendant le développement car il n'essaiera pas de recharger vos sagas et reducers si vos couleurs changent (par exemple).

* `RootContainer.js` qui est le premier composant visuel de l'application. C'est le parent de tous les autres écrans et composants.
