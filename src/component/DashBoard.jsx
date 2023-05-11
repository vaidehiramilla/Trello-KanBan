import React, { useState } from 'react'
import AddList from './AddList'
import { addList } from '../store/ListSlice';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import style from './DashBoard.module.css'
import Button from '@mui/material/Button';

import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { nanoid } from 'nanoid';
import AddACard from './AddACard/AddACard';


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
       dispatch(addList({id: nanoid(), title: input}))
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
            <div key={index} className={style.cardBox}  >
              <div className={style.list_card}>
                
             
              <div className={style.listName}>
              {list.title} <span><MoreHorizIcon onClick={() =>handleListDelete(list)}/></span>
              </div>
              <div className={style.cardBtn}>
                {/* <Button sx={{width: '10vw', textTransform:'inherit', ":hover":{backgroundColor:'lightgray'}}} variant="text">+ Add a card</Button> */}
                <AddACard/>
              </div>
              </div>
            </div>
          ))
        }
      </div>
      {addBtnHide? <Button variant="text" onClick={()=> setAddBtnHide(false)} className={style.addbtn}>+ Add a list</Button> : (
        <AddList handleCross={handleCross} input={input} handleListInput={handleListInput} handleAddList={handleAddList}/>
      )}
      </div>
    </div>
  )
}

