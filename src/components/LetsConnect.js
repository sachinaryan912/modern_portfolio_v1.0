import React from 'react';
import data from './database/localDB.json';

export default function LetsConnect() {
    const home = data.home;
  return (
    <div style={{border: "1px solid black", backgroundColor: "#000"}}>
        <div className="connect mt-4 mb-4">
        <div className="arrows">
          <i className="bx bx-right-arrow-alt"></i>
          <i className="bx bx-right-arrow-alt"></i>
          <i className="bx bx-right-arrow-alt"></i>
        </div>
          <p className='lt_txt'>Let's Connect!</p>
    
      </div>

      <div className="copyright" style={{ color: 'gainsboro' }}>
        <p>© Copyright 2024. All rights Reserved. {home.name}</p>
      </div>
      <br />

    </div>
  );}