import { createApp } from "vue";
import App from "./App.vue";
import router from "./routes/routers";
import store from "./store/store";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

createApp(App)
  .use(router)
  .use(store)
  .mount("#app");
