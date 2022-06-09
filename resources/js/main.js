import { createApp } from 'vue';
// import the root component App from a single-file component.
import App from './vue/app';

import { library } from '@fortawesome/fontawesome-svg-core'
import { faPlusSquare,faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faPlusSquare,faTrash)

createApp(App)
.component('fa',FontAwesomeIcon)
.mount('#app')
