import { Dimensions } from 'react-native'
import _ from 'lodash'

// variables locales
let width, height, ratioX, ratioY

// la taille d'écran sur laquelle sont basées les guidelines UI
const guidelineBaseWidth = 375
const guidelineBaseHeight = 667

// on écoute les changements de taille d'écran
Dimensions.addEventListener('change', (event) => {
  setDimensions(event.window)
})

// dimensions "setter"
const setDimensions = ({ width: w, height: h }) => {
  width = w
  height = h
  ratioX = _.clamp(width / guidelineBaseWidth, 0, 1)
  ratioY = _.clamp(height / guidelineBaseHeight, 0, 1)
}

// dimensions initiales
setDimensions(Dimensions.get('window'))

const metrics = {
  screenWidth: (() => width)(),
  screenHeight: (() => height)(),
  scaleX: (size) => ratioX * size,
  scaleY: (size) => ratioY * size,
  scale: (size) => (ratioX + ratioY) / 2 * size
}

export default metrics
