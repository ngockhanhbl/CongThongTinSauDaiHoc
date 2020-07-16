import Vue from "vue";
import Vuex from "vuex";
import FAQs from "./modules/faqs";
import Login from "./modules/login";
import General from "./modules/general";

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  modules: {
    FAQs,
    Login,
    General
  }
});
