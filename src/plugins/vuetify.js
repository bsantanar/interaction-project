import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

// Translation provided by Vuetify (javascript)
import es from 'vuetify/es5/locale/es'
import en from 'vuetify/es5/locale/en'

export default new Vuetify({
    lang: {
        locales: { es, en },
        current: 'es',
      },
});
