import axios from 'axios'
import { put } from 'redux-saga/effects'
import { setAppError } from '@/app/appSlice'

export function* sagaHandleServerNetworkError(error: unknown): Generator {
  let errorMessage = 'Some error occurred!'

  if (axios.isAxiosError(error)) {
    errorMessage = error.response?.data?.message || error?.message || errorMessage
  } else if (error instanceof Error) {
    errorMessage = `Native error: ${error.message}`
  } else {
    errorMessage = JSON.stringify(error)
  }

  yield put(setAppError(errorMessage))
}
