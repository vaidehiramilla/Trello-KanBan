import React from 'react';
import style from './DashBoard.module.css'
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';

export default function AddTask({handleCross,input,handleListInput,handleAddList}){
    return (
        <div className={style.addList_div}>
        <input value={input} placeholder='Enter list title' onChange={handleListInput}/> <br /> 
        <div className={style.crossbtn}>
        <Button sx={{height:'30px', textTransform: 'capitalize'}} variant="contained" onClick={handleAddList}>Add list</Button>
        <CloseIcon  onClick={handleCross} sx={{fontSize:'30px',color:'black',cursor: 'pointer'}}/>
        </div>
        </div>
    )
}
