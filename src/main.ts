import { createApp } from "vue";

import "primeflex/primeflex.css";
import "primeicons/primeicons.css";
import PrimeVue from "primevue/config";
import App from "./App.vue";
import "./assets/main.css";

const app = createApp(App);

app.use(PrimeVue);

app.mount("#app");
