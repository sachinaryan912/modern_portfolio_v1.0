import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Card, Grid } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '60vw',
  height:'60vh',
  bgcolor: '#1b1b1b',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function CustomModel({open,setOpen,project}) {
  
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  console.log("dessss",project);
  

  return (
    <div>
      {/* <Button onClick={handleOpen}>Open modal</Button> */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
     <Box sx={style}>
     <div class="card2"  style={{cursor:'pointer'}}>
            <img src={"../../assets/" + project.image}  alt="TicTacToe"/>
            <div class="card-footer">
                
                <div class="card-subtitle">{project.category}</div>
                <div class="card-title" >{project.title}</div>
                <div class="card-description">{project.description}</div>
                <Button onClick={()=>{setOpen(false)}}>close</Button>

            </div>
        </div>
     </Box>
      </Modal>
    </div>
  );
}
