import Vue from 'vue'
import VueRouter from 'vue-router'
import commonRoutes from "@/routes/common";
import projectsRoutes from "@/routes/projects";
import usersRoutes from "@/routes/users";
import messagesRoutes from "@/routes/messages";

Vue.use(VueRouter)

const routes = [
    ...projectsRoutes,
    ...commonRoutes,
    ...usersRoutes,
    ...messagesRoutes
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
