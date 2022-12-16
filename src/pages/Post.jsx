import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import PostSkeleton from '../components/PostSkeleton'
import { loadPost } from '../redux/slices/SinglePost'
import Loading from '../components/Loading'

const Post = () => {

  let postId = useParams().id
  const dispatch = useDispatch()
  const isLoading = useSelector(state => state.singlePost.loading)
  const postData = useSelector(state => state.singlePost.items)

 
  useEffect(() => {
    dispatch(loadPost(postId))
  }, [])

  let date = new Date(`${postData.createdAt}`)
  let strDate = date.toDateString()

  return (
    <div className='page post-page'>
      {isLoading 
            ? <Loading/>
            : <PostSkeleton 
                      imageUrl={postData.imageUrl}
                      user={postData.user}
                      id={postData._id}
                      key={postData._id}
                      title={postData.title}
                      viewsCount={postData.viewsCount}
                      createdAt={strDate}
                      text={postData.text}
                      /> }
    </div>
  )
}

export default Post