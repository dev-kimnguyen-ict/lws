import Vue from 'vue'
import NProgress from 'vue-nprogress'
import {sync} from 'vuex-router-sync';
import App from './views/App.vue';
import router from './router';
import store from './store';
import * as filters from './filters';
import {TOGGLE_SIDEBAR} from 'admin-vuex-store/mutation-types';

Vue.use(NProgress);

// Enable devtools
Vue.config.devtools = true;

sync(store, router);

const nprogress = new NProgress({parent: '.nprogress-container'});

const {state} = store;

router.beforeEach((route, redirect, next) => {
    if (state.app.device.isMobile && state.app.sidebar.opened) {
        store.commit(TOGGLE_SIDEBAR, false)
    }
    next()
})

Object.keys(filters).forEach(key => {
    Vue.filter(key, filters[key])
})

const app = new Vue({
    router,
    store,
    nprogress,
    ...App
})

export {app, router, store}