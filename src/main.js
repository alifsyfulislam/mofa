import Vue from 'vue'
import App from './App.vue'
import router from './router'

//jquery
import $ from 'jquery'

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

//my custom css
import './assets/css/xsIcon.css'
import './assets/css/style.css'
import './assets/css/responsive.css'
import './assets/css/plugins.css'
import './assets/css/fontawesome-all.css'
import './assets/css/color.css'
import './assets/css/animate.css'
import './assets/css/icomoon.css'
import './assets/css/swiper.min.css'

//fonts
import './assets/fonts/nunito/font.css'
import './assets/fonts/nunito/Nunito-Regular.ttf'
import './assets/fonts/nunito/Nunito-Regular.woff'
import './assets/fonts/nunito/Nunito-Regular.woff2'

//js
// import './assets/js/'
// import './assets/js/'
// import './assets/js/'
// import './assets/js/'


Vue.config.productionTip = false

new Vue({
    router,
    BootstrapVue,
    IconsPlugin,
    $,
    render: h => h(App)
}).$mount('#app')
