import React, { useState } from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import { BsUpload } from 'react-icons/bs'
import { useDispatch } from 'react-redux'
import { sendPost } from '../redux/slices/SendPost'
import axios from '../utils/axios'

const AddPost = () => {

  const dispatch = useDispatch()
  const [imageUrl, setImageUrl] = useState(null)
  const [title, setTitle] = useState('')
  const [text, setText] = useState('')

  let postInput = {
    title,
    text,
    imageUrl,
  }

  const handleChangeFile = async (event) => {
    try {
      const formData = new FormData()
      let file = event.target.files[0]
      console.log(file)
      formData.append('image', file)
      const { data } = await axios.post('/upload', formData)
      setImageUrl(data.url)
    } catch (error) {
      console.warn(error)
      alert('Error loading file.')
    }
  };


  const onSend = () => {
    dispatch(sendPost(postInput))
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
            <button className='write-btn' onClick={onSend}>Post</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddPost