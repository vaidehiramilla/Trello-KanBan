import { deleteList } from "../store/ListSlice";
import { useDispatch, useSelector } from "react-redux";
import EditIcon from '@mui/icons-material/Edit';
import style from "./DashBoard.module.css";
import DeleteIcon from "@mui/icons-material/Delete";
import Navbar from "./header/Navbar";
import AddNew from "./AddNew";
import Card from "./AddACard/Card";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd"

// const [items, setItems] = useState(baseData)

export default function DashBoard() {
  const list = useSelector((state) => state.ListSlice.list);
  const dispatch = useDispatch();
  function handleListDelete(listId) {
    dispatch(deleteList(listId));
    setAnchorEl(null);
  }


  function onDragEnd(result) {
    if (!result.destination) {
      return;
    }
    const newItems = [...list];
    const [removed] = newItems.splice(result.source.index, 1);
    newItems.splice(result.destination.index, 0, removed);
    dispatch(newItems)
  }

  // const updatedContent = content.map((c, index) => {
  //   const slide = c
  //   if (slide.displayPosition === result.destination.index + 1 && index !== result.source.index) {
  //     slide.displayPosition -= draggedIndexDifference
  //   }
  //   return slide
  // })

  // onDragUpdate = result => {
  //   if (!result.destination) {
  //     return
  //   }
  //   const { content } = this.state
  //   const dragged = content[result.source.index]
  //   const previousDraggedIndex = dragged.displayPosition
  //   dragged.displayPosition = result.destination.index + 1
  //   const draggedIndexDifference = dragged.displayPosition - previousDraggedIndex
  //   const updatedContent = content.map((c, index) => {
  //     const slide = c
  //     if (slide.displayPosition === result.destination.index + 1 && index !== result.source.index) {
  //       slide.displayPosition -= draggedIndexDifference
  //     }
  //     return slide
  //   })
  //   this.setState({
  //     content: updatedContent,
  //   })
  // }

  return (
    <div className={style.dash_div}>
      <Navbar />
      <h1> New DashBoard</h1>
      <div className={style.dash_containor}>
        <div className={style.list_container}>
          <DragDropContext onDragEnd={onDragEnd} onDragUpdate={null}>
            <Droppable droppableId="droppable" >
              {(provided, snapshot) => (
                <div
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                  style={{
                    background: snapshot.isDraggingOver
                      ? "lightblue"
                      : "lightgrey",
                    padding: 4,
                    width: 250,
                    minHeight: 500
                  }}
                >
                  {list.map((item, index) => (
                    <Draggable draggableId={item.id} index={index}>
                      {(provided, snapshot) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          style={{
                            userSelect: "none",
                            padding: 16,
                            margin: "0 0 8px 0",
                            minHeight: "50px",
                            backgroundColor: snapshot.isDragging
                              ? "#263B4A"
                              : "#456C86",
                            color: "white",
                            ...provided.draggableProps.style
                          }}
                        >
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
                                      <span> <EditIcon sx={{ fontSize: '20px' }} /></span>
                                    </div>
                                  ))}
                              </div>
                              <div className={style.cardBtn}>
                                <AddNew type="card" listId={item.id} />
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                  <AddNew />
                </div>
              )}
            </Droppable>
          </DragDropContext>
        </div>
      </div>
    </div>
  );
}
