import fetchAPI from "@/services/common";

//methods
const getInvestments = async () => fetchAPI('/investments?_expand=user')
const getInvestmentById = async (id) => fetchAPI(`/investments?projectId=${id}&_expand=user`)

export { getInvestments, getInvestmentById }