import { call, cancel, cancelled, delay, fork, put, take, takeLatest } from 'redux-saga/effects'
import { monitoringApi } from '@/features/monitoring/api/monitoringApi'
import { fetchPositionFailure, fetchPositionSuccess, type Position } from './monitoringSlice'
import { setAppError } from '@/app/appSlice'
import type { AxiosResponse } from 'axios'
import type { MonitoringResponse } from '@/features/monitoring/api/monitoringApi.types'
import type { SagaIterator, Task } from 'redux-saga'
import { createAction } from '@reduxjs/toolkit'
import { positionsTransform } from '@/common/utils/positionsTransform'
import { sagaHandleServerNetworkError } from '@/common/utils/sagaHandleServerNetworkError'

export const fetchPosition = createAction('monitoring/fetchPosition')
export const startMonitoringPolling = createAction('monitoring/startPolling')
export const stopMonitoringPolling = createAction('monitoring/stopPolling')

function* fetchPositionWorker(): SagaIterator {
  try {
    const response: AxiosResponse<MonitoringResponse[]> = yield call(monitoringApi.getPositions)
    const positions = positionsTransform(response.data)
    if (response.status === 200) {
      yield put(fetchPositionSuccess(positions as Position[]))
    } else {
      yield put(setAppError(response.statusText))
      yield put(fetchPositionFailure())
    }
  } catch (error) {
    yield call(sagaHandleServerNetworkError, error)
    yield put(fetchPositionFailure())
  }
}

function* pollingWorker(): SagaIterator {
  try {
    while (true) {
      yield delay(30000)
      yield call(fetchPositionWorker)
    }
  } finally {
    if (yield cancelled()) {
      console.log('Position polling cancelled')
    }
  }
}

export function* monitoringSaga(): SagaIterator {
  yield takeLatest(fetchPosition.type, fetchPositionWorker)

  yield take(startMonitoringPolling.type)

  const task: Task = yield fork(pollingWorker)

  yield take(stopMonitoringPolling.type)

  yield cancel(task)
}
