import Vue from 'vue'
import Vuetify, { colors } from 'vuetify/lib'

Vue.use(Vuetify)

export default new Vuetify({
  icons: {
    iconfont: 'mdi'
  },
  theme: {
    themes: {
      light: {
        link: colors.shades.black
      },
      dark: {
        link: colors.shades.white
      }
    }
  }
})
