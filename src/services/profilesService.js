import fetchAPI from "@/services/common";
const getUserById = async (id) => fetchAPI(`/users/${id}?`)
const updateUserInfo = async (id, body) => fetchAPI('/users/${id}?', 'POST', { body: body });

export { getUserById, updateUserInfo }