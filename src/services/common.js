const fetchAPI = async (route, method = 'GET',  { headers, body, params } = {}) => {
  const baseURL = process.env.VUE_APP_API_URL //Please do not remove this!
  const response = await fetch(`${baseURL + route}`, {
    method: method,
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      ...headers
    },
    body: JSON.stringify(body),
    ...params
  })
  return response.ok ? response.json() : response.error()
}

export default fetchAPI