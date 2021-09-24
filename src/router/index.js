import Vue from 'vue'
import VueRouter from 'vue-router'
import Signin from "@/views/Signin";
import Signup from "@/views/Signup";
import projects from "@/router/projects";
import general from "@/router/general";

Vue.use(VueRouter)

const routes = [
  { path: '/login', name: 'Login', component: Signin },
  { path: '/register', name: 'Register', component: Signup },
  ...projects,
  ...general
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
