import { useSelector } from 'react-redux'
import { login, selectAuthLoading, selectIsAuthenticated } from '@/features/auth/model/authSlice'
import { useAppDispatch } from '@/common/hooks/useAppDispatch'
import { type SubmitHandler, useForm } from 'react-hook-form'
import { type Inputs, loginSchema } from '@/features/auth/lib/schemas/loginSchema'
import { zodResolver } from '@hookform/resolvers/zod'
import { useNavigate } from 'react-router-dom'

export const useLogin = () => {
  const loading = useSelector(selectAuthLoading)
  const isAuthenticated = useSelector(selectIsAuthenticated)

  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: zodResolver(loginSchema),
    defaultValues: { email: '', password: '' },
  })

  const onSubmit: SubmitHandler<Inputs> = () => {
    dispatch(login({}))
      .unwrap()
      .then(() => {
        navigate('/monitoring')
      })
  }

  return {
    loading,
    isAuthenticated,
    register,
    errors,
    handleSubmit,
    onSubmit,
  }
}
