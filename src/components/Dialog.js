import React, { useState } from "react";
import "./Dialog.css"; // Move the styles to an external CSS file
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const Dialog = ({ onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="container modal-content">
        <div className="header">
          <h1>TIC TAC TOE ONLINE</h1>
          <button className="close-btn" onClick={onClose}>
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </div>
        <div className="image-container">
          <img
            src="https://oaidalleapiprodscus.blob.core.windows.net/private/org-Hh5RPsKhtBPsWCFSiEKnUJ6x/user-8qgiVpCV0U0b7zDjfFInHgjl/img-ZL27XvuPSmDzMcivLovLe7qW.png?st=2024-09-20T07%3A15%3A58Z&amp;se=2024-09-20T09%3A15%3A58Z&amp;sp=r&amp;sv=2024-08-04&amp;sr=b&amp;rscd=inline&amp;rsct=image/png&amp;skoid=d505667d-d6c1-4a0a-bac7-5c84a87759f8&amp;sktid=a48cca56-e6da-484e-a814-9c849652bcb3&amp;skt=2024-09-19T23%3A16%3A50Z&amp;ske=2024-09-20T23%3A16%3A50Z&amp;sks=b&amp;skv=2024-08-04&amp;sig=PssJNy/7392jL6%2BMbHrguV4fKnl8ZKUMAPEEZrTa%2BT4%3D"
            alt="Screenshot of Tic Tac Toe Online game interface"
            width="600"
            height="300"
          />
          <p>TICTACTOE - ONLINE</p>
        </div>
        <div className="description">
          <h2>Description</h2>
          <p>
            Generate random numbers effortlessly with our versatile and efficient tool. Whether you're working on a game, conducting a simulation, or exploring statistical models, our generator offers unparalleled precision and reliability. Designed for simplicity and speed, it's the perfect solution for anyone needing random numbers for any project or idea.
          </p>
        </div>
        <div className="technology">
          <h2>Technology used</h2>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
          </ul>
        </div>
      </div>
    </div>
  );
};