import Vue from 'vue'
import VueRouter from 'vue-router'
import commonRoutes from "@/routes/common";
import projectsRoutes from "@/routes/projects";

Vue.use(VueRouter)

const routes = [
  ...projectsRoutes,
  ...commonRoutes
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
