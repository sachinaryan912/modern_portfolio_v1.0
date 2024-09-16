import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import "./Card.css";

export default function ProjectCardNew({ image,category, title, description,type }) {
  return (
    <div class="card1">
            <img src={"../../assets/" + image}  alt="TicTacToe"/>
            <div class="card-footer">
                
                <div class="card-subtitle">{category}</div>
                <div class="card-title">{title}</div>
            </div>
        </div>

  );
}
