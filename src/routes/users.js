import  UsersDetails from "@/views/users/Profile";
import Payments from "@/views/users/Payments";

export default [
    { path: '/users/:id', name: 'User Details', component: UsersDetails },
    { path: '/payments', name: 'Payments', component: Payments }
]
