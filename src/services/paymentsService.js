import fetchAPI from "@/services/common";

const getPayments = async () => fetchAPI('/payments')

export { getPayments }