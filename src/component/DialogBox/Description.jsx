import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import style from "./Descripition.module.css"

function Description(){
  const [isEditing, setIsEditing] = useState(false);
  const [content, setContent] = useState('');

  const handleClick = () => {
    setIsEditing(true);
  };

  const handleEditorChange = (e) => {
    setContent(e.target.value);
  };

  return (
    <>
    <h1>Description</h1>
    <div>
      {isEditing ? (
        <ReactQuill value={content} onChange={handleEditorChange} className={style.reactQuill}/>
      ) : (
        <textarea value={content} onClick={handleClick}/>
      )}
    </div>
    </>
  );
};

export default Description;

