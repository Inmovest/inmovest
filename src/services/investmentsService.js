import fetchAPI from "@/services/common";

const getInvestments = async (id) => fetchAPI(`/investments/?_expand=project&userId=${id}`)
const  getInvestmentsOfProject = async (id) => fetchAPI(`/project/${id}/investments`)

export { getInvestments, getInvestmentsOfProject }