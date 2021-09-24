import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import PageNotFound from "@/views/PageNotFound";
import Signin from "@/views/Signin";
import Signup from "@/views/Signup";
import Projects from "@/views/projects/ProjectsList";
import ProjectDetails from "@/views/projects/ProjectsItem";

Vue.use(VueRouter)

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/login', name: 'Login', component: Signin },
  { path: '/register', name: 'Register', component: Signup },
  { path: '/projects', name: 'Projects', component: Projects },
  { path: '/projects/:id', name: 'Project Details', component: ProjectDetails},
  { path: '*', name: 'Not Found', component: PageNotFound },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
