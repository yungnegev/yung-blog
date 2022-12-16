import React from 'react'
import pulseSrc from '../assets/images/pulse.svg'

const Loading = () => {
  return (
    <div className='loading'>
        <img src={pulseSrc} alt="loading" />
    </div>
  )
}

export default Loading