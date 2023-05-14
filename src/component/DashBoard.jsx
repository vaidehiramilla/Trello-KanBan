import React from "react";
import { deleteList } from "../store/ListSlice";
import { useDispatch, useSelector } from "react-redux";
import EditIcon from '@mui/icons-material/Edit';
import style from "./DashBoard.module.css";
import DeleteIcon from "@mui/icons-material/Delete";
import Navbar from "./header/Navbar";
import AddNew from "./AddNew";
import Card from "./AddACard/Card";

export default function DashBoard() {
  const list = useSelector((state) => state.ListSlice.list);

  const dispatch = useDispatch();

  function handleListDelete(listId) {
    dispatch(deleteList(listId));
    setAnchorEl(null);
  }

  return (
    <div className={style.dash_div}>
      <Navbar />
      <h1> New DashBoard</h1>

      <div className={style.dash_containor}>
        <div className={style.list_container}>
          {list.map((item) => (
            <div key={item.id} className={style.cardBox}>
              <div className={style.list_card}>
                <div className={style.listName}>
                  <span>{item.title}</span>
                  <span onClick={() => handleListDelete(item.id)}>
                    <DeleteIcon />
                  </span>
                </div>
                <div>
                  {item.task &&
                    item.task.map((task) => (
                      <div key={task.id} className={style.card}>
                        <Card cardData={task} />
                        <span> <EditIcon sx={{fontSize:'20px'}}/></span>
                      </div>
                    ))}
                </div>
                <div className={style.cardBtn}>
                
                  <AddNew type="card" listId={item.id} />
                </div>
              </div>
            </div>
          ))}
        </div>

        <AddNew />
      </div>
    </div>
  );
}
