import axios from "axios"
const freshPluginCreation = axios.create({
  baseURL: "http://api.giphy.com/v1",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function get_stickers_search_read({ q, api_key, limit }) {
  return freshPluginCreation.get(`/stickers/search/`, {
    params: { q: q, api_key: api_key, limit: limit }
  })
}
export const apiService = { get_stickers_search_read }
