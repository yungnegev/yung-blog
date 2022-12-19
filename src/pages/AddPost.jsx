import React, { useEffect, useState } from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import { BsUpload } from 'react-icons/bs'
import { useDispatch, useSelector } from 'react-redux'
import { sendPost } from '../redux/slices/SendPost'
import axios from '../utils/axios'
import { useNavigate, Navigate, useParams } from 'react-router-dom'
import { loadPost } from '../redux/slices/SinglePost'

const AddPost = () => {

  const urlId = useParams().id
  const isEditing = Boolean(urlId) 
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const isAuth = useSelector(state => state.auth.isAuth)
  const [imageUrl, setImageUrl] = useState(null)
  const [title, setTitle] = useState('')
  const [text, setText] = useState('')
  const [imgName, setImgName] = useState('')

  useEffect(() => {
    const fetchData = async (urlId) => {
    dispatch(loadPost(urlId)).then( data => {
      console.log(data)
      setTitle(data.payload.title)
      setText(data.payload.text)
      setImageUrl(data.payload.imageUrl)
    })
    }

    fetchData(urlId)

  }, [])


  let postInput = {
    title,
    text,
    imageUrl,
  }

  const handleChangeFile = async (event) => {
    try {
      const formData = new FormData()
      let file = event.target.files[0]
      setImgName(file.name)
      formData.append('image', file)
      const { data } = await axios.post('/upload', formData)
      setImageUrl(data.url)
    } catch (error) {
      console.warn(error)
      alert('Error loading file.')
    }
  };

  const onSend = async () => {
    if (title && imageUrl && text) {
      if(!isEditing) {
        dispatch(sendPost(postInput))
        navigate('/')
      }
      if(isEditing) {
        axios.patch(`/posts/${urlId}`, postInput)
        navigate(`/post/${urlId}`)
      }
    } else {
      alert('Please fill in all the fields and upload an image.')
    }
  }

  if (!isAuth) {
    return <Navigate to='/'/>
  }
  
  return (
    <div className="add-page">
      <div className="write-wrapper">
        <div className='write'> 
          <div className="content">
            <input type='text' value={title} onChange={(e) => setTitle(e.target.value)} placeholder='title' />
            <div className="editorContainer">
              <ReactQuill theme='snow' value={text} onChange={setText}/>
            </div>
          </div>
          <div className="menu">
            <input onChange={(e) => handleChangeFile(e)} type='file' id='file-upload' name='' style={{display:'none'}}/>
            <label htmlFor='file-upload'>Upload Image <BsUpload/></label>
            <div>{ imgName }</div>
            <button className='write-btn' onClick={onSend}>Post</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddPost