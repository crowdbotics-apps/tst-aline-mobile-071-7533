import * as types from "./constants"
export const get_stickers_search_read = (q, api_key, limit) => ({
  type: types.GET_STICKERS_SEARCH_READ,
  q,
  api_key,
  limit
})
export const get_stickers_search_readSucceeded = response => ({
  type: types.GET_STICKERS_SEARCH_READ_SUCCEEDED,
  response
})
export const get_stickers_search_readFailed = error => ({
  type: types.GET_STICKERS_SEARCH_READ_FAILED,
  error
})
