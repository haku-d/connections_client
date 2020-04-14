import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./router";

// import { ApiService } from "./common/api.service";
import vuetify from "./plugins/vuetify";
import axios from "./plugins/axios";

Vue.config.productionTip = false;

new Vue({
  vuetify,
  axios,
  store,
  router,
  render: h => h(App)
}).$mount("#app");
