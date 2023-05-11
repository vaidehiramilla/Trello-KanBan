import React, { useState } from 'react'
import { addList } from '../store/ListSlice';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import style from './DashBoard.module.css'
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';


export default function DashBoard() {
  const list = useSelector((state) => state.ListSlice.list)
  const [input, setInput] = useState('')
    // const [list, setList] = useState(lists)
    const [addBtnHide, setAddBtnHide] = useState(true)
    const dispatch = useDispatch()
    
   
    function handleCross(){
      setAddBtnHide(true)
    }
    function handleListInput(e){
      setInput(e.target.value)
      
    }
    function handleAddList(){
      if(input){
      // setList([...list, input])
       dispatch(addList({id: Math.random(), title: input}))
      setInput('')
      // setList()

      }
      // console.log(list);
    }

    // function handleListDelete(lists){
    //   const deleted = list.filter(item => item.title !== lists.title)
    //   setList(deleted)
    //   // alert('hello')
    //   console.log(deleted);
    // }

  return (
    <div className={style.dash_div}>
      <h1>DashBoard</h1>
      
      <div className={style.dash_containor}>
      <div className={style.list_container}>
        {
          list.map((list,index) => (
            <div key={index} className={style.list_card} >
              <div className={style.listName}>
              {list.title} <span><MoreHorizIcon onClick={() =>handleListDelete(list)}/></span>
              </div>
              <div className={style.cardBtn}>
                <Button sx={{width: '10vw', textTransform:'inherit', ":hover":{backgroundColor:'lightgray'}}} variant="text">+ Add a card</Button>
              </div>
             
            </div>
          ))
        }
      </div>
      {addBtnHide? <Button variant="text" onClick={()=> setAddBtnHide(false)} className={style.addbtn}>+ Add a list</Button> : (
        <AddTask handleCross={handleCross} input={input} handleListInput={handleListInput} handleAddList={handleAddList}/>
      )}
      </div>
    </div>
  )
}

function AddTask({handleCross,input,handleListInput,handleAddList}){
    return (
        <div className={style.addList_div}>
        <input value={input} placeholder='Enter list title' onChange={handleListInput}/> <br /> 
        <div className={style.crossbtn}>
        <Button sx={{height:'30px', textTransform: 'capitalize'}} variant="contained" onClick={handleAddList}>Add list</Button>
        <CloseIcon onClick={handleCross} sx={{fontSize:'30px',color:'black'}}/>
        </div>
        </div>
    )
}