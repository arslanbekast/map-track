import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { authApi } from '@/features/auth/api/authApi'
import { createAppAsyncThunk } from '@/common/utils/createAppAsyncThunk'
import { handleServerNetworkError } from '@/common/utils/handleServerNetworkError'
import { setAppError } from '@/app/appSlice'

// Асинхронный action для авторизации
export const login = createAppAsyncThunk<string, object>(
  'auth/login',
  async (authData, { dispatch, rejectWithValue }) => {
    try {
      const response = await authApi.login(authData)
      if (response.status === 200) {
        localStorage.setItem('token', response.data.token.token) // Сохраняем токен
        return response.data.token.token
      } else {
        dispatch(setAppError(response.statusText))
        return rejectWithValue(null)
      }
    } catch (error: unknown) {
      handleServerNetworkError(error, dispatch)
      return rejectWithValue(null)
    }
  }
)

const initialState: InitialState = {
  token: localStorage.getItem('token') || null,
  isAuthenticated: !!localStorage.getItem('token'),
  loading: false,
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  selectors: {
    selectAuthLoading: state => state.loading,
    selectIsAuthenticated: state => state.isAuthenticated,
  },
  reducers: {
    logout: state => {
      state.token = null
      localStorage.removeItem('token')
    },
  },
  extraReducers: builder => {
    builder
      .addCase(login.pending, state => {
        state.loading = true
      })
      .addCase(login.fulfilled, (state, action: PayloadAction<string>) => {
        state.token = action.payload
        state.loading = false
      })
      .addCase(login.rejected, state => {
        state.loading = false
      })
  },
})

export const { selectAuthLoading, selectIsAuthenticated } = authSlice.selectors
export const { logout } = authSlice.actions
export const authReducer = authSlice.reducer

type InitialState = {
  token: string | null
  isAuthenticated: boolean
  loading: boolean
}
