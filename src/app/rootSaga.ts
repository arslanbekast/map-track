import { all, fork } from 'redux-saga/effects'
import { monitoringSaga } from '@/features/monitoring/model/monitoringSaga'

export function* rootSaga() {
  yield all([fork(monitoringSaga)])
}
