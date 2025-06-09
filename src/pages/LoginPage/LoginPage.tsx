import { Login } from '@/features/auth/ui/Login'
import { Box } from '@mui/material'

export const LoginPage = () => {
  return (
    <Box
      sx={{
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '0 10px',
      }}
    >
      <Login />
    </Box>
  )
}
