import fetchAPI from "@/services/common";

//const getInvestmentsById = async (id) => fetchAPI(`/investments?userId=${id}`)
const getInvestmentsById = async (id) => fetchAPI(`/investments/?_expand=project&userId=${id}`)

export { getInvestmentsById }