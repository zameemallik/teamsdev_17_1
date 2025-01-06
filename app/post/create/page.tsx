"use client";

import styles from "./writeblog.module.css";
import React, { useState } from "react";
import ImageUploader from "@/app/components/ImageUploader";
import CreateTitle from "@/app/components/CreateTitle";
import CreateDescription from "@/app/components/CreateDescription";

const PostCreatePage = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState<File | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (image != null) {
      // eslint-disable-next-line no-console
      console.log(image.name);
    }
    // eslint-disable-next-line no-console
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
  );
};

export default PostCreatePage;
