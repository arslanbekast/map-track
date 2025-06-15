import { Box, Button, Typography } from '@mui/material'
import RefreshIcon from '@mui/icons-material/Refresh'
import LocationOffIcon from '@mui/icons-material/LocationOff'

export const ErrorState = () => {
  const handleReload = () => {
    window.location.reload()
  }

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="100%"
      textAlign="center"
      padding={4}
    >
      <LocationOffIcon color="error" sx={{ fontSize: 60, mb: 2 }} />
      <Typography variant="h6" color="text.primary" gutterBottom>
        Не удалось получить позиции
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
        При получении данных произошла ошибка. Попробуйте обновить страницу.
      </Typography>
      <Button
        variant="contained"
        startIcon={<RefreshIcon />}
        onClick={handleReload}
        color="primary"
      >
        Обновить
      </Button>
    </Box>
  )
}
