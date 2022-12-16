import React, { useEffect } from 'react'
import { loadPosts } from '../redux/slices/Posts'
import { useDispatch, useSelector } from 'react-redux'
import PostSkeleton from '../components/PostSkeleton'
import Loading from '../components/Loading'

const Home = () => {
  
  const dispatch = useDispatch()
  const isLoading = useSelector(state => state.posts.loading)
  const postData = useSelector(state => state.posts.items)

  useEffect(() => {
    dispatch(loadPosts())
  }, [])

  let $postFeed = postData?.map(post => {
    
    let date = new Date(post.createdAt)
    let strDate = date.toDateString()

    return <PostSkeleton 
                imageUrl={post.imageUrl}
                user={post.user}
                title={post.title}
                id={post._id}
                viewsCount={post.viewsCount}
                createdAt={strDate}
                key={post._id}
                />
  })
  
  return (
    <div className='page home-page'>
      <div className='feed'>
        {isLoading 
            ? <Loading /> 
            : $postFeed }
      </div>
    </div>
  )
}

export default Home