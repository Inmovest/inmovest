import fetchAPI from "@/services/common";

const getInvestmentsOfProject = async (projectId) => await fetchAPI(`/projects/${projectId}/investments`)

export { getInvestmentsOfProject }