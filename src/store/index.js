import Vuex from "vuex";
import Vue from "vue";
import largeSidebar from "./modules/largeSidebar";
import compactSidebar from "./modules/compactSidebar";
import chat from "./modules/chat";
import config from "./modules/config";
import authData from "./modules/authentication";
import invoice from "./modules/invoice";
import cart from "./modules/cart";
import verticalSidebar from "./modules/verticalSidebar";
import scrumboard from "./modules/scrumboard";
import xmppStore from "./modules/xmppStore";
import storeWebsocket from "./modules/storeWebsocket";

// Load Vuex
Vue.use(Vuex);

// Create store
export default new Vuex.Store({
  modules: {
    largeSidebar,
    compactSidebar,
    chat,
    config,
    authData,
    invoice,
    cart,
    verticalSidebar,
    scrumboard,
    xmppStore,
    storeWebsocket,
  },
});
