import React, { useRef,useState } from "react";
import style from "./AddACard.module.css";
import { useNavigate } from "react-router-dom";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { editTask } from "../../store/ListSlice";
import { useDispatch } from "react-redux";


export default function Card({ cardData, handleDeleteTask }) {
  const [editingTaskId, setEditingTaskId] = useState(null);
  const textRef = useRef(null)
  const navigate = useNavigate();
  const dispatch = useDispatch()

  function handleNavigate(card) {
    navigate("/task/" + card.id + "-" + card.title, { state: { card } });

  }
 function handleEditTask(cardData){
setEditingTaskId(cardData.id)
 }
 function handleTaskChangeBlur(cardData){
  const updated = (textRef.current.value)
   dispatch(editTask({updated, cardData}))
  setEditingTaskId(null)
  // console.log(updated);

 }


  return (
    <>
      <div className={style.cards}>
        <div>

       
       {editingTaskId ===cardData.id? (
        <form>
          <input type="text" ref={textRef}
          className={style.editInput}
          defaultValue={cardData.title}
          onBlur={() =>handleTaskChangeBlur(cardData)}
          autoFocus
           />
        </form>
       ) : <p onClick={() => handleNavigate(cardData)}> {cardData.title}</p>}
        </div>

        <div className={style.edIcon}>
          <span>
            
            <EditIcon
              sx={{ fontSize: "15px", cursor: "pointer" }}
              onClick={() => handleEditTask(cardData)}
            />
          </span>
          <p>
            <DeleteIcon
              sx={{ fontSize: "15px", cursor: "pointer" }}
              onClick={() => handleDeleteTask(cardData)}
            />
          </p>
        </div>
      </div>
    </>
  );
}
