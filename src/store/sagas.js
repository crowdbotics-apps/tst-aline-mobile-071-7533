import { put, call, all, spawn } from "redux-saga/effects"
import { apiService } from "./services"
import * as types from "./constants"
function* get_stickers_search_readWorker(action) {
  try {
    const result = yield call(apiService.get_stickers_search_read, action)
    yield put(actions.get_stickers_search_readSucceeded(result))
  } catch (err) {
    yield put(actions.get_stickers_search_readFailed(err))
  }
}
function* get_stickers_search_readWatcher() {
  yield takeEvery(
    types.GET_STICKERS_SEARCH_READ,
    get_stickers_search_readWorker
  )
}
export default function* rootSaga() {
  const sagas = [get_stickers_search_readWatcher]
  yield all(
    sagas.map(saga =>
      spawn(function*() {
        while (true) {
          try {
            yield call(saga)
            break
          } catch (e) {
            console.log(e)
          }
        }
      })
    )
  )
}
