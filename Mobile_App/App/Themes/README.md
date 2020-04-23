### Themes

Les thèmes de l'application.

#### Colors

La définition des couleurs

#### Fonts

La définition des polices

#### Images

La définition des images

#### Metrics

Les résolutions de l'écran ainsi que des méthodes pour faire du "responsive" :

| *propriété*  | *description*                                                                                                                                                                   |
|--------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| screenWidth  | La largeur de l'écran                                                                                                                                                           |
| screenHeight | La hauteur de l'écran                                                                                                                                                           |
| scaleX(size) | À utiliser sur les tailles définies sur l'axe X : `width`, `paddingLeft`, `paddingRight`, `paddingHorizontal`, `marginLeft`, `marginRight`, `marginHorizontal`, `left`, `right` |
| scaleY(size) | À utiliser sur les tailles définies sur l'axe Y : `height`, `paddingTop`, `paddingBottom`, `paddingVertical`, `marginTop`, `marginBottom`, `marginVertical`, `top`, `bottom`    |
| scale(size)  | À utiliser sur les tailles définies sur les 2 axes : `fontSize`, `borderRadius`                                                                                                 |

Il faut penser à définir les `guidelineBaseWidth` et `guidelineBaseHeight` selon la résolution utilisée dans les guidelines UI.
