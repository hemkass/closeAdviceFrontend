/**
 * main.ts
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import { registerPlugins } from "@/plugins/vuetify";
import i18n from "@/plugins/i18n";
// Components
import App from "./App.vue";

// Composables
import { createApp } from "vue";

const app = createApp(App);
app.use(i18n);

registerPlugins(app);

app.mount("#app");
