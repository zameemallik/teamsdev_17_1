"use client";
import React, { useState } from "react";

const CreateTitle = ({ styles, title, setTitle }) => {
  const [overText, setOverText] = useState(false);

  const handleInputTitle = (e) => {
    const inputText = e.target.value;
    if (inputText.length > 50) {
      setOverText(true);
      setTitle(inputText);
    } else {
      setOverText(false);
      setTitle(inputText);
    }
  };

  return (
    <div>
      {overText ? (
        <label className={styles.label} htmlFor="BlogTitleInput" style={{ color: "red" }}>
          50文字を超えています
        </label>
      ) : (
        <label className={styles.label} htmlFor="BlogTitleInput">
          Blog Title :{" "}
        </label>
      )}
      <input
        id="BlogTitleInput"
        className={styles.BlogInput}
        type="text"
        maxlength="50"
        value={title}
        placeholder="タイトルを入力してください"
        onChange={handleInputTitle}
      ></input>
    </div>
  );
};
export default CreateTitle;
