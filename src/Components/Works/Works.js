import React from 'react';
import "./Works.css";
import img1 from "../Images/Screenshot 2024-05-18 144815.png";
import img2 from "../Images/Screenshot 2024-05-18 144728.png";
import img3 from "../Images/Screenshot 2024-05-18 144658.png";
import img4 from "../Images/Screenshot 2024-05-18 144638.png";
import img5 from "../Images/Screenshot 2024-05-18 144612.png";
import img6 from "../Images/Screenshot 2024-05-18 144539.png";

export default function Works() {
  return (
    <div className='works'>
        <img src={img1} alt=''></img>
        <img src={img5} alt=''></img>
        <img src={img6} alt=''></img>
        <img src={img4} alt=''></img>
        <img src={img2} alt=''></img>
        <img src={img3} alt=''></img>

    </div>
  )
}
