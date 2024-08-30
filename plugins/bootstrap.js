// plugins/bootstrap-vue.js
import { defineNuxtPlugin } from "#app";
import { BootstrapVue3 } from "bootstrap-vue-3";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue-3/dist/bootstrap-vue-3.css";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(BootstrapVue3);
});
