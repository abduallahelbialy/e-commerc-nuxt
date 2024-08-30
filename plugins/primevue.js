// plugins/primevue.js
import { defineNuxtPlugin } from "#app";
import PrimeVue from "primevue/config";
import "primeicons/primeicons.css";
import Rating from "primevue/rating";

// Import individual components if needed
import Button from "primevue/button";
import InputText from "primevue/inputtext";

export default defineNuxtPlugin((nuxtApp) => {
  const vueApp = nuxtApp.vueApp;
  vueApp.use(PrimeVue);

  // Register components globally if needed
  vueApp.component("Button", Button);
  vueApp.component("InputText", InputText);
  vueApp.component("Rating", Rating);
});
