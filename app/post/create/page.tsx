'use client'

import '../../css/writeblog.module.css'
import React,{useState} from 'react'

const PostCreatePage = () => {
    const [ title,setTitle ]=useState("")
    const [ description,setDescription ]=useState("")
    const [ selectedFile, setSelectedFile ] = useState(null);


    const handleInputTitle=(inputText)=>{
        setTitle(inputText)
    }

    const handleFileChange = (e) => {
        setSelectedFile(e.target.files[0]); // 選択されたファイルを取得
      };
  
    const handleInputDescription=(inputText)=>{
        setDescription(inputText)
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({ title, selectedFile, description });
      };

  return (
    <div>
    <form onSubmit={handleSubmit}>
      <h2>Title</h2>
      <input
      type="text" 
      value={title} 
      onChange={(e)=>handleInputTitle(e.target.value)}></input>
      <h2>Image</h2>
      <input type="file" name="image" accept="image/*" onChange={handleFileChange}/>
      <h2>Description</h2>
      <textarea
      value={description}
      onChange={(e)=>handleInputDescription(e.target.value)}></textarea>
    <button type="submit">create blog</button>
    </form>
    </div>
  )
}

export default PostCreatePage
