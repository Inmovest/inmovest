import  UsersDetails from "@/views/users/Profile";
import Payments from "@/views/users/Payments";
import Investments from "@/views/users/investments/Investments";
import Statistics from "@/views/users/Statistics";
import Messages from "@/views/users/Messages";
import Projects from "@/views/projects/Projects";
import ProjectPage from "@/views/projects/ProjectPage";
import Invest from "@/views/users/investments/Invest";

export default [
    { path: '/profile', name: 'User Details', component: UsersDetails },
    { path: '/payments', name: 'Payments', component: Payments },
    { path: '/investments', name: 'Investments', component: Investments },
    { path: '/projects/:id/invest', name: 'Invest', component: Invest },
    { path: '/statistics', name: 'Investment Statistics', component: Statistics },
    { path: '/messages', name: 'Messages', component: Messages },
    { path: '/projects', name: 'Projects', component: Projects },
    { path: '/projects/:id', name: 'Project Details', component: ProjectPage },
]