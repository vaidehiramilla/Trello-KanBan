import React from 'react'

import { Button, TextField } from "@mui/material";
import style from './AddACard.module.css';
import { useState } from "react";
import CloseIcon from '@mui/icons-material/Close';
import { nanoid } from 'nanoid';
import EditIcon from '@mui/icons-material/Edit';


export default function AddACard() {
  const [cardText, setCardText] = useState('');
  const [textfield, setTextfield] = useState(false);
  const [closeBtn, setCloseBtn] = useState(true)
  const [cards, setCards] = useState([]);
  // const [editHidden, setEditHidden] = useState(false)

  const handleAddCard = () => {
    // console.log('Adding New Card', cardText);
    const newCard = {
      id: nanoid(), 
      text: cardText
    };
    setCards(prevCards => [...prevCards, newCard]); 
    setCardText('');
  };

  const handleText = (e) => {
    setCardText(e.target.value);
  };

  const handleToggleTextField = () => {
    setTextfield(true);
  };

  const handlebtn = () => {
    setCloseBtn(false);
    setTextfield(false);
  };

  return (
    <div>
      {/* <h1>Add a card</h1> */}
     <div className={style.cards}>
        {cards.map((card) => (
          <div key={card.id} className={style.card} >
           <p >  {card.text} </p>
           <span> <EditIcon sx={{fontSize:'20px'}}/></span>
          </div>
        ))}
      {!textfield ? (
        <Button
          sx={{ width: '10vw', textTransform: 'inherit', ':hover': { backgroundColor: 'lightgray' } }}
          variant="text"
          onClick={handleToggleTextField}

        >
          + Add a card
        </Button>
      ) : (
        <div>
          <TextField onChange={handleText} value={cardText}  placeholder="Add new card..."/>
          <div style={{ display: 'flex', paddingTop: '.4rem' }}>
            <Button sx={{ height: '30px', textTransform: 'capitalize' }} variant="contained" onClick={handleAddCard} disabled={!cardText.trim()}>Add Card</Button>
            <CloseIcon onClick={handlebtn} sx={{ fontSize: '30px', color: 'black', cursor: 'pointer' }} />
          </div>
        </div>
      )}
    </div>
  
  </div>
  );
}
