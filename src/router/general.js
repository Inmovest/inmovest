import Home from "@/views/Home";
import PageNotFound from "@/views/PageNotFound";

export default [
  { path: '/', name: 'Home', component: Home },
  { path: '*', name: 'Not Found', component: PageNotFound },
]