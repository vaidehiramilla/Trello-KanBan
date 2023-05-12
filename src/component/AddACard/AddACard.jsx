
import { Button, TextField } from "@mui/material";
import style from './AddACard.module.css';
import { useState } from "react";
import CloseIcon from '@mui/icons-material/Close';
import { nanoid } from "nanoid";


export default function AddACard() {
  const [cardText, setCardText] = useState('');
  const [textfield, setTextfield] = useState(false);
  const [cards, setCards] = useState([]);

  const handleAddCard = () => {
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
    setTextfield(false);
  };

  return (
    <div>
     <div className={style.cards}>
        {cards.map((card) => (
          <div key={card.id} className={style.card}>
           <p >  {card.text} </p>
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
          <TextField onChange={handleText} value={cardText} sx={{width : '18.2rem'}} placeholder="Add new card..."/>
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
