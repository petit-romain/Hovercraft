import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  // Le logo de l'entreprise
  logo: {
    alignSelf: 'center',
    width: '70%',
    height: 80,
    marginVertical: 10
  },

  // Le formulaire
  form: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },

  // Titre
  title: {
    marginBottom: 15
  },

  // Les champs de saisie
  inputsContainer: {
    width: '90%'
  },
  input: {
    marginTop: 10
  },

  // Mot de passe oublié ?
  forgotPasswordButton: {
    marginTop: 10,
    paddingHorizontal: 0
  },
  forgotPasswordButtonText: {
    marginHorizontal: 0
  },

  // Bouton pour envoyer le formulaire
  submitButton: {
    width: '90%',
    marginTop: 25
  },

  // Pas encore de compte ?
  noAccountContainer: {
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap',
    width: '90%',
    marginBottom: 5
  },
  noAccountButton: {
    paddingHorizontal: 0
  },
  noAccountButtonText: {
    marginHorizontal: 5
  },

  // Indicateur de chargement
  backdrop: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)'
  }
})
