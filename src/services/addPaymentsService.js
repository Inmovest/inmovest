import fetchAPI from "@/services/common";

const getaddPayments = async () => fetchAPI('/addpayments')

export { getaddPayments }