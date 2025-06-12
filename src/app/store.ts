import { configureStore } from '@reduxjs/toolkit'
import { appReducer, appSlice } from '@/app/appSlice'
import { authReducer, authSlice } from '@/features/auth/model/authSlice'
import { monitoringReducer, monitoringSlice } from '@/features/monitoring/model/monitoringSlice'
import createSagaMiddleware from 'redux-saga'
import { rootSaga } from '@/app/rootSaga'

const sagaMiddleware = createSagaMiddleware()

export const store = configureStore({
  reducer: {
    [appSlice.name]: appReducer,
    [authSlice.name]: authReducer,
    [monitoringSlice.name]: monitoringReducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(sagaMiddleware),
})

sagaMiddleware.run(rootSaga)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
