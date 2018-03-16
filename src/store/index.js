import Vue  from 'vue'
import Vuex from 'vuex'
import * as firebase from 'firebase';

Vue.use(Vuex)

import config from './modules/config'

export const store = new Vuex.Store({
    modules: {
        config
    }
});
