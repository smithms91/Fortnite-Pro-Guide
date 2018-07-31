import Vue from "vue";
import Router from "vue-router";
import Home from "../components/Home"
import PatchNotes from "../components/PatchNotes";
import Skins from "../components/Skins";
import Challenges from "../components/Challenges";
import Week1 from "../components/Week1";
import Week2 from "../components/Week2";
import Week3 from "../components/Week3";
import NotFound from "../components/NotFound";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home
    },
    {
      path: "/patchnotes",
      name: "PatchNotes",
      component: PatchNotes
    },
    {
      path: "/challenges",
      name: "Challenges",
      component: Challenges
    },
    {
      path: "/challenges/week1",
      name: "Week1",
      component: Week1
    },
    {
      path: "/challenges/week2",
      name: "Week2",
      component: Week2
    },
    {
      path: "/challenges/week3",
      name: "Week3",
      component: Week3
    },
    {
      path: "/skins",
      name: "Skins",
      component: Skins
    },
    {
      path: "*",
      name: "404",
      component: NotFound
    }
  ]
})

