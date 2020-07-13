import * as types from "./constants"

const initialState = {}

export default function apiReducer(state = initialState, action) {
  switch (action.type) {
    case types.GET_STICKERS_SEARCH_READ:
    case types.GET_STICKERS_SEARCH_READ_SUCCEEDED:
    case types.GET_STICKERS_SEARCH_READ_FAILED:
    default:
      return state
  }
}
