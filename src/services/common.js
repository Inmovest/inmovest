const fetchAPI = async (route, method = 'GET',  { headers, body, params } = {}) => {
  const baseURL = 'http://localhost:3000' //hard coded, cambiar por env.url
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