import React from 'react'
import Title from './Title'
import Description from './Description'
import Activity from './Activity'
import style from "./DialogBox.module.css"

function DialogBox() {
  return (
    <div className={style.mainContainer}>
      <Title/>
      <Description/>
      <Activity/>
    </div>
  )
}

export default DialogBox;
