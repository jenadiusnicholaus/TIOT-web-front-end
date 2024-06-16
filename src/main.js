// import "babel-polyfill";
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
// import VueRouter from "vue-router";
import GullKit from "./plugins/gull.kit";
// import "babel-polyfill";
// import es6Promise from "es6-promise";
// es6Promise.polyfill();
import store from "./store";
import Breadcumb from "./components/breadcumb";
// import firebase from "firebase/app";

import "firebase/auth";
// import { firebaseSettings } from "@/data/config";
import i18n from "./lang/lang";
// import DateRangePicker from "vue2-daterange-picker";
//you need to import the CSS manually (in case you want to override it)
import "vue2-daterange-picker/dist/vue2-daterange-picker.css";
//import material-icon scss
import "font-awesome/css/font-awesome.min.css";
import { ToastPlugin } from "bootstrap-vue";
import "./interceptor/token_interceptor";
// import "./interceptor/refresh_token_interceptor";
import xmppSocket from "./store/services/xmppSocket";

//defined as global component
Vue.component(
  "VueFontawesome",
  require("vue-fontawesome-icon/VueFontawesome.vue").default
);

Vue.component("breadcumb", Breadcumb);
import InstantSearch from "vue-instantsearch";
// Vue.use(VueRouter);

Vue.use(InstantSearch);
Vue.use(GullKit);
Vue.use(ToastPlugin);

// firebase.initializeApp(firebaseSettings)
// const db = firebase.firestore();
// console.log(db);

Vue.config.productionTip = false;
// Vue.config.globalProperties.$xmpp = xmppSocket;
Vue.prototype.$xmpp = xmppSocket;
new Vue({
  store,
  router,
  i18n,
  render: (h) => h(App),
}).$mount("#app");
