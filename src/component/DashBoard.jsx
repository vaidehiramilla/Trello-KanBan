import React, { useState } from "react";
import AddList from "./AddList";
import { addList } from "../store/ListSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import style from "./DashBoard.module.css";
import Button from "@mui/material/Button";

import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { nanoid } from "nanoid";
import AddACard from "./AddACard/AddACard";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import Navbar from "./header/Navbar";

export default function DashBoard() {
  const list = useSelector((state) => state.ListSlice.list);
  const [input, setInput] = useState("");
  // const [list, setList] = useState(lists)
  const [addBtnHide, setAddBtnHide] = useState(true);
  const dispatch = useDispatch();

  function handleCross() {
    setAddBtnHide(true);
  }
  function handleListInput(e) {
    setInput(e.target.value);
  }
  function handleAddList() {
    if (input) {
      // setList([...list, input])
      dispatch(addList({ id: nanoid(), title: input }));
      setInput("");
      // setAddBtnHide(true)
      window.scrollTo(600, 0);
    }
    // console.log(list);
  }

  // function handleListDelete(lists){
  //   const deleted = list.filter(item => item.title !== lists.title)
  //   setList(deleted)
  //   // alert('hello')
  //   console.log(deleted);
  // }

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  function handleEditInput(e){
      // setInput(e.target.innerText)
     
  }
  // console.log(input);
  return (
    <div className={style.dash_div}>
      <Navbar/>
      <h1> New DashBoard</h1>

      <div className={style.dash_containor}>
        <div className={style.list_container}>
          {list.map((list, index) => (
            <div key={index} className={style.cardBox}>
              <div className={style.list_card}>
                <div className={style.listName}>
                 <span contentEditable={true} onInput={handleEditInput}> {list.title} </span>
                  {/* <span><MoreHorizIcon onClick={() =>handleListDelete(list)}/></span> */}

                  <span>
                    <MoreHorizIcon sx={{cursor: 'pointer'}} onClick={handleClick} />
                  </span>
                  <Popover
                    open={open}
                    anchorEl={anchorEl}
                    onClose={handleClose}
                    anchorOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                    transformOrigin={{
                      vertical: 'top',
                      horizontal: 'left',
                    }}
                  >
                    <Typography
                      sx={{ p: 2 ,cursor: 'pointer'}}
                      onClick={() => handleListDelete(list)}
                      
                    >
                      Delete
                    </Typography>
                  </Popover>
                </div>
                <div className={style.cardBtn}>
                  <AddACard />
                </div>
              </div>
            </div>
          ))}
        </div>
        {addBtnHide ? (
          <Button
          
            variant="text"
            onClick={() => setAddBtnHide(false)}
            className={style.addbtn}
          >
            + Add a list
          </Button>
        ) : (
          <AddList
            handleCross={handleCross}
            input={input}
            handleListInput={handleListInput}
            handleAddList={handleAddList}
          />
        )}
      </div>
    </div>
  );
}
