import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)

import { MotionPlugin } from '@vueuse/motion'
app.use(MotionPlugin)

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faLaravel } from '@fortawesome/free-brands-svg-icons';
import { faChartBar } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faPersonDigging } from '@fortawesome/free-solid-svg-icons';
import { faGear } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';

/* add icons to the library */
library.add(faLaravel, faChartBar, faStar, faPersonDigging, faGear, faTrash, faPenToSquare)

import router from './routes';

app.component('font-awesome-icon', FontAwesomeIcon)
app.use(router).mount('#app')