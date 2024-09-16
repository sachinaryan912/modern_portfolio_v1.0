import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import "./Card.css";
import images_data from "../../assets/rng_latest_1.png";

export default function ProjectCardNew({ image,category, title, description,type }) {
  return (
    <div class="card">
            <img src={"../../assets/" + image}  alt="TicTacToe"/>
            <div class="card-footer">
                
                <div class="card-subtitle">{category}</div>
                <div class="card-title">{title}</div>
            </div>
        </div>

  );
}
