import Vue from 'vue'
import app from './app.vue'
import "./lib/mui/css/mui.css";
import "./lib/mui/css/icons-extra.css"
import "mint-ui/lib/style.css"
import VueRouter from "vue-router";
Vue.use(VueRouter)
import VueResource from "vue-resource"
Vue.use(VueResource)
Vue.http.options.root = "http://www.liulongbin.top:3005";
import router from './router.js'
import {
    Header,
    Swipe,
    SwipeItem,
    Button
} from "mint-ui";
Vue.component(Header.name, Header);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem)
Vue.component(Button.name, Button)
import moment from 'moment'
Vue.filter('dataFormat', function (datastr, pattern = "YYYY-MM-DD hh:mm:ss") {
    return moment(datastr).format(pattern)
})
import comment from './components/subcomponents/comment.vue'
Vue.component('comment-box', comment)
var vm = new Vue({
    el: '#app',
    render: c => c(app),
    router
})