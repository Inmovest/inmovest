import Vue from 'vue'
import VueRouter from 'vue-router'
import commonRoutes from "@/routes/common";
import projectsRoutes from "@/routes/projects";
import usersRoutes from "@/routes/users";
import investmentsRoutes from "@/routes/investments";

Vue.use(VueRouter)

const routes = [
    ...projectsRoutes,
    ...commonRoutes,
    ...usersRoutes,
    ...investmentsRoutes

]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
