import { Route, Routes } from 'react-router-dom'
import { LoginPage } from '@/pages/LoginPage/LoginPage'
import { ProtectedRoute } from '@/common/components/ProtectedRoute/ProtectedRoute'
import { MonitoringPage } from '@/pages/MonitoringPage/MonitoringPage'
import { ErrorPage } from '@/pages/ErrorPage/ErrorPage'

export const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route
        path="/monitoring"
        element={
          <ProtectedRoute>
            <MonitoringPage />
          </ProtectedRoute>
        }
      />
      <Route path={'*'} element={<ErrorPage />} />
    </Routes>
  )
}
