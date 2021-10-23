import Vue from 'vue'
import VueRouter from 'vue-router'
import commonRoutes from "@/routes/common";
import projectsRoutes from "@/routes/projects";
import usersRoutes from "@/routes/users";
import developerRoutes from '@/routes/developers/investments.js'

Vue.use(VueRouter)

const routes = [
  ...projectsRoutes,
  ...commonRoutes,
  ...usersRoutes,
  ...developerRoutes
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
