import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

const initialState: InitialState = {
  error: null,
}

export const appSlice = createSlice({
  name: 'app',
  initialState,
  selectors: { selectAppError: state => state.error },
  reducers: {
    setAppError(state, action: PayloadAction<string | null>) {
      state.error = action.payload
    },
  },
})

export const { selectAppError } = appSlice.selectors
export const appReducer = appSlice.reducer
export const { setAppError } = appSlice.actions

type InitialState = {
  error: null | string
}
