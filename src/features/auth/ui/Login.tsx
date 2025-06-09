import { Box, Button, TextField } from '@mui/material'
import s from './Login.module.scss'
import { useLogin } from '@/features/auth/hooks/useLogin'
import { Navigate } from 'react-router-dom'

export const Login = () => {
  const { loading, isAuthenticated, register, errors, handleSubmit, onSubmit } = useLogin()

  if (isAuthenticated) {
    return <Navigate to={'/monitoring'} />
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={s.form}>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
        <TextField
          {...register('email')}
          label="Email"
          variant="outlined"
          size={'small'}
          error={!!errors.email}
          helperText={errors.email?.message}
        />
        <TextField
          {...register('password')}
          label="Password"
          variant="outlined"
          size={'small'}
          error={!!errors.password}
          helperText={errors.password?.message}
        />
        <Button type={'submit'} variant="contained" loading={loading}>
          Вход
        </Button>
      </Box>
    </form>
  )
}
