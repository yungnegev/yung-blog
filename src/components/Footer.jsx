import React from 'react'
import { AiOutlineInstagram, AiOutlineTwitter } from 'react-icons/ai'
import { SlSocialVkontakte } from 'react-icons/sl'


const Footer = () => {
  return (
    <footer className='footer'>
      <div className='text'>
        YungNegev 'All Rights Reserved' ©
      </div>

      <div className='socials'>
        <AiOutlineInstagram />
        <AiOutlineTwitter />
        <SlSocialVkontakte />
      </div>
    </footer>
  )
}

export default Footer