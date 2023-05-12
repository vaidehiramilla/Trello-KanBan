import React from 'react'
import style from "./Activity.module.css"
import { useState } from 'react'
import { Button } from '@mui/material'

export default function Activity() {

  const [text, setText] = useState("")
  const [arr, setArr] = useState([])

  function handleClick(){
    setArr([...arr,text])
    setText("")
  }

  return (
    <div className={style.mainContainer}>
      <h1>Activity</h1>
      <input value={text} onChange={(e) => setText(e.target.value)}/>
      <Button variant="contained" onClick={handleClick}>Click</Button>
      {
        arr.map(ele => {
          return <p>{ele}</p>
        })
      }
    </div>
  )
}
