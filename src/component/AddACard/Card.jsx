
import{ useState } from 'react';
import style from './AddACard.module.css';
import { Link, useNavigate } from 'react-router-dom';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const styles = {
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  position: 'fixed',
};

export default function Card({ cardData }) {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const handleNavigate = (card) => {
    navigate(`/task/${card.id}-${card.title}`, { state: { task: card.title } });
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleCardClick = () => {
    handleNavigate(cardData);
    handleOpen();
  };

  return (
    <>
      <div className={style.cards}>
        <Link onClick={handleCardClick}>
          {cardData.title}
        </Link>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={styles}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal>
    </>
  );
}

