import { createApp } from "vue";
import { createHead } from "@unhead/vue/client";
import "./style.css";
import "./styles/tokens.css";
import App from "./App.vue";
import router from "./router";

const app = createApp(App);
const head = createHead();
app.use(router).use(head).mount("#app");
