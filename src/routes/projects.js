import Projects from "@/views/projects/ProjectsList";
import ProjectDetails from "@/views/projects/ProjectsItem";

export default [
  { path: '/projects', name: 'Projects', component: Projects },
  { path: '/projects/:id', name: 'Project Details', component: ProjectDetails},
]