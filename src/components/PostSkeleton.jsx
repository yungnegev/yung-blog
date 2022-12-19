import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import plugSrc from '../assets/images/user.png'
import { AiOutlineEye, AiFillDelete } from 'react-icons/ai'
import { MdDateRange } from 'react-icons/md'
import { ImWrench } from 'react-icons/im'
import { apiUrl } from '../utils/axios'
import { useDispatch, useSelector } from 'react-redux'
import { removePost } from '../redux/slices/Posts'
import { useNavigate } from 'react-router-dom'

const PostSkeleton = ({ imageUrl, user, title, viewsCount, createdAt, id, text }) => {
    
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [delbtn, setDelbtn] = useState(null)
    const [patchbtn, setPatchbtn] = useState(null)
    const authUserData = useSelector(state => state.auth.data)

    const onDelete = (id) => {
        dispatch(removePost(id))
        navigate('/')
    }
  
    useEffect(() => {
        if(authUserData?._id === user?._id){
            setDelbtn(<button onClick={() => onDelete(id)} id='delete-post'><AiFillDelete/></button>)
        }
        if(authUserData?._id === user?._id){
            setPatchbtn(<button onClick={() => navigate(`/add-post/${id}`)} id='patch-post'><ImWrench/></button>)
        }
    }, [])

    const createMarkup = () => {
        if (text){
            return {__html: `${text}`}
        }
    }
  
    return (
    <div className='post-wrapper'>
        <div className='post-img' id='post-img'>
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
            <div className="left-info">
                <div className='created-at'>
                    <MdDateRange/><span>{createdAt ? createdAt : ''}</span>
                </div>
                <div className='views'>
                    <AiOutlineEye/><span>{viewsCount ? viewsCount : ''}</span>
                </div>
            </div>
            <div className="right-info">
                {patchbtn}
                {delbtn}
            </div>
        </div>
        <div className='post-body' dangerouslySetInnerHTML={createMarkup()} >
        </div>
    </div>
  )
}

export default PostSkeleton