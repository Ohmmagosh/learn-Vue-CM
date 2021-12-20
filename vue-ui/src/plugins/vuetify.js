import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
      themes: {
        light: {
          primary: '#FA5C00',
          secondary: '#ff00ff',
          accent: '#8c9eff',
          error: '#b71c1c',
        },
      },
    },
  })