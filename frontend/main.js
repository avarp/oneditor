import Main from './components/Main.vue';
import Store from './store.js';

new Vue({
  el: '#root',
  store: Store,
  render: h => h(Main)
});
