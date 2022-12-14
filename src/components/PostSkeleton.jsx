import React from 'react'
import { Link } from 'react-router-dom'
import dustySrc from '../assets/images/dusty.jpg'
import plugSrc from '../assets/images/user.png'
import { AiOutlineEye } from 'react-icons/ai'
import { MdDateRange } from 'react-icons/md'
import { apiUrl } from '../utils/axios'


const PostSkeleton = ({ imageUrl, user, title, viewsCount, createdAt, id, text }) => {
  return (
    <div className='post-wrapper'>
        <div className='post-img'>
            <img src={ imageUrl ? apiUrl + imageUrl : '' } alt="" />
        </div>
        <div className='user'>
            <img src={ plugSrc } alt="" />
            <div className='user-name'>{user ? user.fullName : 'Full Name'}</div>
        </div>
        <div className='title'>
            <Link to={`/post/${id ? id : '1'}`}>
                <h1>{title ? title : 'Loading...'}</h1>
            </Link>
        </div>
        <div className='info'>
            <div className='created-at'>
                <MdDateRange/><span>{createdAt ? createdAt : 'date'}</span>
            </div>
            <div className='views'>
                <AiOutlineEye/><span>{viewsCount ? viewsCount : 'views'}</span>
            </div>
        </div>
        <div className='post-body'>
            {text ? text : ''}
        </div>
    </div>
  )
}

export default PostSkeleton