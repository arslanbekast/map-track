import { Monitoring } from '@/features/monitoring/ui/Monitoring'
import { Box } from '@mui/material'

export const MonitoringPage = () => {
  return (
    <Box
      sx={{
        position: 'relative',
        overflow: 'hidden',
        height: '100vh',
        width: '100vw',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Monitoring />
    </Box>
  )
}
