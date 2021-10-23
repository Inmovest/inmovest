import Projects from "@/views/projects/Projects";
import ProjectDetails from "@/views/projects/ProjectDetails";

export default [
  { path: '/projects', name: 'Projects', component: Projects },
  { path: '/projects/:id', name: 'Project Details', component: ProjectDetails},
]