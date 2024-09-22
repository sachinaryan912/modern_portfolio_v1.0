import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { IoClose } from "react-icons/io5";
import { Card, Grid } from '@mui/material';
import { Col, Container, Row } from "react-bootstrap";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  maxWidth: '100vw',
  // height:'60vh',
  border:'none',
  outline: 'none',
  // bgcolor: '#1b1b1b',
  // border: '2px solid #000',

  p: 4,
};

const showStyle = {
  transform: 'translate(-50%, -50%) scale(1)', // Pop-in effect
  opacity: 1, // Fully visible
};

export default function CustomModel({open,setOpen,project}) {

  const [showAnimation, setShowAnimation] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
    setTimeout(() => setShowAnimation(true), 10); // Slight delay for smooth pop-in
  };

  const handleClose = () => {
    setShowAnimation(false); // Start pop-out animation
    setTimeout(() => setOpen(false), 500); // Close modal after animation ends
  };
  
  // const handleOpen = () => setOpen(true);
  // const handleClose = () => setOpen(false);
  // console.log("dessss",project);
  

  return (
    <div>
      {/* <Button onClick={handleOpen}>Open modal</Button> */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
     <Box sx={{ ...style, ...(showAnimation ? showStyle : {}) }}>
     <div class="card2"  style={{cursor:'pointer'}}>
     <div className='heading-bar'>
      
      <h3>{project.title}</h3>
      <div className="close-btn" onClick={()=>{setOpen(false)}}>
        <IoClose /> <span>Close</span>
      </div>
     </div>
     <img src={"../../assets/" + project.image}  alt="TicTacToe"/>
     

            
            <div class="card-footer">
                
                <div class="card-subtitle">{project.category}</div>

                <h5 className='mt-2'>Description</h5>
                
                <div class="card-description">{project.description}</div>

                <h5 className='mt-2'>Technology used</h5>
                <ul>
                  {project.technologies.map((skill, index) => (
                    <li key={index}>{skill}</li>
                  ))}
                </ul>

            </div>
        </div>
     </Box>
      </Modal>
    </div>
  );
}
