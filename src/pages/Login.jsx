import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useForm } from 'react-hook-form'
import { fetchLogin } from '../redux/slices/auth'
import { Navigate } from 'react-router-dom'

const Login = () => {

  const { register, handleSubmit } = useForm()
  const dispatch = useDispatch()
  const isAuth = useSelector(state => state.auth.isAuth)
  const authError = useSelector(state => state.auth.status)


  const onSubmit = async (data) => {
    let response = await dispatch(fetchLogin(data))

    if ('token' in response.payload) {
      let token = response.payload.token
      window.localStorage.setItem('token', token)
    }
  }

  if(isAuth) {
    return <Navigate to={'/'}/>
  }
  return (
    <div className='login-page'>
        <div className='form-wrapper'>
          <form onSubmit={handleSubmit(onSubmit)}>
            <h1>Yung<span>Blog</span></h1>
            <input  {...register('email')} type='email' placeholder='email'/>
            <input  {...register('password')} type='password' placeholder='password' />
            <button type='submit'>LOGIN</button>
            <div className='error-msg'>{authError}</div>
          </form>
        </div>
    </div>
  )
}

export default Login