import React from 'react'
import typeSrc from '../assets/images/typewriter.png'
import { FiLogIn, FiLogOut} from 'react-icons/fi'
import { TfiWrite } from 'react-icons/tfi'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../redux/slices/auth'
import { useNavigate } from 'react-router-dom'
 
const Navbar = () => {

  const dispatch = useDispatch()
  const isAuth = useSelector(state => state.auth.isAuth)
  const navigate = useNavigate()

  const onClickLogout = () => {
    dispatch(logout())
    window.localStorage.removeItem('token')
    navigate('/login')
  } 

  return (
    <nav className='navbar'>
      <div className='logo'>
        <Link to={'/'}>
          <img src={typeSrc} alt='logo-img' />
          <div className='logo-txt'>
            Yung<span>Blog</span>
          </div>
        </Link>
      </div>
      <div className='menu'>
        {
          isAuth 
              ? <div className='menu-isauth'><Link to='/add-post'><TfiWrite/></Link><div onClick={onClickLogout}><FiLogOut/></div></div>
              : <Link className='login-link' to='/login'><FiLogIn /></Link> 
        }
      </div>
    </nav>
  )
}

export default Navbar