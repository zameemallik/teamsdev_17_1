import React, { useState } from "react";

const CreateDescription = ({ styles, description, setDescription }) => {
  const [overText, setOverText] = useState(false);

  const handleInputDescription = (e) => {
    const inputText = e.target.value;
    if (inputText.length > 2000) {
      setOverText(true);
      setDescription(inputText);
    } else {
      setOverText(false);
      setDescription(inputText);
    }
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", justifyContent: "flex-start" }}>
      {overText ? (
        <label className={`${styles.label} ${styles.Alert}`} htmlFor="BlogContentInput">
          2000文字を超えています。
        </label>
      ) : (
        <label className={styles.label} htmlFor="BlogContentInput">
          Article Content :{" "}
        </label>
      )}

      <textarea
        style={{ display: "block", marginBottom: "10px", minHeight: "225px", resize: "none", maxHeight: "450px" }}
        className={styles.BlogInput}
        id="BlogContentInput"
        maxlength="2000"
        value={description}
        placeholder="記事の内容を入力してください"
        onChange={handleInputDescription}
      />

      <div style={{ display: "flex", justifyContent: "flex-end", width: "100%" }}>
        <button
          style={{ width: "100px", minHeight: "30px", justifyContent: "flex-end", marginRight: "20px" }}
          type="submit"
        >
          create blog
        </button>
      </div>
    </div>
  );
};

export default CreateDescription;
