import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { library } from '@fortawesome/fontawesome-svg-core'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faStar } from '@fortawesome/free-regular-svg-icons'
import { faIdCard } from '@fortawesome/free-solid-svg-icons'
import { faOrcid } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
// import "./assets/main.css";
import './index.css'

const app = createApp(App);

library.add(faStar, faOrcid, faGithub, faLinkedin, faIdCard)
app.use(router);
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount("#app");
