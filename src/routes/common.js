import Home from "@/views/Home";
import PageNotFound from "@/views/common/PageNotFound";
import Signin from "@/views/Signin";
import Signup from "@/views/Signup";

export default [
  { path: '/login', name: 'Login', component: Signin },
  { path: '/register', name: 'Register', component: Signup },
  { path: '/', name: 'Home', component: Home },
  { path: '*', name: 'Not Found', component: PageNotFound },
]