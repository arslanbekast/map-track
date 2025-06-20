import { createAsyncThunk } from '@reduxjs/toolkit'
import type { AppDispatch, RootState } from '@/app/store'

/**
 Эта функция предназначена для того, чтобы избавиться от дублирования кода по созданию типов в санке
 */
export const createAppAsyncThunk = createAsyncThunk.withTypes<{
  state: RootState
  dispatch: AppDispatch
  rejectValue: null | string
}>()
