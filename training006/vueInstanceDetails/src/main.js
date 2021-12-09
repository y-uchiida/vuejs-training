import { createApp, h } from "vue";
import App from "./App.vue";
import App2 from "./App2.vue";

createApp(App).mount("#app");

var app2 = createApp(App2);
app2.mount("#app2");
