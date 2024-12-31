'use client'

import styles from './writeblog.module.css'
import React,{useState} from 'react'
import ImageUploader from '../../components/ImageUploader'
import CreateTitle from '../../components/CreateTitle'
import CreateDescription from '../../components/CreateDescription'

const PostCreatePage = () => {
    const [ title,setTitle ]=useState("")
    const [ description,setDescription ]=useState("")
    const [ image,setImage ] =useState(null)

    const handleSubmit = (e) => {
        e.preventDefault();
        if(image != null){
        console.log(image.name)
      }
        console.log({ title, description });
      };

  return (
    <div className={styles.container}>
    <form className={styles.form} onSubmit={handleSubmit}>

      <CreateTitle styles={styles} title={title} setTitle={setTitle} />
      <ImageUploader styles={styles} onFileSelect={(file) => setImage(file)} />
      <CreateDescription styles={styles} description={description} setDescription={setDescription} />

    </form>
    </div>
  )
}

export default PostCreatePage
