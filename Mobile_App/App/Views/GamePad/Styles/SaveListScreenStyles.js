import { StyleService } from '@ui-kitten/components'

export default StyleService.create({
  scanButtonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  },

  // Bouton pour démarrer le scan
  scanButton: {
    alignSelf: 'center',
    width: '90%',
    marginTop: 10
  },

  // Texte qui signale que l'utilisateur peut utiliser la gâchette
  scanButtonTip: {
    marginVertical: 5,
    textAlign: 'center'
  }
})
