import {createApp} from 'vue'
import App from './App.vue'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import $bus from './utils/Events.js';
import router from './routes.js';
import $pages from './data.js';
//we create an ap passsing the Options object as we did before:
//Vue.createApp({
//  data() { ...
const app = createApp(App);

// use lets us add a plugjn to our app
app.use(router);
//every component will have access to the $bus object
app.config.globalProperties.$bus = $bus;
// app.config.globalProperties.$pages = $pages;

//providing a globally accessible object
//we need to inject the object where is needed
app.provide('$pages',$pages);

app.mount('#app');