import React from 'react'
import typeSrc from '../assets/images/typewriter.png'
import { FiLogIn } from 'react-icons/fi'
import { Link } from 'react-router-dom'
 
const Navbar = () => {
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
        <Link to='/login'>
          <FiLogIn />
        </Link>
      </div>
    </nav>
  )
}

export default Navbar