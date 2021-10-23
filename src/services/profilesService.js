import fetchAPI from "@/services/common";

const getUserById = async (id) => await fetchAPI(`/users/${id}?`)
const updateUserInfo = async (id, body) => await fetchAPI('/users/${id}?', 'POST', { body: body });

export { getUserById, updateUserInfo }