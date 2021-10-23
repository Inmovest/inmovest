import fetchAPI from "@/services/common";

const getMessageById = async (id) => fetchAPI(`/messages?userId=${id}`)

export { getMessageById }