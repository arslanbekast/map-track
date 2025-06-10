import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { appReducer, appSlice } from '@/app/appSlice'
import { authReducer, authSlice } from '@/features/auth/model/authSlice'
import { monitoringReducer, monitoringSlice } from '@/features/monitoring/model/monitoringSlice'

export const store = configureStore({
  reducer: {
    [appSlice.name]: appReducer,
    [authSlice.name]: authReducer,
    [monitoringSlice.name]: monitoringReducer,
  },
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
