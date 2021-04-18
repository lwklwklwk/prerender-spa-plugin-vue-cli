import Vue from 'vue'
import App from './App.vue'
import MetaInfo from 'vue-meta-info';

Vue.config.productionTip = false
Vue.use(MetaInfo)
new Vue({
    render: (h) => h(App),
    
    mounted () {
        document.dispatchEvent(new Event('render-event'))
    }
}).$mount('#app')
