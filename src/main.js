import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import { routes } from './routes'
import { store } from './components/store/store'

Vue.config.productionTip = false
Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes,
  scrollBehavior(to) {
    if (to.hash) {
      return { selector: to.hash }
    }
  }
});

router.beforeEach((to, from, next) => {
  console.log('Log somethings');
  next();
});

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
