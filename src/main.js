import Vue from 'vue';
import VueCompositionApi from '@vue/composition-api';
import { sync } from 'vuex-router-sync';

import '~/assets/styles/global.css';
import router from '~/core/router';
import store from '~/core/store';
import vuetify from '~/core/vuetify';
import apolloProvider from '~/core/apollo-provider';
import i18n from '~/core/i18n';
import register from '~/core/register';

import App from './App';

if (window.__POWERED_BY_QIANKUN__) {
  // eslint-disable-next-line no-undef
  __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__;
}

Vue.use(VueCompositionApi);

sync(store, router);

let vm = null;

function render() {
  vm = new Vue({
    router,
    store,
    vuetify,
    apolloProvider,
    i18n,
    render: h => h(App),
  }).$mount('#root');

  register();
}

if (!window.__POWERED_BY_QIANKUN__) {
  render();
}

export async function bootstrap() {
  console.log('vue app bootstraped');
}

export async function mount(props) {
  console.log('props from main framework', props);
  render();
}

export async function unmount() {
  vm.$destroy();
  vm = null;
}
