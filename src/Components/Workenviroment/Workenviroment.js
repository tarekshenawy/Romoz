import React from 'react';
import "./Workenviroment.css";
import img1 from "../Images/Screenshot 2024-05-18 141947.png";
import img2 from "../Images/Screenshot 2024-05-18 142730.png";
import img3 from "../Images/Screenshot 2024-05-18 142754.png";
import img4 from "../Images/Screenshot 2024-05-18 142820.png";

export default function Workenviroment() {
  return (
    <div className='workenviroment'>
     
        <div className='img1'>
            <img src={img4} alt=''></img>
            <p>الانطلاق</p>
        </div>

        <div className='img1'>
            <img src={img3} alt=''></img>
            <p>البرمجه والتطوير</p>
        </div>

        <div className='img1'>
            <img src={img2} alt=''></img>
            <p>التحليل والتصوير</p>
        </div>
        
        <div className='img1'>
            <img src={img1} alt=''></img>
            <p>الفكره</p>
        </div>
    </div>
  )
}
