"use client";
import React, { useState } from "react";

const ImageUploader = ({ styles, onFileSelect }) => {
  const [sizeError, setSizeError] = useState(false);
  const [preview, setPreview] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const maxSize = 1024 * 1024 * 5;

    if (file) {
      if (file.size < maxSize) {
        setSizeError(false);
        setPreview(URL.createObjectURL(file)); // プレビュー用のURLを生成
        onFileSelect(file); // 親コンポーネントにファイルを渡す
      } else {
        setSizeError(true);
      }
    }
  };

  return (
    <div
      className={styles.uploader}
      onClick={() => document.getElementById("fileInput").click()} // クリックでファイル選択をトリガー
    >
      <input
        id="fileInput"
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        style={{ display: "none" }} // ファイル選択ボタンを非表示
      />
      {preview ? (
        <img src={preview} alt="Preview" className={styles.preview} />
      ) : sizeError ? (
        <p style={{ color: "red" }}>５MB以下の画像を選択してください</p>
      ) : (
        <p>クリックして画像を選択してください</p>
      )}
    </div>
  );
};

export default ImageUploader;
