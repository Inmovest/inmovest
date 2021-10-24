import fetchAPI from "@/services/common";

const getaddBalance = async () => fetchAPI('/addbalance')

export { getaddBalance }