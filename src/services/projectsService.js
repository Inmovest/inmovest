import fetchAPI from "@/services/common";

//methods
const getProjects = async () => fetchAPI('/projects?_expand=developer&_expand=district')
const getProjectById = async (id) => fetchAPI(`/projects/${id}?_expand=developer&_expand=district`)

/*
 const createProject = async (body) => fetchAPI('/projects', 'POST', { body: body })
 const updateProject = async (id, body) => fetchAPI('/projects', 'PUT, { body: body })
 const deleteProject = async (id) => fetchAPI('/projects', 'DELETE')
*/
export { getProjects, getProjectById }