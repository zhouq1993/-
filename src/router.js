import VueRouter from "vue-router";
import HomeContainer from "./components/tabbar/HomeContainer.vue";
import MemberContainer from "./components/tabbar/MemberContainer.vue";
import SearchContainer from "./components/tabbar/SearchContainer.vue";
import ShopcarContainer from "./components/tabbar/ShopcarContainer.vue";
import newslist from "./components/news/newslist.vue";
import newsInfo from "./components/news/newsInfo.vue"
var router = new VueRouter({
  routes: [{
      path: "/",
      redirect: "/home"
    },
    {
      path: "/home",
      component: HomeContainer
    },
    {
      path: "/member",
      component: MemberContainer
    },
    {
      path: "/shopcar",
      component: ShopcarContainer
    },
    {
      path: "/search",
      component: SearchContainer
    },
    {
      path: "/home/newlist",
      component: newslist
    },
    {
      path: "/home/newsInfo/:id",
      component: newsInfo
    },
  ],
  linkActiveClass: "mui-active"
});
export default router;