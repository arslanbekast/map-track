import type { LatLngTuple } from 'leaflet'
import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

const initialState: InitialState = {
  positions: [],
  loading: true,
}

export const monitoringSlice = createSlice({
  name: 'monitoring',
  initialState,
  selectors: {
    selectPositions: state => state.positions,
    selectMonitoringLoading: state => state.loading,
  },
  reducers: {
    fetchPositionSuccess: (state, action: PayloadAction<Position[]>) => {
      state.positions = action.payload
      state.loading = false
    },
    fetchPositionFailure: state => {
      state.loading = false
    },
  },
})

export const { fetchPositionSuccess, fetchPositionFailure } = monitoringSlice.actions
export const { selectPositions, selectMonitoringLoading } = monitoringSlice.selectors
export const monitoringReducer = monitoringSlice.reducer

type InitialState = {
  positions: Position[]
  loading: boolean
}

export type Position = {
  id: number
  address: string
  position: LatLngTuple
}
