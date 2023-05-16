import React from 'react'
import style from "./Activity.module.css"
import { useState } from 'react'
import { Button } from '@mui/material'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { RxActivityLog } from 'react-icons/rx';


export default function Activity() {

  const [text, setText] = useState("")
  const [arr, setArr] = useState([])
  const [isEditing, setIsEditing] = useState(false);

  function handleClick(){
    setIsEditing(true)
  }

  return (
    <div className={style.mainContainer}>
      <div className={style.iconH2Button}>
      <div className={style.iconeH2}>
      <RxActivityLog className={style.logo}/>
      <h2>Activity</h2>
      </div>
      <div>
      <Button variant='contained' 
      sx={{
      textTransform: "capitalize",
      backgroundColor: "var(--ds-background-neutral,#091e420a)",
      color: "black",
      }}>Show details</Button>
      </div>
      </div>
      {isEditing ? (
      <div className={style.textAreaButton}>
      <ReactQuill className={style.reactQuill} value={text} onChange={(e) => setText(e.target.value)}/>
      <Button variant='contained' onClick={() => setIsEditing(false)} sx={{
      marginTop: "2.5rem", 
      width: "5rem", 
      textTransform: "capitalize"
      }}>Save</Button>
      </div>
      )
      :
      <div onClick={handleClick} className={style.activityDiv}>Write a comment...</div>
    }
    </div>
  )
}