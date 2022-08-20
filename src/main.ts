import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./router";
import ButtonComponent from "./components/ButtonComponent.vue";

createApp(App)
  .component("ButtonComponent", ButtonComponent)
  .use(router)
  .use(store)
  .mount("#app");
