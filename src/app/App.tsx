import { Routing } from '@/common/routing/Routing'
import { toast, ToastContainer } from 'react-toastify'
import { useSelector } from 'react-redux'
import { selectAppError, setAppError } from '@/app/appSlice'
import { useEffect } from 'react'
import { useAppDispatch } from '@/common/hooks/useAppDispatch'

export function App() {
  const error = useSelector(selectAppError)
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (error) {
      toast.error(error)
      dispatch(setAppError(null))
    }
  }, [error])
  return (
    <div>
      <ToastContainer
        autoClose={3000}
        closeOnClick
        draggable
        hideProgressBar={false}
        newestOnTop={false}
        pauseOnFocusLoss
        pauseOnHover
        position={'bottom-left'}
        rtl={false}
      />
      <Routing />
    </div>
  )
}
