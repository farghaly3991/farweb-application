import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import axios from 'axios'
import Loading from "./components/loading.vue"
import AppTable from "./components/table.vue"


import 'material-design-icons-iconfont/dist/material-design-icons.css'
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import "../node_modules/jquery/dist/jquery.min.js"
import "../node_modules/popper.js/dist/popper.min.js"
import "../node_modules/bootstrap/dist/js/bootstrap.js"


import './assets/styles.scss'
////////////////////////////////////////////////////////////////

let url =  process.env.NODE_ENV == "production"? window.location.origin: "http://localhost:5000";
  
  axios.defaults.baseURL = url;
  
  Vue.component("loading", Loading);
  Vue.component("app-table", AppTable);
  
  
  
Vue.filter("truncate", val => {
  if(val.length < 20) return val;
  const chuncks = val.match(/.{1,20}/g);
  return chuncks.join(" ");
});

  
  new Vue({
    router,
    render: h => h(App)
  }).$mount('#app')
  

//////////////////CHAT////////////////////
//////////////////CHAT////////////////////
export const eventBus = new Vue();


