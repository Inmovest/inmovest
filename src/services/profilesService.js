import fetchAPI from "@/services/common";

const getUserById = async (id) => fetchAPI(`/users/${id}`)

export { getUserById }