import React from 'react'
import { Link } from 'react-router-dom'
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
            <img src={ user ? user.avatarUrl : plugSrc } alt="" />
            <div className='user-name'>{user ? user.fullName : ''}</div>
        </div>
        <div className='title'>
            <Link to={`/post/${id ? id : '1'}`}>
                <h1>{title ? title : ''}</h1>
            </Link>
        </div>
        <div className='info'>
            <div className='created-at'>
                <MdDateRange/><span>{createdAt ? createdAt : ''}</span>
            </div>
            <div className='views'>
                <AiOutlineEye/><span>{viewsCount ? viewsCount : ''}</span>
            </div>
        </div>
        <div className='post-body'>
            {text ? text : ''}
        </div>
    </div>
  )
}

export default PostSkeleton