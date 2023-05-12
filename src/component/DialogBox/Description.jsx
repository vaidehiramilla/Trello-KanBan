import { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import style from "./Descripition.module.css"
import { HiMenuAlt2 } from 'react-icons/hi';
import { Button } from '@mui/material';

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
    <div className={style.logoH1}>
    <div><HiMenuAlt2 className={style.logo}/></div>
    <h2>Description</h2>
    </div>
    <div>
      {isEditing ? 
      <div className={style.textAreaButtons}>
      <ReactQuill value={content} onChange={handleEditorChange} className={style.reactQuill}/>
      <div>
      <Button 
      variant="contained" 
      sx={{
      marginTop: "2.5rem", 
      width: "5rem", 
      textTransform: "capitalize"
      }}
      onClick={() => setIsEditing(false)}
      >Save</Button>
      <Button 
      sx={{
      marginTop: "2.5rem", 
      width: "5rem", 
      textTransform: "capitalize"
      }}
      onClick={() => setIsEditing(false)}
      >Cancel</Button>
      </div>
      </div> 
      :
     (
        <div onClick={handleClick} className={style.DescriptionDiv}>Add a more detailed descripition...</div>
      )}
    </div>
    </>
  );
};

export default Description;

