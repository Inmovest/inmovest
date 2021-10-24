import  Profile from "@/views/users/Profile";
import Payments from "@/views/users/Payments";
import Investments from "@/views/projects/Investments";
import Statistics from "@/views/users/Statistics";
import Messages from "@/views/users/Messages";
import Projects from "@/views/projects/Projects";
import ProjectDetails from "@/views/projects/ProjectDetails";

export default [
    { path: '/profile', name: 'User Details', component: Profile },
    { path: '/payments', name: 'Payments', component: Payments },
    { path: '/investments', name: 'Investments', component: Investments },
    { path: '/statistics', name: 'Investment Statistics', component: Statistics },
    { path: '/messages', name: 'Messages', component: Messages },
    { path: '/projects', name: 'Projects', component: Projects },
    { path: '/projects/:id', name: 'Project Details', component: ProjectDetails},
]