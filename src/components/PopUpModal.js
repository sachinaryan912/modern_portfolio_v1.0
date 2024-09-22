import React from 'react';
import './Modal.css'; // External CSS file for animation and styles

const Modal = ({ showModal, handleClose }) => {
  return (
    <div className={`modal ${showModal ? 'show' : ''}`}>
      <div className="modal-content">
        <button className="close-btn" onClick={handleClose}>X</button>
        <div className="modal-header">
          <h2>TIC TACT TOE ONLINE</h2>
        </div>
        <div className="modal-body">
          <img src="tictactoe.png" alt="Tic Tac Toe Online" className="modal-image" />
          <div className="modal-description">
            <h3>Description</h3>
            <p>
              Generate random numbers effortlessly with our versatile and efficient tool.
              Whether you're working on a game, conducting a simulation, or exploring
              statistical models, our generator offers unparalleled precision and reliability.
            </p>
            <h3>Technology used</h3>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
