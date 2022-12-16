import React from 'react'
import { Link, Navigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { fetchRegister } from '../redux/slices/auth'


const Register = () => {

  const isAuth = useSelector(state => state.auth.isAuth)
  const dispatch = useDispatch()
  const { register, handleSubmit } = useForm()
  

  const onSubmit = (data) => {
    let response = dispatch(fetchRegister(data))
    if ('token' in response.payload) {
      let token = response.payload.token
      window.localStorage.setItem('token', token)
    }
  }


  if(isAuth) {
    return <Navigate to={'/'}/>
  }

  return (
    <div className='register-page'>
    <div className='form-wrapper'>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1>Yung<span>Blog</span></h1>
        <input {...register('fullName')} type='text' placeholder='name' required/>
        <input {...register('email')} type='email' placeholder='email' required/>
        <input {...register('password')} type='password' placeholder='password' required/>
        <input {...register('avatarUrl')} type="text" placeholder='icon url'/>
        <button type='submit'>REGISTER</button>
        <div className='error-msg'>{''}</div>
      </form>
      <div><Link to='/login'>Log in?</Link></div>
    </div>
    </div>
  )
}

export default Register